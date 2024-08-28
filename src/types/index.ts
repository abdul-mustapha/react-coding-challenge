export interface BusinessCapability {
  BCAP1: string;
  BCAP2: string;
  BCAP3: string;
}

export interface Application extends BusinessCapability {
  id: string;
  name: string;
  spend: number;
}
