import { MultilingualProperties } from 'src/attributes/Multilingual';
import { SchedulingProperties } from 'src/attributes/Schedule';
import { SharingProperties } from 'src/attributes/Share';
import { TimeZoneProperties } from 'src/attributes/TimeZone';
import {
  Details,
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
  Details &
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

/**
 * Create a new event with default values defined in the RFC-8984
 * @param start - The start date of the event, in UTC
 */
export function createDefaultEvent(start: UTCDateTime): Event {
  return {
    start,
    '@type': 'Event',
    updated: new Date(),
    created: new Date(),
    sequence: 0,
    uid: generateRandomId(),
    title: '',
    description: '',
    descriptionContentType: 'text/plain',
    showWithoutTime: false,
  };
}
