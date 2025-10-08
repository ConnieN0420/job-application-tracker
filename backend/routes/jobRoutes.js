//API endpoints for job application tracking
import express from 'express';
import Job from '../models/Jobs.js';

//router which handles job application related requests
const router = express.Router();

//create a new job
router.post('/', async (req, res) => {
    try {
        //create a new job object with the data from the request body
        const newJob = new Job(req.body);
        await newJob.save(); //save the job to the database
        //send the created job as a response with status code 201 (created) to the client
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
});

//get all jobs
router.get('/', async (req, res) => {
    try {
        //find all jobs in the database
        const jobs = await Job.find();
        res.status(200).json(jobs); //send the jobs as a response with status code 200 (ok) to the client
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//update a job
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true }); //find the job by id and update it with the data from the request body
        res.status(200).json(updatedJob); //send the updated job as a response with status code 200 (ok) to the client
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//delete a job
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Job.findByIdAndDelete(id); //find the job by id and delete it
        res.status(200).json({ message: 'Job deleted successfully' }); //send a success message as a response with status code 200 (ok) to the client
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//get job by status
router.get('/status/:status', async (req, res) => {
    try {
        const { status } = req.params;
        const jobs = await Job.find({ status }); //find the jobs by status
        res.status(200).json(jobs); //send the jobs as a response with status code 200 (ok) to the client
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;