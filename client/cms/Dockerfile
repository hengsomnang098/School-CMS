# Use Node.js 20 as the base image for building the application
FROM node:20 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application files to the container
COPY . .

# Build the Vite application
RUN yarn run build

# Use a smaller base image for the final stage
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Install a simple HTTP server
RUN yarn global add serve

# Copy only the build output from the builder stage
COPY --from=builder /app/dist ./dist

# Expose port 80 for the application
EXPOSE 8000

# Serve the build output
CMD ["serve", "-s", "dist", "-l", "8000"]