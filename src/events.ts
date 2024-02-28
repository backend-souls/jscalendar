import { Duration } from 'date-fns';
import { Details, DetailsProperties } from './details';
import { UUID } from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { Metadata } from './metadata';

export type Status = 'confirmed' | 'cancelled' | 'tentative';

export type EventData = {
  start: Date;
  duration?: Duration;
  status?: Status;
};

export type Event = Metadata & Details & EventData;

export type EventProperties = {
  start: Date;
} & DetailsProperties;

export function createEvent<U>(eventRequest: EventRequest): Event<U> {
  const metadata: Metadata = new Metadata({
    _type: 'Event',
    uid: eventRequest.uid,
    product: eventRequest.product,
    method: eventRequest.method,
  });

  const detail: Details = new Details({
    name: eventRequest.name,
    description: eventRequest.description,
    location: eventRequest.location,
    organizer: eventRequest.organizer,
    attendees: eventRequest.attendees,
    alarms: eventRequest.alarms,
  });

  const event: Event = {
    ...metadata,
    ...detail,
    start: eventRequest.start,
  };

  return event;
}

export function defaultEvent(eventProperties: EventProperties): Event<UUID> {
  return createEvent<UUID>({ uidGenerator: uuidv4, ...eventProperties });
}
