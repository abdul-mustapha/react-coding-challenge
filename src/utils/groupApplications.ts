import { Application, FolderStructure, NestedApplication } from "../types";

export const groupApplications = (
  applications: Application[]
): FolderStructure[] => {
  // create a map object with a key of string and the other of type folder structure
  const grouped: Record<string, FolderStructure> = {};

  applications.forEach((app) => {
    if (!grouped[app.BCAP1]) {
      grouped[app.BCAP1] = { name: app.BCAP1, children: [] };
    }

    let level2 = grouped[app.BCAP1].children.find(
      (child) => (child as FolderStructure).name === app.BCAP2
    ) as FolderStructure;

    if (!level2) {
      level2 = { name: app.BCAP2, children: [] };
      grouped[app.BCAP1].children.push(level2);
    }

    let level3 = level2.children.find(
      (child) => (child as FolderStructure).name === app.BCAP3
    ) as FolderStructure;

    if (!level3) {
      level3 = { name: app.BCAP3, children: [] };
      level2.children.push(level3);
    }

    // push the application into the third level
    level3.children.push({
      id: app.id,
      name: app.name,
      spend: app.spend,
    } as NestedApplication);
  });

  // convert the grouped object into an array
  return Object.values(grouped);
};
