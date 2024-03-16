export type FreeBusyStatus = 'busy' | 'free';
// Vendor/Library specific free/busy status

export type BSoulsFreeBusyStatus =
  | 'backendsouls:busy'
  | 'backendsouls:free'
  | 'backendsouls:unknown'
  | 'backendsouls:unavailable'
  | 'backendsouls:tentative'
  | 'backendsouls:outOfOffice';

export function isBSoulsFreeBusyStatus(
  status: FreeBusyStatus | BSoulsFreeBusyStatus
): status is BSoulsFreeBusyStatus {
  return status.startsWith('backendsouls:');
}

export function isFreeBusyStatus(
  status: FreeBusyStatus | BSoulsFreeBusyStatus
): status is FreeBusyStatus {
  return status === 'busy' || status === 'free';
}

export class FreeBusyStatusError extends Error {
  constructor(status: FreeBusyStatus | BSoulsFreeBusyStatus) {
    super(`Invalid action type: ${status} for type ${typeof status}`);
  }
}
