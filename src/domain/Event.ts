import { Details, DetailsProperties, type Duration, type UTCDateTime } from 'src/index';

export type Status = 'confirmed' | 'cancelled' | 'tentative';

export type EventProperties = {
  start: UTCDateTime;
  duration?: Duration;
  status?: Status;
} & DetailsProperties;

export type Event = {
  start: UTCDateTime;
  duration?: Duration;
  status?: Status;
} & Details;

export function createSimpleEvent({ start, duration, status, title }: EventProperties) {
  return {
    start,
    duration,
    status,
    title,
  };
}

export class EventBuilder {
  #start: UTCDateTime;
  #duration?: Duration;
  #status?: Status;
  #details: Details;

  constructor() {
    this.#start = new Date(); // Initialize with default values if necessary
    this.#details = { title: '' }; // Initialize with default values if necessary
  }

  withStart(start: UTCDateTime): EventBuilder {
    this.#start = start;
    return this;
  }

  withDuration(duration: Duration): EventBuilder {
    this.#duration = duration;
    return this;
  }

  withStatus(status: Status): EventBuilder {
    this.#status = status;
    return this;
  }

  withDetails(details: Details): EventBuilder {
    this.#details = details;
    return this;
  }

  build(): Event {
    return {
      start: this.#start,
      duration: this.#duration,
      status: this.#status,
      ...this.#details,
    };
  }
}
