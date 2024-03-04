import { LocalDateTime, TimeZoneId, Type, UTCDateTime } from 'src/datatypes';
import { RecurrenceRule } from './Recurrence';
import { PatchObject } from './PatchObject';

export type TimeZoneRule = {
  '@type': 'TimeZoneRule';
  start: LocalDateTime;
  offsetTo: string;
  offsetFrom: string;
  recurrenceRules?: Array<RecurrenceRule>;
  recurrenceOverrides?: Map<LocalDateTime, PatchObject>;
  // This maps the TZNAME properties from iCalendar to a JSON set.
  names: Map<string, boolean>;
  comments: Array<string>;
};

export type TimeZone = {
  '@type': 'TimeZone';
  tzId: string;
  updated?: UTCDateTime;
  url?: string;
  validUntil?: UTCDateTime;
  aliases?: Map<string, boolean>;
  standard?: Array<TimeZoneRule>;
  daylight?: Array<TimeZoneRule>;
};

export type TimeZoneProperties = {
  timeZone?: TimeZoneId | null;
  timeZones?: Map<TimeZoneId, TimeZone>;
};
