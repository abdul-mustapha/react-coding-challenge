import { useEffect, useState } from "react";
import { Application, GroupedApplications } from "../../types";
import Navigation from "./components/Navigation";
import ApplicationViewer from "./components/ApplicationViewer";
import SpendFilter from "./components/SliderFilter";

type DataFiltering = {
  initialApplications: Application[];
  groupedApplications: GroupedApplications;
};

export const DataFiltering = ({
  initialApplications,
  groupedApplications,
}: DataFiltering) => {
  const [selectedApplications, setSelectedApplications] =
    useState<Application[]>(initialApplications);
  const [filteredApplications, setFilteredApplications] = useState<
    Application[]
  >([]);
  const [spendRange, setSpendRange] = useState<number>(100000);

  const handleSelectApplications = (applications: Application[]) => {
    setSelectedApplications(applications);
    setFilteredApplications(applications);
  };

  useEffect(() => {
    const filtered = selectedApplications.filter(
      (app) => app.spend <= spendRange
    );
    setFilteredApplications(filtered);
  }, [selectedApplications, spendRange]);

  const handleSpendChange = (value: number) => {
    setSpendRange(value);
  };

  return (
    <div className="flex space-x-8 ">
      <div>
        <h2 className="text-lg font-bold mb-4">Navigation</h2>
        <Navigation
          items={groupedApplications}
          onSelect={handleSelectApplications}
        />
        <h2 className="text-lg font-bold mt-4">Filters</h2>
        <div className="mt-2">
          <SpendFilter spendRange={spendRange} onChange={handleSpendChange} />
        </div>
      </div>
      <div className="flex-shrink-0">
        <div>
          <h2 className="text-lg font-bold mb-4">Applications</h2>
          {filteredApplications.length === 0 ? <p>No results found.</p> : null}
          <ApplicationViewer applications={filteredApplications} />
        </div>
      </div>
    </div>
  );
};
