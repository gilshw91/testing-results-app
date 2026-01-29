import type { Thread, Status } from '../types';

/**
 * Compute test status from threads.
 * Rule: If ANY thread is FAILED, the test is FAILED.
 */
export function computeTestStatus(threads: Thread[]): Status {
  if (threads.length === 0) return 'PASSED';
  return threads.some((thread) => thread.status === 'FAILED') ? 'FAILED' : 'PASSED';
}
