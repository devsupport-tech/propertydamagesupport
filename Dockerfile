# Multi-stage Dockerfile for Vite React App

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Production with nginx
FROM nginx:alpine AS runner

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Set proper permissions
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 3000

# Start nginx (runs as root, then drops to nginx user automatically)
CMD ["nginx", "-g", "daemon off;"]
