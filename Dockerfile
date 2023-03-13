# Stage 1
### STAGE 1: Build ###
FROM node:14.20-alpine AS build
WORKDIR Shell/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build Shell/src/app/dist/shell /usr/share/nginx/html
EXPOSE 80