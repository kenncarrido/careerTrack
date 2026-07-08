import { useEffect, useState } from "react";
import { getJobs } from "../services/api";

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobs();
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

const handleCreateJob = async (jobData) => {
    try {
      const response = await createJob(jobData);
        setJobs((prevJobs) => [...prevJobs, response.data]);
    } catch (error) {
      console.error("Error creating job:", error);
    }
};

  return (
    <div>
      <h1>CareerTrack Dashboard</h1>
      <h2>Job Listings</h2>

      <pre>{JSON.stringify(jobs, null, 2)}</pre>
    </div>
  );
}

export default Dashboard;