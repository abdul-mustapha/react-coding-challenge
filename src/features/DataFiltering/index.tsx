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

  return (
    <div className="flex space-x-8 ">
      <Navigation
        items={groupedApplications}
        onSelect={handleSelectApplications}
      />
      <div className="flex-shrink-0">
        <ApplicationViewer applications={selectedApplications} />
      </div>
    </div>
  );
};
