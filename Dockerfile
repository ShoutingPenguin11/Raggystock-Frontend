FROM node:20-slim AS builder
WORKDIR /app

ENV NEXT_DISABLE_FONT_OPTIMIZATION=1

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

COPY --from=builder /app ./

EXPOSE 8080
CMD ["npm", "run", "start"]
