import { URI, Email, Id, UnsignedInt, UTCDateTime } from 'src/datatypes';
import { Link } from './Link';
import { ResponseMethod, BSoulsResponseMethod } from './Share';

export type Progress = 'completed' | 'in-process' | 'failed' | 'needs-action';

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
// TODO: define the possible values

export type ScheduleStatusCode = string; // defined by RFC-5545

export type ScheduleAgent = 'server' | 'client' | 'none'; // default is 'server'

export type Participant = {
  '@type': 'Participant';
  roles: Map<Role, boolean>; // at least one role must be assigned to the participant
  name?: string;
  email?: Email;
  description?: string;
  sendTo?: Map<ResponseMethod & BSoulsResponseMethod, URI>;
  kind?: Kind;
  locationId?: Id;
  language?: string; // RFC-5646
  participationStatus?: ParticipationStatus;
  participationComment?: string;
  expectReply?: boolean; // default is false

  sentBy?: Email;
  invitedBy?: Id;
  delegatedTo?: Map<Id, boolean>;
  delegatedFrom?: Map<Id, boolean>;
  memberOf?: Map<Id, boolean>;

  links?: Map<Id, Link>;

  progress?: Progress;
  progressUpdated?: UTCDateTime;
  percentComplete?: UnsignedInt; // 0 - 100

  scheduleAgent?: ScheduleAgent;
  scheduleForceSend?: boolean; // default is false
  scheduleSequence?: UnsignedInt; // default is 0

  // This property MUST NOT be included in scheduling messages.
  scheduleStatus?: Array<ScheduleStatusCode>; // defined by RFC-5545
  scheduleUpdated?: UTCDateTime;
};

export class ParticipantError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ParticipantError';
  }
}

export class ParticipantBuilder {
  #participant: Participant;

  constructor() {
    this.#participant = {
      '@type': 'Participant',
      roles: new Map(),
    };
  }

  setRoles(roles: Map<Role, boolean>): ParticipantBuilder {
    this.#participant.roles = roles;
    return this;
  }

  withName(name: string): ParticipantBuilder {
    this.#participant.name = name;
    return this;
  }

  withEmail(email: Email): ParticipantBuilder {
    this.#participant.email = email;
    return this;
  }

  withDescription(description: string): ParticipantBuilder {
    this.#participant.description = description;
    return this;
  }

  withSendTo(
    sendTo: Map<ResponseMethod & BSoulsResponseMethod, URI>
  ): ParticipantBuilder {
    this.#participant.sendTo = sendTo;
    return this;
  }

  withKind(kind: Kind): ParticipantBuilder {
    this.#participant.kind = kind;
    return this;
  }

  withLocationId(locationId: Id): ParticipantBuilder {
    this.#participant.locationId = locationId;
    return this;
  }

  withLanguage(language: string): ParticipantBuilder {
    this.#participant.language = language;
    return this;
  }

  withParticipationStatus(
    participationStatus: ParticipationStatus
  ): ParticipantBuilder {
    this.#participant.participationStatus = participationStatus;
    return this;
  }

  withParticipationComment(participationComment: string): ParticipantBuilder {
    this.#participant.participationComment = participationComment;
    return this;
  }

  withExpectReply(expectReply: boolean): ParticipantBuilder {
    this.#participant.expectReply = expectReply;
    return this;
  }

  withSentBy(sentBy: Email): ParticipantBuilder {
    this.#participant.sentBy = sentBy;
    return this;
  }

  withInvitedBy(invitedBy: Id): ParticipantBuilder {
    this.#participant.invitedBy = invitedBy;
    return this;
  }

  withDelegatedTo(delegatedTo: Map<Id, boolean>): ParticipantBuilder {
    this.#participant.delegatedTo = delegatedTo;
    return this;
  }

  withDelegatedFrom(delegatedFrom: Map<Id, boolean>): ParticipantBuilder {
    this.#participant.delegatedFrom = delegatedFrom;
    return this;
  }

  withMemberOf(memberOf: Map<Id, boolean>): ParticipantBuilder {
    this.#participant.memberOf = memberOf;
    return this;
  }

  withLinks(links: Map<Id, Link>): ParticipantBuilder {
    this.#participant.links = links;
    return this;
  }

  withProgress(progress: Progress): ParticipantBuilder {
    this.#participant.progress = progress;
    return this;
  }

  withProgressUpdated(progressUpdated: UTCDateTime): ParticipantBuilder {
    this.#participant.progressUpdated = progressUpdated;
    return this;
  }

  withPercentComplete(percentComplete: UnsignedInt): ParticipantBuilder {
    this.#participant.percentComplete = percentComplete;
    return this;
  }

  withScheduleAgent(scheduleAgent: ScheduleAgent): ParticipantBuilder {
    this.#participant.scheduleAgent = scheduleAgent;
    return this;
  }

  withScheduleForceSend(scheduleForceSend: boolean): ParticipantBuilder {
    this.#participant.scheduleForceSend = scheduleForceSend;
    return this;
  }

  withScheduleSequence(scheduleSequence: UnsignedInt): ParticipantBuilder {
    this.#participant.scheduleSequence = scheduleSequence;
    return this;
  }

  withScheduleStatus(
    scheduleStatus: Array<ScheduleStatusCode>
  ): ParticipantBuilder {
    this.#participant.scheduleStatus = scheduleStatus;
    return this;
  }

  withScheduleUpdated(scheduleUpdated: UTCDateTime): ParticipantBuilder {
    this.#participant.scheduleUpdated = scheduleUpdated;
    return this;
  }

  build(): Participant {
    if (this.#participant.roles.size === 0) {
      throw new ParticipantError(
        'At least one role must be assigned to the participant'
      );
    }
    return this.#participant;
  }
}
