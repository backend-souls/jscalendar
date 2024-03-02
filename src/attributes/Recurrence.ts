import {
  Int,
  LocalDateTime,
  TimeZoneId,
  Type,
  UnsignedInt,
} from 'src/datatypes';
import { PatchObject } from './PatchObject';

export type Frequency =
  | 'secondly'
  | 'minutely'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly';

export type Skip = 'omit' | 'backwards' | 'forwards';

export type DayOfTheWeek = 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa' | 'su';

export type NDay = {
  '@type': 'NDay';
  day: string;
  nthOfPeriod?: Int;
};

export type RecurrenceRule = {
  '@type': 'RecurrenceRule';
  frequency?: Frequency;
  interval?: UnsignedInt;
  rscale?: string;
  skip?: Skip;
  firstDayOfWeek?: DayOfTheWeek;
  byDay?: Array<NDay>;
  byMonth?: Array<string>;
  byMonthDay?: Array<Int>;
  byYearDay?: Array<Int>;
  byWeekNo?: Array<Int>;
  byHour?: Array<UnsignedInt>;
  byMinute?: Array<UnsignedInt>;
  bySecond?: Array<UnsignedInt>;
  bySetPosition?: Array<Int>;
  count?: UnsignedInt;
  until?: LocalDateTime;
};

export type RecurrenceProperties = {
  recurrenceId?: LocalDateTime;
  recurrenceIdTimeZone?: TimeZoneId;
  recurrenceRules?: Array<RecurrenceRule>;
  excludedRecurrenceRules?: Array<RecurrenceRule>;
  recurrenceOverrides?: Array<PatchObject>;
  excluded?: boolean;
};
