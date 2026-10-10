'use client';

import { cloneElement, useEffect, useState, type ReactElement } from 'react';
import type { ButtonProps } from '@/components/ui/button';

export function EditorPanelToggle({ children }: { children: ReactElement<ButtonProps> }) {
  const [expanded, setExpanded] = useState(true);
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    const inspector = document.getElementById('inspector');
    if (!inspector) return;
    if (window.matchMedia('(max-width: 768px)').matches) inspector.classList.add('collapsed');
    const sync = () => {
      setExpanded(!inspector.classList.contains('collapsed'));
      setAvailable(!inspector.hasAttribute('disabled'));
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(inspector, { attributes: true, attributeFilter: ['class', 'disabled'] });
    return () => observer.disconnect();
  }, []);
  return cloneElement(children, {
    variant: expanded && available ? 'secondary' : 'ghost',
    disabled: !available,
    'aria-controls': 'inspector',
    'aria-expanded': expanded && available,
    onClick: () => {
      const inspector = document.getElementById('inspector');
      if (inspector) {
        inspector.classList.toggle('collapsed');
        setExpanded(!inspector.classList.contains('collapsed'));
      }
    },
  });
}
