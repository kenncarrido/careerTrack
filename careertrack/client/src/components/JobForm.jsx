
function JobForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "Applied",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer Received">Offer Received</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default JobForm;