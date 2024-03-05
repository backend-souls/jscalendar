import {
  Int,
  FreeBusyStatus,
  FreeBusyStatusError,
  BSoulsFreeBusyStatus,
  isBSoulsFreeBusyStatus,
  isFreeBusyStatus,
} from 'src/datatypes';

export type SchedulingProperties = {
  priority?: Int;
  freeBusyStatus?: FreeBusyStatus | BSoulsFreeBusyStatus;
  requestStatus?: string; // TODO: RFC-5545
};

export class ScheduleBuilder {
  #schedule: SchedulingProperties = {};

  public withPriority(priority: Int): ScheduleBuilder {
    this.#schedule.priority = priority;
    return this;
  }

  public fromFreeBusyStatus(freeBusyStatus: FreeBusyStatus): ScheduleBuilder {
    if (
      this.#schedule.freeBusyStatus &&
      isBSoulsFreeBusyStatus(this.#schedule.freeBusyStatus)
    ) {
      throw new FreeBusyStatusError(freeBusyStatus);
    }

    this.#schedule.freeBusyStatus = freeBusyStatus;
    return this;
  }

  public fromBSoulsFreeBusyStatus(
    freeBusyStatus: BSoulsFreeBusyStatus
  ): ScheduleBuilder {
    if (
      this.#schedule.freeBusyStatus &&
      isFreeBusyStatus(this.#schedule.freeBusyStatus)
    ) {
      throw new FreeBusyStatusError(freeBusyStatus);
    }

    this.#schedule.freeBusyStatus = freeBusyStatus;
    return this;
  }

  public withRequestStatus(requestStatus: string): ScheduleBuilder {
    this.#schedule.requestStatus = requestStatus;
    return this;
  }

  public build(): SchedulingProperties {
    return this.#schedule;
  }
}
