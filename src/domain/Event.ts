import { MultilingualProperties } from 'src/attributes/Multilingual';
import { SchedulingProperties } from 'src/attributes/Schedule';
import { SharingProperties } from 'src/attributes/Share';
import { TimeZoneProperties } from 'src/attributes/TimeZone';
import {
  DetailsProperties,
  MetadataProperties,
  Duration,
  type UTCDateTime,
  RequiredMetadataProperties,
  RecurrenceProperties,
  generateRandomId,
  AlertProperties,
} from 'src/index';

export type Status = 'confirmed' | 'cancelled' | 'tentative';

export type RequiredEventProperties = RequiredMetadataProperties &
  DetailsProperties & {
    start: UTCDateTime;
  };

export type Event = MetadataProperties &
  DetailsProperties &
  RecurrenceProperties &
  SharingProperties &
  SchedulingProperties &
  AlertProperties &
  MultilingualProperties &
  TimeZoneProperties & {
    '@type': 'Event';
    start: UTCDateTime;
    duration?: Duration;
    status?: Status;
  };

export function createCanonicalEvent(start: UTCDateTime): Event {
  return {
    start,
    '@type': 'Event',
    updated: new Date(),
    sequence: 0,
    uid: generateRandomId(),
    title: '',
    description: '',
    descriptionContentType: 'text/plain',
    showWithoutTime: false,
  } satisfies Event;
}

export function createDefaultEvent(start: UTCDateTime): Event {
  return {
    start,
    '@type': 'Event',
    updated: new Date(),
    sequence: 0,
    uid: generateRandomId(),
    title: '',
    description: '',
    descriptionContentType: 'text/plain',
    showWithoutTime: false,
  } satisfies Event;
}

export function createCustomEvent(start: UTCDateTime): Event {
  return {
    start,
    '@type': 'Event',
    updated: new Date(),
    sequence: 0,
    uid: generateRandomId(),
    title: '',
    description: '',
    descriptionContentType: 'text/plain',
    showWithoutTime: false,
  } satisfies Event;
}
