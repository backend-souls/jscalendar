import { type } from 'os';
import { LocalDateTime, TimeZoneId, Type, UTCDateTime } from 'src/datatypes';

export type TimeZoneRule = {
  _type: Type;
  start: LocalDateTime;
  to: UTCDateTime;
  offset: number;
  isDst: boolean;
  name: string;
};

export type TimeZone = {
  _type: Type;
  tzId: string;
  updated?: UTCDateTime;
  url?: string;
  validUntil?: UTCDateTime;
  aliases?: Map<string, boolean>;
  standard?: Array<TimeZoneRule>;
};

export type OptionalTimeZoneProperties = {
  timeZone?: TimeZoneId | null;
  timeZones?: Map<TimeZoneId, TimeZone>;
};
