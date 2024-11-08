import dotenv from 'dotenv';
dotenv.config()
import { v2 as cloudinary } from 'cloudinary';
import { API_KEY, API_SECRET_KEY, CLOUD_NAME } from '../config/serverConfig.js';

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET_KEY
});


export default cloudinary;