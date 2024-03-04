import { Int, UTCDateTime, UnsignedInt } from 'src/datatypes';

// TODO: define the possible values
export type ScheduleStatusCode = string; // defined by RFC-5545
export type ScheduleAgent = 'server' | 'client' | 'none'; // default is 'server'

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
  scheduleAgent?: ScheduleAgent;
  scheduleForceSend?: boolean; // default is false
  scheduleSequence?: UnsignedInt; // default is 0

  // This property MUST NOT be included in scheduling messages.
  scheduleStatus?: Array<ScheduleStatusCode>; // defined by RFC-5545

  scheduleUpdated?: UTCDateTime;
};
