import { useEffect, useState } from 'react'; 
//useEffect is a hook for making side effects in functional components, a side effect is anything that happens outside of the component, such as fetching data from the server or updating the state 
//useState is a hook for managing state in functional components, state is data that changes over time, such as the data fetched from the server
//these are used to manage the data fetched from the server and the state of the component, so that the component can be updated when the data changes
import axios from 'axios'; //axios is a library for making HTTP requests

//a component that displays a list of jobs
function JobList() {
  const [jobs, setJobs] = useState([]);

  

}

export default JobList;
