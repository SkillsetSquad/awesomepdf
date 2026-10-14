# syntax=docker/dockerfile:1

# =============================================================================
# AwsomePDF Production Dockerfile (based on PDFCraft)
# Multi-stage build for optimized image size
# Optimized with BuildKit cache mounts for faster builds
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Build the Next.js static export
# -----------------------------------------------------------------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies first (better layer caching). App lifecycle scripts need
# the source tree, so run postinstall explicitly after COPY below.
# Use BuildKit cache mount to persist npm cache across builds
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --ignore-scripts

# Copy source code
COPY . .

# Build the static export
# Use BuildKit cache mount for Next.js cache to speed up rebuilds
ARG BASE_PATH=""
ARG NEXT_PUBLIC_SITE_URL=""
ARG SOURCE_REVISION=""
ENV BASE_PATH=$BASE_PATH
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV SOURCE_REVISION=$SOURCE_REVISION
ENV DOCKER_BUILD=true
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=cache,target=/app/.next/cache \
    npm run postinstall && npm run build

# -----------------------------------------------------------------------------
# Stage 2: Serve with Nginx
# -----------------------------------------------------------------------------
FROM nginx:1.25-alpine AS production

# Independent stages need their own ARG. Serve exported paths beneath the same
# prefix that Next.js baked into links and worker URLs.
ARG BASE_PATH=""
ENV BASE_PATH=$BASE_PATH

# Add labels for GitHub Container Registry
LABEL org.opencontainers.image.source="https://github.com/PDFCraftTool/pdfcraft"
LABEL org.opencontainers.image.description="PDFCraft - Professional PDF Tools, Free, Private & Browser-Based"
LABEL org.opencontainers.image.licenses="AGPL-3.0"
LABEL org.opencontainers.image.title="PDFCraft"
LABEL org.opencontainers.image.vendor="PDFCraftTool"

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY security-headers.conf /etc/nginx/security-headers.conf

# Copy the static export from builder stage
COPY --from=builder /app/out /website/pdfcraft${BASE_PATH}/

# Expose port 80
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -q -O /dev/null "http://127.0.0.1${BASE_PATH}/en/" || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
