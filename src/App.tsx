import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { getData } from "./services";
import { Application } from "./types";

function App() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await getData();
        setApplications(data);
      } catch (error) {
        setError("Failed to fetch applications.");
      }
    };

    fetchApplications();
  }, []);

  return (
    <>
      {JSON.stringify(applications)}
      {JSON.stringify(error)}
      <h1>React Coding Exercise</h1>
      <Navigation />
    </>
  );
}

export default App;
