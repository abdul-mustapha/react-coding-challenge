import { Application } from "../../../../types";

type ApplicationViewerProps = {
  applications: Application[];
};

const ApplicationViewer = ({ applications }: ApplicationViewerProps) => {
  return (
    <div className="grid gap-4 grid-cols-4 ">
      {applications.map((app) => (
        <div
          key={app.id}
          className="flex flex-col justify-between rounded-lg p-5 border w-64 h-32 border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-800">{app.name}</h3>
          <p className="text-gray-600">
            <span>Total Spend:</span>
          </p>
          <p className="text-lg font-bold">£{app.spend.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ApplicationViewer;
