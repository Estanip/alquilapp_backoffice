FROM node:20.15.0-alpine AS builder
WORKDIR /app
COPY api/ ./api
COPY nx.json ./
COPY .eslintrc.json ./
COPY tsconfig.base.json ./
COPY api/package.json ./
RUN npm i && npm cache verify && npx nx build api --prod

FROM node:20.15.0-alpine AS development
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/api ./api
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/tsconfig.base.json  ./
COPY --from=builder /app/nx.json  ./
COPY --from=builder /app/.eslintrc.json  ./
EXPOSE 3006
CMD ["npx", "nx", "serve", "api", "--watch"]

FROM node:20.15.0-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist/api ./dist
COPY --from=builder /app/package.json ./
RUN npm prune --production
RUN addgroup -S docker && adduser -S docker -G docker
USER docker
EXPOSE 3006
CMD ["node", "dist/main.js"]