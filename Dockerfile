# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies if package.json or package-lock.json has changed
RUN npm install

# Copy the test files from the local directory to the container
COPY . .

# Specify the default command to run the tests
CMD ["npm", "test"]