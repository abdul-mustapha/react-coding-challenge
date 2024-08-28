import { useEffect, useState } from "react";
import { getData } from "./services";
import { Application } from "./types";
import { DataFiltering } from "./features/DataFiltering";
import { groupApplications } from "./utils/groupApplications";

function App() {
  const [applications, setApplications] = useState<Application[] | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setIsLoading(true);
        setTimeout(async () => {
          const data = await getData();
          setApplications(data);
          setIsLoading(false);
        }, 2000); // added to test my loading state
      } catch (error) {
        setIsLoading(false);
        setError("Something went wrong...");
      }
    };

    fetchApplications();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (applications) {
    return (
      <div>
        <h1 className="text-xl text-red-600">React Coding Exercise</h1>
        <DataFiltering groupedApplications={groupApplications(applications)} />
      </div>
    );
  }

  return <div>{JSON.stringify(error)}</div>;
}

export default App;
