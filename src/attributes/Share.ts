import { URI, Email, Id } from 'src/datatypes';
import { Participant } from './Participant';

export type ResponseMethod = 'imip' | 'web' | 'other';

export type BSoulsResponseMethod =
  | 'backendsouls:tel'
  | 'backendsouls:fax'
  | 'backendsouls:sms'
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
};

export class SharingPropertiesBuilder {
  #sharingProperties: SharingProperties;

  constructor() {
    this.#sharingProperties = {};
  }

  withPrivacy(privacy: PrivacyType): SharingPropertiesBuilder {
    this.#sharingProperties.privacy = privacy;
    return this;
  }

  withReplyTo(
    replyTo: Map<ResponseMethod & BSoulsResponseMethod, URI>
  ): SharingPropertiesBuilder {
    this.#sharingProperties.replyTo = replyTo;
    return this;
  }

  withSentBy(email: Email): SharingPropertiesBuilder {
    this.#sharingProperties.sentBy = email;
    return this;
  }

  withParticipant(id: Id, participant: Participant): SharingPropertiesBuilder {
    if (!this.#sharingProperties.participants) {
      this.#sharingProperties.participants = new Map();
    }
    this.#sharingProperties.participants.set(id, participant);
    return this;
  }

  build(): SharingProperties {
    return this.#sharingProperties;
  }
}
