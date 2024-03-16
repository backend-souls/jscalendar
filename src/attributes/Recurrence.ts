import { Int, LocalDateTime, TimeZoneId, UnsignedInt } from 'src/datatypes';
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

export class RecurrenceRuleBuilder {
  #recurrenceRule: RecurrenceRule = {
    '@type': 'RecurrenceRule',
  };

  public withFrequency(frequency: Frequency): RecurrenceRuleBuilder {
    this.#recurrenceRule.frequency = frequency;
    return this;
  }

  public withInterval(interval: UnsignedInt): RecurrenceRuleBuilder {
    this.#recurrenceRule.interval = interval;
    return this;
  }

  public withRscale(rscale: string): RecurrenceRuleBuilder {
    this.#recurrenceRule.rscale = rscale;
    return this;
  }

  public withSkip(skip: Skip): RecurrenceRuleBuilder {
    this.#recurrenceRule.skip = skip;
    return this;
  }

  public withFirstDayOfWeek(
    firstDayOfWeek: DayOfTheWeek
  ): RecurrenceRuleBuilder {
    this.#recurrenceRule.firstDayOfWeek = firstDayOfWeek;
    return this;
  }

  public addByDay(byDay: Array<NDay>): RecurrenceRuleBuilder {
    this.#recurrenceRule.byDay = byDay;
    return this;
  }

  public addByMonth(byMonth: Array<string>): RecurrenceRuleBuilder {
    this.#recurrenceRule.byMonth = byMonth;
    return this;
  }

  public addByMonthDay(byMonthDay: Array<Int>): RecurrenceRuleBuilder {
    this.#recurrenceRule.byMonthDay = byMonthDay;
    return this;
  }

  public addByYearDay(byYearDay: Array<Int>): RecurrenceRuleBuilder {
    this.#recurrenceRule.byYearDay = byYearDay;
    return this;
  }

  public addByWeekNo(byWeekNo: Array<Int>): RecurrenceRuleBuilder {
    this.#recurrenceRule.byWeekNo = byWeekNo;
    return this;
  }

  public addByHour(byHour: Array<UnsignedInt>): RecurrenceRuleBuilder {
    this.#recurrenceRule.byHour = byHour;
    return this;
  }

  public addByMinute(byMinute: Array<UnsignedInt>): RecurrenceRuleBuilder {
    this.#recurrenceRule.byMinute = byMinute;
    return this;
  }

  public addBySecond(bySecond: Array<UnsignedInt>): RecurrenceRuleBuilder {
    this.#recurrenceRule.bySecond = bySecond;
    return this;
  }

  public addBySetPosition(bySetPosition: Array<Int>): RecurrenceRuleBuilder {
    this.#recurrenceRule.bySetPosition = bySetPosition;
    return this;
  }

  public withCount(count: UnsignedInt): RecurrenceRuleBuilder {
    this.#recurrenceRule.count = count;
    return this;
  }

  public withUntil(until: LocalDateTime): RecurrenceRuleBuilder {
    this.#recurrenceRule.until = until;
    return this;
  }

  public build(): RecurrenceRule {
    return this.#recurrenceRule;
  }
}

export type RecurrenceProperties = {
  recurrenceId?: LocalDateTime;

  recurrenceIdTimeZone?: TimeZoneId;

  recurrenceRules?: Array<RecurrenceRule>;

  excludedRecurrenceRules?: Array<RecurrenceRule>;

  recurrenceOverrides?: Array<PatchObject>;

  excluded?: boolean;
};

export class RecurrenceBuilder {
  #recurrence: RecurrenceProperties = {};

  public withRecurrenceId(recurrenceId: LocalDateTime): RecurrenceBuilder {
    this.#recurrence.recurrenceId = recurrenceId;
    return this;
  }

  public withRecurrenceIdTimeZone(
    recurrenceIdTimeZone: TimeZoneId
  ): RecurrenceBuilder {
    this.#recurrence.recurrenceIdTimeZone = recurrenceIdTimeZone;
    return this;
  }

  public addRecurrenceRules(
    recurrenceRules: Array<RecurrenceRule>
  ): RecurrenceBuilder {
    this.#recurrence.recurrenceRules = recurrenceRules;
    return this;
  }

  public addExcludedRecurrenceRules(
    excludedRecurrenceRules: Array<RecurrenceRule>
  ): RecurrenceBuilder {
    this.#recurrence.excludedRecurrenceRules = excludedRecurrenceRules;
    return this;
  }

  public addRecurrenceOverrides(
    recurrenceOverrides: Array<PatchObject>
  ): RecurrenceBuilder {
    this.#recurrence.recurrenceOverrides = recurrenceOverrides;
    return this;
  }

  public withExcluded(excluded: boolean): RecurrenceBuilder {
    this.#recurrence.excluded = excluded;
    return this;
  }

  public build(): RecurrenceProperties {
    return this.#recurrence;
  }
}
