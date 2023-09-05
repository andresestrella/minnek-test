FROM node:16-alpine as builder
WORKDIR /app

COPY package.json package-lock.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variables
COPY .env ./

RUN npm install
RUN npx prisma generate
COPY . ./
RUN npm run build

FROM node:16-alpine as production

USER node:node
WORKDIR /app
COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json .
ENV PORT 3000
EXPOSE 3000
CMD ["node","build"]
