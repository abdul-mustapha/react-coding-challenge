import { useState } from "react";
import { Application, GroupedApplications } from "../../types";
import Navigation from "./components/Navigation";
import ApplicationViewer from "./components/ApplicationViewer";

type DataFiltering = {
  groupedApplications: GroupedApplications;
};

export const DataFiltering = ({ groupedApplications }: DataFiltering) => {
  const [selectedApplications, setSelectedApplications] = useState<
    Application[]
  >([]);

  const handleSelectApplications = (applications: Application[]) => {
    setSelectedApplications(applications);
  };

  console.log(groupedApplications);

  return (
    <div>
      <Navigation
        items={groupedApplications}
        onSelect={handleSelectApplications}
      />
      <ApplicationViewer applications={selectedApplications} />
    </div>
  );
};
