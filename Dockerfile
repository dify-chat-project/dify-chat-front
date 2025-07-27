# syntax=docker/dockerfile:1.7

# ---- build ----
FROM node:20-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# ---- run ----
FROM node:20-alpine AS run
WORKDIR /app

# 非root
RUN addgroup -S nodejs -g 1001 && adduser -S nextjs -u 1001 -G nodejs

# 必要最小限のみコピー（standalone 推奨形）
COPY --chown=nextjs:nodejs --from=build /app/public ./public
COPY --chown=nextjs:nodejs --from=build /app/.next/standalone ./
COPY --chown=nextjs:nodejs --from=build /app/.next/static ./.next/static

USER nextjs

# EXPOSE は任意（ドキュメント用途）
EXPOSE 3000

# 実行。PORT は compose 側で上書きされる
CMD ["node", "server.js"]
