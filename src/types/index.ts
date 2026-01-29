export type TestType = 'PROMPT_INJECTION' | 'JAILBREAK';

export type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export type Status = 'PASSED' | 'FAILED';

export interface Thread {
  __typename?: string;
  id: string;
  status: Status;
}

export interface Impact {
  type: string;
  subType: string;
  description: string;
}

export interface TestCaseRun {
  __typename?: string;
  techniqueType: TestType;
  techniqueSubType: string;
  impact: Impact;
  createdAt?: string;
  description: string;
  id?: string;
  metadata?: Record<string, unknown>;
  references?: string[];
  remediation?: string;
  severity: Severity;
  status?: Status;
  mitigation: string;
  threads: Thread[];
}

export interface Asset {
  id: string;
  name: string;
  type?: string;
  version?: string;
}

export interface RedTeamRun {
  __typename?: string;
  id: string;
  createdAt: string;
  asset: Asset;
  reportUrl?: string;
  score?: number;
  results: TestCaseRun[];
  status?: Status;
}

export interface TestResultsData {
  promptInjectionData: RedTeamRun;
  jailbreakData: RedTeamRun;
}

export interface Filters {
  severity: Severity | null;
  result: Status | null;
}

export interface DropdownOption<T> {
  value: T;
  label: string;
}
