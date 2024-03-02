import { URI, Email, Id, UnsignedInt, UTCDateTime } from 'src/datatypes';
import { Link } from './Link';

export type Progress = 'completed' | 'in-process' | 'failed' | 'needs-action';

export type ScheduleAgent = 'server' | 'client' | 'none'; // default is 'server'

export type ParticipationStatus =
  | 'needs-action'
  | 'accepted'
  | 'declined'
  | 'tentative'
  | 'delegated';

export type Role =
  | 'owner'
  | 'attendee'
  | 'chair'
  | 'optional'
  | 'contact'
  | 'informational';

export type Kind = 'individual' | 'group' | 'location' | 'resource';

export type SheduleStatusCode = string; // defined by RFC-5545 (TODO: define the possible values)

export type Participant = {
  '@type': 'Participant';
  name?: string;
  email?: Email;
  description?: string;
  sendTo?: Map<Omit<ResponseMethod, 'web'> & BSoulsResponseMethod, URI>;
  kind?: Kind;
  roles: Map<Role, boolean>; // at least one role must be assigned to the participant
  locationId?: Id;
  language?: string; // RFC-5646
  participationStatus?: ParticipationStatus;
  participationComment?: string;
  expectReply?: boolean; // default is false
  scheduleAgent: ScheduleAgent;
  scheduleForceSend?: boolean; // default is false
  scheduleSequence?: UnsignedInt; // default is 0
  scheduleStatus?: SheduleStatusCode; // defined by RFC-5545
  scheduleUpdated?: UTCDateTime;
  sentBy?: Email;
  invitedBy?: Id;
  delegatedTo?: Map<Id, boolean>;
  delegatedFrom?: Map<Id, boolean>;
  memberOf?: Map<Id, boolean>;
  links: Map<Id, Link>;
  progress: Map<Id, Progress>;
  progressUpdated: UTCDateTime;
  percentComplete: UnsignedInt; // 0 - 100
};

export type ResponseMethod = 'imip' | 'web' | 'other';

export type BSoulsResponseMethod =
  | 'backendsouls:mailto' // RFC-6068
  | 'backendsouls:http' // RFC-2616
  | 'backendsouls:https' // RFC-2818
  | 'backendsouls:ws' // RFC-6455
  | 'backendsouls:wss' // RFC-6455
  | 'backendsouls:urn' // RFC-2141
  | 'backendsouls:urn:uuid'; // RFC-4122

export type PrivacyType = 'public' | 'private' | 'secret';

export type SharingProperties = {
  privacy?: PrivacyType;
  replyTo?: Map<ResponseMethod & BSoulsResponseMethod, URI>;
  sentBy?: Email;
  participants?: Map<Id, Participant>;
  requestStatus?: SheduleStatusCode; // defined by RFC-5545
};
