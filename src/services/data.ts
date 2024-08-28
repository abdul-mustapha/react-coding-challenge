import { Application } from "../types";

export async function getData(): Promise<Application[]> {
  const url = "http://localhost:8080/data";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json: Application[] = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
