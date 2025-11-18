# Vismar Aqua - Next.js Frontend Dockerfile (Development Mode)

FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy application code
COPY . .

# Expose Next.js dev server port
EXPOSE 3000

# Run in development mode
CMD ["npm", "run", "dev"]
