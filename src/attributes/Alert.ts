import {
  Id,
  Relation,
  UTCDateTime,
  BSoulsActionType,
  AlertTrigger,
  ActionType,
  ActionTypeError,
  isActionType,
  isBackendsoulsActionType,
} from 'src/datatypes';

export type AlertProperties = {
  useDefaultAlerts?: boolean;

  alerts?: Map<Id, Alert>;
};

export type Alert = {
  '@type': 'Alert';

  trigger: AlertTrigger;

  acknowledged?: UTCDateTime;

  relatedTo?: Map<string, Relation>;

  action?: ActionType | BSoulsActionType;
};

export class AlertBuilder {
  #alert: Alert = {
    '@type': 'Alert',
    trigger: {
      '@type': 'UnknownTrigger',
    },
  };

  public withTrigger(trigger: AlertTrigger): AlertBuilder {
    this.#alert.trigger = trigger;
    return this;
  }

  public withBackendSoulsAction(action: BSoulsActionType): AlertBuilder {
    if (this.#alert.action && isActionType(this.#alert.action)) {
      throw new ActionTypeError(action);
    }

    this.#alert.action = action;
    return this;
  }

  public withCanonicalAction(action: ActionType): AlertBuilder {
    if (this.#alert.action && isBackendsoulsActionType(this.#alert.action)) {
      throw new ActionTypeError(action);
    }

    this.#alert.action = action;
    return this;
  }

  public withAcknowledged(acknowledged: UTCDateTime): AlertBuilder {
    this.#alert.acknowledged = acknowledged;
    return this;
  }

  public addRelatedTo(relatedTo: Map<string, Relation>): AlertBuilder {
    this.#alert.relatedTo = relatedTo;
    return this;
  }

  public build(): Alert {
    return this.#alert satisfies Alert;
  }
}
