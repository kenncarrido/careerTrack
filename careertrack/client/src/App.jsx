import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
  axios
    .get("http://localhost:5000/api/test")
    .then((response) => {
      setApiData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>CareerTrack</h1>

      <h2>{apiData.appName}</h2>
      <p>Version: {apiData.version}</p>
      <p>Developer: {apiData.developer}</p>
      <p>Status: {apiData.status}</p>
    </div>
  );
}

export default App;