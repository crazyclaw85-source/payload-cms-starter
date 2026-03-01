FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]