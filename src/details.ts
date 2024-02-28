import { UUID } from 'crypto';

import { Link } from './link';
import { Location } from './location';
import { VirtualLocation } from './virtual-location';

export type DetailsProperties = {
  title: string;
  description: string;
  descriptionContentType?: string;
  showWithoutTime?: boolean;
  locations?: Map<UUID, Location>;
  virtualLocations?: Map<UUID, VirtualLocation>;
  links?: Map<UUID, Link>;
  locale?: string;
  keywords?: Map<string, boolean>;
  categories?: Map<string, boolean>;
  color?: string;
};

export class Details {
  #title: string;
  #description: string;
  #descriptionContentType?: string;
  #showWithoutTime?: boolean;
  #locations?: Map<UUID, Location>;
  #virtualLocations?: Map<UUID, VirtualLocation>;
  #links?: Map<UUID, Link>;
  #locale?: string;
  #keywords?: Map<string, boolean>;
  #categories?: Map<string, boolean>;
  #color?: string;

  constructor({
    title,
    description,
    descriptionContentType,
    showWithoutTime,
    locations,
    virtualLocations,
    links,
    locale,
    keywords,
    categories,
    color,
  }: DetailsProperties) {
    this.#title = title;
    this.#description = description;
    this.#descriptionContentType = descriptionContentType;
    this.#showWithoutTime = showWithoutTime;
    this.#locations = locations;
    this.#virtualLocations = virtualLocations;
    this.#links = links;
    this.#locale = locale;
    this.#keywords = keywords;
    this.#categories = categories;
    this.#color = color;
  }

  get title(): string {
    return this.#title;
  }

  get description(): string {
    return this.#description;
  }

  get descriptionContentType(): string | undefined {
    return this.#descriptionContentType;
  }

  get showWithoutTime(): boolean | undefined {
    return this.#showWithoutTime;
  }

  get locations(): Map<UUID, Location> | undefined {
    return this.#locations;
  }

  get virtualLocations(): Map<UUID, VirtualLocation> | undefined {
    return this.#virtualLocations;
  }

  get links(): Map<UUID, Link> | undefined {
    return this.#links;
  }

  get locale(): string | undefined {
    return this.#locale;
  }

  get keywords(): Map<string, boolean> | undefined {
    return this.#keywords;
  }

  get categories(): Map<string, boolean> | undefined {
    return this.#categories;
  }

  get color(): string | undefined {
    return this.#color;
  }
}
