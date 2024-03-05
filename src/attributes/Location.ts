import { Link } from './Link';
import { RelativeTo } from '../datatypes/RelativeTo';
import { Id, TimeZoneId } from 'src/datatypes';

export type Location = {
  '@type': 'Location';

  name?: string;

  timeZone?: TimeZoneId;

  description?: string;

  coordinates?: string; // geo, RFC-5870

  relativeTo?: RelativeTo;

  links?: Map<Id, Link>;

  locationTypes?: Map<string, boolean>; // RFC-4589
};

export class LocationBuilder {
  #location: Location = {
    '@type': 'Location',
  };

  public withName(name: string): LocationBuilder {
    this.#location.name = name;
    return this;
  }

  public withTimeZone(timeZone: TimeZoneId): LocationBuilder {
    this.#location.timeZone = timeZone;
    return this;
  }

  public withDescription(description: string): LocationBuilder {
    this.#location.description = description;
    return this;
  }

  public withCoordinates(coordinates: string): LocationBuilder {
    this.#location.coordinates = coordinates;
    return this;
  }

  public withRelativeTo(relativeTo: RelativeTo): LocationBuilder {
    this.#location.relativeTo = relativeTo;
    return this;
  }

  public addLinks(links: Map<Id, Link>): LocationBuilder {
    this.#location.links = links;
    return this;
  }

  public addLocationTypes(
    locationTypes: Map<string, boolean>
  ): LocationBuilder {
    this.#location.locationTypes = locationTypes;
    return this;
  }

  public build(): Location {
    return this.#location;
  }
}
