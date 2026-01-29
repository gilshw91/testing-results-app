import { mockTestResultsData } from "../data/mockData";
import type { TestResultsData } from "../types";

const SIMULATED_DELAY_MS = 2000;

export async function fetchTestResults(): Promise<TestResultsData> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
  return mockTestResultsData;
}
