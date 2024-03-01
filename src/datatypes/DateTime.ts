import { type UnsignedInteger, isUnsignedInteger } from './Integer';

export type UTCDateTime = Date;
export type LocalDateTime = Date;

export type TimeZoneId = string;

export type SignedDuration = {
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
  weeks?: number;
  months?: number;
  years?: number;
};

export type Duration = {
  seconds?: UnsignedInteger;
  minutes?: UnsignedInteger;
  hours?: UnsignedInteger;
  days?: UnsignedInteger;
  weeks?: UnsignedInteger;
  months?: UnsignedInteger;
  years?: UnsignedInteger;
};

export function isValidDuration(duration: Duration): boolean {
  return Object.values(duration).every(isUnsignedInteger);
}
