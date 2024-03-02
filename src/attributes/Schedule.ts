import { Int } from 'src/datatypes';

export type FreeBusyStatus = 'busy' | 'free';

// busy and free are already defined in FreeBusyStatus (this is an extension)
export type BackendSoulsFreeBusyStatus =
  | 'backendsouls:unknown'
  | 'backendsouls:unavailable'
  | 'backendsouls:tentative'
  | 'backendsouls:outOfOffice';

export type SchedulingProperties = {
  priority?: Int;
  freeBusyStatus?: FreeBusyStatus & BackendSoulsFreeBusyStatus;
  requestStatus?: string; // TODO: RFC-5545
};
