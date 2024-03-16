import { UTCDateTime } from 'src/datatypes';
import { RelativeTo } from '../datatypes/RelativeTo';
import { Duration } from 'date-fns';

export type OffsetTrigger = {
  '@type': 'OffsetTrigger';
  offset: Duration;
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
