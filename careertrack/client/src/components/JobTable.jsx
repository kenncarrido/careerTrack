
function JobTable({ jobs, onEdit, onDelete }) {
    return (
        <table>
            <caption>Job Listings</caption>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map((job) => (
                    <tr key={job.id}>
                        <td>{job.company}</td>
                        <td>{job.position}</td>
                        <td>{job.status}</td>
                        <td>
                            <button onClick={() => onEdit(job)}>Edit</button>
                            <button onClick={() => onDelete(job.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default JobTable;