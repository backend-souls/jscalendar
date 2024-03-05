import { SignedDuration, UTCDateTime } from 'src/datatypes';
import { RelativeTo } from '../datatypes/RelativeTo';

export type OffsetTrigger = {
  '@type': 'OffsetTrigger';
  offset: SignedDuration;
  relativeTo: RelativeTo;
};

export type AbsoluteTrigger = {
  '@type': 'AbsoluteTrigger';
  when: UTCDateTime;
};

export type UnknownTrigger = {
  '@type': 'UnknownTrigger';
};

export type AlertTrigger = OffsetTrigger | AbsoluteTrigger | UnknownTrigger;
