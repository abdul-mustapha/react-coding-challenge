import { useState } from "react";
import Navigation from "../../components/Navigation";
import { FolderStructure } from "../../types";

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
    </div>
  );
};
