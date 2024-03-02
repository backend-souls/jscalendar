import { Relation, SignedDuration, Type, UTCDateTime } from 'src/datatypes';
import { Id } from 'src/datatypes';
import { RelativeTo } from './RelativeTo';

export type ActionType = 'display' | 'email';

export type OffsetTrigger = {
  _type: 'OffsetTrigger';
  offset: SignedDuration;
  relativeTo: RelativeTo;
};

export type AbsoluteTrigger = {
  _type: 'AbsoluteTrigger';
  when: UTCDateTime;
};

export type UnknownTrigger = {
  _type: 'UnknownTrigger';
};

export type AlertTrigger = OffsetTrigger | AbsoluteTrigger | UnknownTrigger;

export type Alert = {
  _type: Type;
  trigger: AlertTrigger;
};

export type OptionalAlertProperties = {
  useDefaultAlerts?: boolean;
  alerts?: Map<Id, Alert>;
  acknowledged?: UTCDateTime;
  relatedTo?: Map<string, Relation>;
  action: ActionType;
};
