# Use Node.js 20 as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Attempt to fix the npm issue by removing package-lock.json and node_modules, then reinstalling dependencies
RUN rm -rf node_modules package-lock.json && npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Vite application using npm
RUN npm run build

# Expose port 8000 for the application
EXPOSE 8000

# Start the Vite application
CMD ["npm", "run", "dev"]