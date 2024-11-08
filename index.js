import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import uploadRoute from './controllers/routeUpload.js'; // your route

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/", uploadRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
