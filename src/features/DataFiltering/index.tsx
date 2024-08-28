import { useState } from "react";
import { FolderStructure } from "../../types";
import Navigation from "./components/Navigation";
import ApplicationViewer from "./components/ApplicationViewer";

type DataFiltering = {
  groupedApplications: FolderStructure[];
};

export const DataFiltering = ({ groupedApplications }: DataFiltering) => {
  const [filteredApplications, setFilteredApplications] =
    useState<FolderStructure[]>(groupedApplications);
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>(
    []
  );

  return (
    <div>
      <Navigation items={groupedApplications} />
      <ApplicationViewer
        applications={filteredApplications.map((app) => app.children)}
      />
    </div>
  );
};
