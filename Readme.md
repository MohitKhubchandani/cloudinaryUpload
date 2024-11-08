# Cloudinary Upload Project

This project demonstrates how to upload files to Cloudinary using Node.js and the `multer-storage-cloudinary` storage engine. It provides a simple backend server to handle file uploads and store them in Cloudinary's cloud storage.

## Technologies Used

- Node.js
- Express
- Multer
- multer-storage-cloudinary
- Cloudinary API

## Features

- Upload images and videos to Cloudinary.
- Secure and easy setup using Multer storage engine.
- Support for multiple file formats.
- Basic error handling for upload failures.

## Setup and Installation

### Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. You need a [Cloudinary account](https://cloudinary.com/) to get your Cloudinary `cloud_name`, `api_key`, and `api_secret`.

### Installation Steps

1. Clone the repository:

   git clone https://github.com/your-username/cloudinary-upload-project.git
   cd cloudinary-upload-project

2. Install dependencies:

    npm install

3. Create a .env file in the root directory of the project and add your Cloudinary credentials: 

    CLOUD_NAME=your-cloud-name
    API_KEY=your-api-key
    API_SECRET=your-api-secret

4. Start the server

    npm start

The server will now be running on http://localhost:3000.

## API Endpoints
### POST /upload
Uploads a file to Cloudinary.

### Request Body
file (form-data): The file you want to upload.

### Response
success: Boolean indicating the success of the upload.
url: The URL of the uploaded file.

## Example Usage
You can use Postman or any API testing tool to send a POST request to http://localhost:3000/upload with the file attached under the file field.

