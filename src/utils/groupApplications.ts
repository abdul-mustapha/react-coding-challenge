import { Application, GroupedApplications } from "../types";

export const groupApplications = (
  applications: Application[]
): GroupedApplications => {
  let grouped: GroupedApplications = [];

  // if applications were duplciated across capabiltiies, we could use a map to store each application
  // whilst we loop and push to the array. i have kept it simple for now

  applications.forEach((app) => {
    let bcap1 = grouped.find((cap) => cap.name === app.BCAP1);
    // if there no level 1, create one
    if (!bcap1) {
      bcap1 = { name: app.BCAP1, children: [], applications: [] };
      grouped.push(bcap1);
    }
    if (!bcap1.applications.includes(app)) {
      bcap1.applications.push(app);
    }

    let bcap2 = bcap1.children.find((cap) => cap.name === app.BCAP2);
    if (!bcap2) {
      bcap2 = { name: app.BCAP2, children: [], applications: [] };
      bcap1.children.push(bcap2);
    }
    if (!bcap2.applications.includes(app)) {
      bcap2.applications.push(app);
    }

    let bcap3 = bcap2.children.find((cap) => cap.name === app.BCAP3);
    if (!bcap3) {
      bcap3 = { name: app.BCAP3, children: [], applications: [] };
      bcap2.children.push(bcap3);
    }
    if (!bcap3.applications.includes(app)) {
      bcap3.applications.push(app);
    }
  });

  return grouped;
};
