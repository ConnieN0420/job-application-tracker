//Model for how the data is stored in the database for job applications
//defines the schema for job application data




/* temp info
database user
    username: connienguyen0420_db_user
    password: Teamck83#

connection string:
    mongodb+srv://connienguyen0420_db_user:Teamck83%23@job-application-tracker-cluster.8mieu4y.mongodb.net/?retryWrites=true&w=majority&appName=job-application-tracker-cluster

*/

import mongoose from 'mongoose';

//schema for job application data
const jobSchema = new mongoose.Schema({
    company : String,
    title : String,
    location : String,
    description : String,
    status : {
        type: String,
        enum: ['applied', 'screening', 'interviewing', 'offered', 'rejected', 'accepted'],
        default: 'applied',
    },
    dateApplied : Date,
    notes : String,
});

export default mongoose.model('Job', jobSchema);