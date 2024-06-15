# Use Node.js 16 as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application files to the container
COPY . .

# Build the Vite application using Yarn
RUN yarn build

# Expose port 3000 for the application
EXPOSE 3000

# Start the Vite application
CMD ["yarn", "serve"]