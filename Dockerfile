FROM node:20.15.0-alpine AS dev-deps
WORKDIR /app
COPY package.json package.json
RUN npm install

FROM node:20.15.0-alpine AS prod-deps
WORKDIR /app
COPY package.json package.json
RUN npm install --production

FROM node:20.15.0-alpine AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build:all

FROM node:20.15.0-alpine AS production
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json package.json
EXPOSE 3000
CMD ["npm", "run", "start:prod:api"]

FROM node:20.15.0-alpine AS development
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev:api"]