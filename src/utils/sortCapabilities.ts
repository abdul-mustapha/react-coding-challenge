import { GroupedApplications } from "../types";

export const sortCapabilities = (capabilities: GroupedApplications) => {
  capabilities.sort((a, b) => a.name.localeCompare(b.name));
  capabilities.forEach((cap) => {
    if (cap.children) {
      sortCapabilities(cap.children);
    }
  });
};
