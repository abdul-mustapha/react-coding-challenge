import { NestedApplication } from "../../../../types";

type ApplicationViewer = {
  applications: NestedApplication[];
};

const ApplicationViewer = ({ applications }: ApplicationViewer) => {
  return <div>{applications.map((app) => app.name)}</div>;
};

export default ApplicationViewer;
