/**
 * GuidedTour Component
 * Requirements: 10.5
 *
 * Provides a guided tour for first-time users with step-by-step tooltips
 */

'use client';

import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { useGuidedTour, type TourStep } from '@/lib/hooks/useGuidedTour';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { useLocale, useTranslations } from 'next-intl';

export interface GuidedTourProps {
  steps: TourStep[];
  translations: {
    startTour: string;
    next: string;
    prev: string;
    finish: string;
    skip: string;
    stepOf: string;
    welcomeTitle: string;
    welcomeMessage: string;
  };
  autoStart?: boolean;
}

interface TooltipPosition {
  top: number;
  left: number;
  placement: 'top' | 'bottom' | 'left' | 'right';
}

export const GuidedTour: React.FC<GuidedTourProps> = ({
  steps,
  translations,
  autoStart = false,
}) => {
  const t = useTranslations('common');
  const direction = useLocale() === 'ar' ? 'rtl' : 'ltr';
  const {
    isActive,
    currentStep,
    currentStepData,
    totalSteps,
    isFirstVisit,
    startTour,
    nextStep,
    prevStep,
    endTour,
    dismissTour,
  } = useGuidedTour(steps);

  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition | null>(null);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [showWelcome, setShowWelcome] = useState(false);

  // Show welcome dialog for first-time visitors
  useEffect(() => {
    if (isFirstVisit && autoStart) {
      setShowWelcome(true);
    }
  }, [isFirstVisit, autoStart]);

  // Calculate tooltip position when step changes
  useEffect(() => {
    if (!isActive || !currentStepData) {
      setTooltipPosition(null);
      setTargetRect(null);
      return;
    }

    const calculatePosition = () => {
      const target = document.querySelector(currentStepData.target);
      if (!target) {
        setTooltipPosition(null);
        setTargetRect(null);
        return;
      }

      const rect = target.getBoundingClientRect();
      setTargetRect(rect);

      const margin = 12;
      const tooltipWidth = Math.min(320, window.innerWidth - margin * 2);
      const tooltipHeight = tooltipRef.current?.getBoundingClientRect().height || 200;

      let placement = currentStepData.placement || 'bottom';
      let top = 0;
      let left = 0;

      // Calculate position based on placement
      switch (placement) {
        case 'top':
          top = rect.top - tooltipHeight - margin;
          left = rect.left + rect.width / 2 - tooltipWidth / 2;
          break;
        case 'bottom':
          top = rect.bottom + margin;
          left = rect.left + rect.width / 2 - tooltipWidth / 2;
          break;
        case 'left':
          top = rect.top + rect.height / 2 - tooltipHeight / 2;
          left = rect.left - tooltipWidth - margin;
          break;
        case 'right':
          top = rect.top + rect.height / 2 - tooltipHeight / 2;
          left = rect.right + margin;
          break;
      }

      // Adjust if tooltip goes off screen
      if (left < margin) left = margin;
      if (left + tooltipWidth > window.innerWidth - margin) {
        left = window.innerWidth - tooltipWidth - margin;
      }
      if (top < margin) {
        top = rect.bottom + margin;
        placement = 'bottom';
      }
      if (top + tooltipHeight > window.innerHeight - margin) {
        top = rect.top - tooltipHeight - margin;
        placement = 'top';
      }

      top = Math.max(margin, Math.min(top, window.innerHeight - tooltipHeight - margin));
      setTooltipPosition({ top, left, placement });

      // Scroll target into view if needed
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    calculatePosition();
    window.addEventListener('resize', calculatePosition);
    window.addEventListener('scroll', calculatePosition);

    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculatePosition);
    };
  }, [isActive, currentStepData, currentStep]);

  const handleStartTour = () => {
    setShowWelcome(false);
    startTour();
  };

  const handleSkipWelcome = () => {
    setShowWelcome(false);
    dismissTour();
  };

  // Welcome dialog for first-time users
  if (showWelcome) {
    return (
      <Dialog open={showWelcome} onOpenChange={(open) => { if (!open) handleSkipWelcome(); }}>
        <DialogContent dir={direction} showCloseButton={false}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2"><HelpCircle className="size-5" aria-hidden="true" />{translations.welcomeTitle}</DialogTitle>
            <DialogDescription>{translations.welcomeMessage}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost" onClick={handleSkipWelcome}>{translations.skip}</Button>
            <Button onClick={handleStartTour}>{translations.startTour}</Button>
          </DialogFooter>
          <DialogClose asChild><Button variant="ghost" size="icon-sm" className="absolute end-3 top-3" aria-label={t('buttons.close')}><X aria-hidden="true" /></Button></DialogClose>
        </DialogContent>
      </Dialog>
    );
  }

  if (!isActive || !currentStepData || !tooltipPosition) {
    return null;
  }

  const isLastStep = currentStep === totalSteps - 1;
  const isFirstStep = currentStep === 0;

  return (
    <>
      {/* Backdrop with spotlight */}
      <div className="fixed inset-0 z-[9998] pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <mask id="spotlight-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              {targetRect && (
                <rect
                  x={targetRect.left - 8}
                  y={targetRect.top - 8}
                  width={targetRect.width + 16}
                  height={targetRect.height + 16}
                  rx="8"
                  fill="black"
                />
              )}
            </mask>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="rgba(0, 0, 0, 0.5)"
            mask="url(#spotlight-mask)"
          />
        </svg>
      </div>

      {/* Highlight border around target */}
      {targetRect && (
        <div
          className="fixed z-[9999] pointer-events-none border-2 border-primary rounded-md transition-all duration-300"
          style={{
            top: targetRect.top - (currentStepData.highlightPadding || 8),
            left: targetRect.left - (currentStepData.highlightPadding || 8),
            width: targetRect.width + (currentStepData.highlightPadding || 8) * 2,
            height: targetRect.height + (currentStepData.highlightPadding || 8) * 2,
          }}
        />
      )}

      <Card ref={tooltipRef} dir={direction} role="region" aria-label={currentStepData.title}
        className="fixed z-[10000] max-h-[calc(100dvh-1.5rem)] w-80 max-w-[calc(100vw-1.5rem)] gap-4 overflow-auto"
        style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>
        <CardHeader>
          <CardTitle className="pe-8">{currentStepData.title}</CardTitle>
          <CardDescription>{currentStepData.content}</CardDescription>
          <Button variant="ghost" size="icon-sm" className="absolute end-2 top-2" onClick={endTour} aria-label={t('buttons.close')}><X aria-hidden="true" /></Button>
        </CardHeader>
        <CardContent className="space-y-3">
          <Progress value={((currentStep + 1) / totalSteps) * 100} aria-label={currentStepData.title} />
          <div className="flex flex-wrap justify-center gap-1" role="group" aria-label={translations.stepOf}>
            {steps.map((step, index) => (
              <Button key={index} variant={index === currentStep ? 'secondary' : 'ghost'} size="icon-xs"
                aria-current={index === currentStep ? 'step' : undefined} aria-label={`${index + 1}: ${step.title}`}
                onClick={() => {
                  if (index < currentStep) for (let i = currentStep; i > index; i--) prevStep();
                  else if (index > currentStep) for (let i = currentStep; i < index; i++) nextStep();
                }}>
                {index + 1}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-between gap-2">
          <span className="text-xs text-muted-foreground">{currentStep + 1} {translations.stepOf} {totalSteps}</span>
          <div className="flex gap-2">
            {!isFirstStep && <Button variant="ghost" size="sm" onClick={prevStep}><ChevronLeft className="rtl:rotate-180" aria-hidden="true" />{translations.prev}</Button>}
            <Button size="sm" onClick={nextStep}>{isLastStep ? translations.finish : translations.next}{!isLastStep && <ChevronRight className="rtl:rotate-180" aria-hidden="true" />}</Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default GuidedTour;
