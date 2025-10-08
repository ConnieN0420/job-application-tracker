// server.js - the main server file (entry point for the backend)

//starts the express server, connects to MongoDB server
//mounts and uses routes for user authentication and job application tracking

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobRoutes.js';
import cors from 'cors';


const app = express();
//middleware
//middleware to parse JSON bodies
app.use(express.json());
//enable CORS for all routes (allows requests from different origins, frontend and backend can communicate)
app.use(cors());
//load environment variables from .env file
dotenv.config();

//connect to MongoDB server
mongoose.connect(process.env.MONGO_URI)
    .then(() => { 
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });


//use jobRoutes for job application related requests (API endpoints) (use /api/jobs to access the endpoints)
app.use('/api/jobs', jobRoutes);


//start the server  
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});