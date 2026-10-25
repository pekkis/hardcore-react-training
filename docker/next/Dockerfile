# Pinned by version and digest: upgrades happen when we decide (Renovate proposes them).
FROM node:26.12.1-alpine3.24@sha256:40cd011b55415bc894e45b02fdd5a5dfde056921b7d23a64c74f80497af48797 AS base

FROM base AS builder
# The version in package.json's packageManager.
RUN npm -g i pnpm@12.15.0
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile
COPY . .
# NEXT_PUBLIC_* are inlined into the client bundle at build time (compose passes them from .env).
ARG NEXT_PUBLIC_API
ARG NEXT_PUBLIC_APPID
ENV NEXT_PUBLIC_API=$NEXT_PUBLIC_API \
    NEXT_PUBLIC_APPID=$NEXT_PUBLIC_APPID \
    NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# The standalone output is the whole server: server.js and exactly the node_modules it traced.
# https://nextjs.org/docs/app/api-reference/config/next-config-js/output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
