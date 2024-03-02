import { type UUID, randomUUID } from 'node:crypto';
import type { Type } from '../datatypes/Type';
import { Link } from './Link';
import { RelativeTo } from './RelativeTo';

export type LocationProperties = {
  name: string;
  description: string;
  relativeTo?: RelativeTo;
  timeZone?: string;
  coordinates?: string;
};

export class Location {
  #name: string;
  #timeZone?: string;
  #description: string;
  #coordinates?: string;
  #relativeTo?: RelativeTo;

  #links?: Map<UUID, Link> = new Map<UUID, Link>();
  #locationTypes?: Map<string, boolean> = new Map<string, boolean>();

  constructor({
    name,
    description,
    relativeTo,
    timeZone,
    coordinates,
  }: LocationProperties) {
    this.#name = name;
    this.#description = description;
    this.#relativeTo = relativeTo;
    this.#timeZone = timeZone;
    this.#coordinates = coordinates;
  }

  // WTF
  get '@type'(): Type {
    return 'Location';
  }

  get name(): string {
    return this.#name;
  }

  get description(): string {
    return this.#description;
  }

  get locationTypes(): Map<string, boolean> | undefined {
    return this.#locationTypes;
  }

  get relativeTo(): RelativeTo | undefined {
    return this.#relativeTo;
  }

  get timeZone(): string | undefined {
    return this.#timeZone;
  }

  get coordinates(): string | undefined {
    return this.#coordinates;
  }

  get links(): Map<UUID, Link> | undefined {
    return this.#links;
  }

  addLink(link: Link): void {
    if (!this.#links) {
      this.#links = new Map();
    }
    this.#links.set(randomUUID(), link);
  }

  addLocationType(locationType: string): void {
    if (!this.#locationTypes) {
      this.#locationTypes = new Map();
    }
    this.#locationTypes.set(locationType, true);
  }
}
