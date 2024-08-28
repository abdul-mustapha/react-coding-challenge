import { Application } from "../../../../types";

type ApplicationViewerProps = {
  applications: Application[];
};

const ApplicationViewer = ({ applications }: ApplicationViewerProps) => {
  return (
    <div>
      <ul>
        {applications.map((app) => (
          <li key={app.id}>
            {app.name} {app.spend}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationViewer;
