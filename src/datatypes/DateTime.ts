import { type UnsignedInt, isUnsignedInteger } from './Integer';

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
  seconds?: UnsignedInt;
  minutes?: UnsignedInt;
  hours?: UnsignedInt;
  days?: UnsignedInt;
  weeks?: UnsignedInt;
  months?: UnsignedInt;
  years?: UnsignedInt;
};

export function isValidDuration(duration: Duration): boolean {
  return Object.values(duration).every(isUnsignedInteger);
}
