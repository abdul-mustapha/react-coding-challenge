export interface Application {
  id: string;
  name: string;
  spend: number;
  BCAP1: string;
  BCAP2: string;
  BCAP3: string;
}

export interface CapabilityLevel {
  name: string;
  children: CapabilityLevel[];
  applications: Application[];
}

export type GroupedApplications = CapabilityLevel[];
