import { Id } from 'src/datatypes';
import { Link } from './Link';
import { Location } from './Location';
import { VirtualLocation } from './VirtualLocation';

/**
 * The Details are the 'What and Where Properties' of an Event.
 */
export type WhatProperties = {
  title?: string;

  // TODO: add multimedia support (html?)
  description?: string;

  descriptionContentType?: string;

  showWithoutTime?: boolean;

  locale?: string;

  keywords?: Map<string, boolean>;

  categories?: Map<string, boolean>;

  color?: string;
};

export type WhereProperties = {
  locations?: Map<Id, Location>;

  virtualLocations?: Map<Id, VirtualLocation>;

  links?: Map<Id, Link>;
};

export type DetailsProperties = WhatProperties & WhereProperties;

export class DetailsBuilder {
  #details: DetailsProperties = {};

  public withTitle(title: string): DetailsBuilder {
    this.#details.title = title;
    return this;
  }

  public withDescription(description: string): DetailsBuilder {
    this.#details.description = description;
    return this;
  }

  public withDescriptionContentType(
    descriptionContentType: string
  ): DetailsBuilder {
    this.#details.descriptionContentType = descriptionContentType;
    return this;
  }

  public showWithoutTime(showWithoutTime: boolean): DetailsBuilder {
    this.#details.showWithoutTime = showWithoutTime;
    return this;
  }

  public withLocale(locale: string): DetailsBuilder {
    this.#details.locale = locale;
    return this;
  }

  public addKeywords(keywords: Map<string, boolean>): DetailsBuilder {
    this.#details.keywords = keywords;
    return this;
  }

  public addCategories(categories: Map<string, boolean>): DetailsBuilder {
    this.#details.categories = categories;
    return this;
  }

  public withColor(color: string): DetailsBuilder {
    this.#details.color = color;
    return this;
  }

  public addLocations(locations: Map<Id, Location>): DetailsBuilder {
    this.#details.locations = locations;
    return this;
  }

  public addVirtualLocations(
    virtualLocations: Map<Id, VirtualLocation>
  ): DetailsBuilder {
    this.#details.virtualLocations = virtualLocations;
    return this;
  }

  public addLinks(links: Map<Id, Link>): DetailsBuilder {
    this.#details.links = links;
    return this;
  }

  public build(): DetailsProperties {
    return this.#details satisfies DetailsProperties;
  }
}
