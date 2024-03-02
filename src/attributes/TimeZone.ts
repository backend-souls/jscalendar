import { LocalDateTime, TimeZoneId, Type, UTCDateTime } from 'src/datatypes';
import { RecurrenceRule } from './Recurrence';
import { PatchObject } from './PatchObject';

export type TimeZoneRule = {
  _type: Type;
  start: LocalDateTime;
  offsetFrom: string;
  offsetTo: string;
  recurrenceRule?: Array<RecurrenceRule>;
  recurrenceOverrides?: Map<LocalDateTime, PatchObject>;
  names: Map<string, boolean>;
  comments: Array<string>;
};

export type TimeZone = {
  _type: Type;
  tzId: string;
  updated?: UTCDateTime;
  url?: string;
  validUntil?: UTCDateTime;
  aliases?: Map<string, boolean>;
  standard?: Array<TimeZoneRule>;
  daylight?: Array<TimeZoneRule>;
};

export type OptionalTimeZoneProperties = {
  timeZone?: TimeZoneId | null;
  timeZones?: Map<TimeZoneId, TimeZone>;
};

export type TimeZoneProperties = OptionalTimeZoneProperties;
