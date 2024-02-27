import { Duration } from 'date-fns';
import { createMetadata, Metadata } from './metadata';
import { createDetails, Details, DetailsProperties } from './details';
import { UidGenerator } from './uid-generator';
import { UUID } from 'crypto';
import { v4 as uuidv4 } from 'uuid';

export type Status = 'confirmed' | 'cancelled' | 'tentative';

export type EventData = {
  start: Date;
  duration?: Duration;
  status?: Status;
};

export type Event<U> = Metadata<U> & Details<U> & EventData;

export type EventProperties = {
  start: Date;
} & DetailsProperties;

export type EventRequest = EventProperties & UidGenerator;

export function createEvent<U>(eventRequest: EventRequest): Event<U> {
  const metadata: Metadata<U> = createMetadata<U>({
    _type: 'Event',
    uidGenerator: eventRequest.uidGenerator,
  });

  const detail: Details<U> = createDetails({
    title: eventRequest.title,
    description: eventRequest.description,
    uidGenerator: eventRequest.uidGenerator,
  });

  const event: Event<U> = {
    ...metadata,
    ...detail,
    start: eventRequest.start,
  };

  return event;
}

export function defaultEvent(eventProperties: EventProperties): Event<UUID> {
  return createEvent<UUID>({ uidGenerator: uuidv4, ...eventProperties });
}
