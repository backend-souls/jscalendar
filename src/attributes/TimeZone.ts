import { LocalDateTime, TimeZoneId, UTCDateTime } from 'src/datatypes';
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

export class TimeZoneError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TimeZoneError';
  }
}

export class TimeZoneBuilder {
  #timeZone: TimeZone;

  constructor() {
    this.#timeZone = {
      '@type': 'TimeZone',
      tzId: '',
    };
  }

  setTzId(tzId: string): TimeZoneBuilder {
    this.#timeZone.tzId = tzId;
    return this;
  }

  withUpdated(updated: UTCDateTime): TimeZoneBuilder {
    this.#timeZone.updated = updated;
    return this;
  }

  withUrl(url: string): TimeZoneBuilder {
    this.#timeZone.url = url;
    return this;
  }

  withValidUntil(validUntil: UTCDateTime): TimeZoneBuilder {
    this.#timeZone.validUntil = validUntil;
    return this;
  }

  addAlias(alias: string): TimeZoneBuilder {
    if (!this.#timeZone.aliases) {
      this.#timeZone.aliases = new Map();
    }

    this.#timeZone.aliases.set(alias, true);
    return this;
  }

  addStandard(rule: TimeZoneRule): TimeZoneBuilder {
    if (!this.#timeZone.standard) {
      this.#timeZone.standard = [];
    }

    this.#timeZone.standard.push(rule);
    return this;
  }

  addDaylight(rule: TimeZoneRule): TimeZoneBuilder {
    if (!this.#timeZone.daylight) {
      this.#timeZone.daylight = [];
    }

    this.#timeZone.daylight.push(rule);
    return this;
  }

  build(): TimeZone {
    if (!this.#timeZone.tzId) {
      throw new TimeZoneError('tzId is required');
    }

    return this.#timeZone;
  }
}
