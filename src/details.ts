import { UUID } from 'crypto';
import { Type } from './type';
import { v4 as uuidv4 } from 'uuid';

import { UidGenerator } from './uid-generator';

export type RelativeTo = 'start' | 'end';

export type Feature = 'audio' | 'chat' | 'feed' | 'moderator' | 'phone' | 'screen' | 'video';

export type Location<U> = {
  _type: Type;
  name?: string;
  description?: string;
  locationTypes?: Map<string, boolean>;
  relativeTo?: RelativeTo;
  timeZone?: string;
  coordinates?: string;
  links?: Map<U, Link>;
};

export type VirtualLocation = {
  _type: Type;
  name?: string;
  description?: string;
  uri?: string;
  features?: Map<Feature, boolean>;
};

export type Link = {
  _type: Type;
};

export type Details<U> = {
  title?: string;
  description?: string;
  descriptionContentType?: string;
  showWithoutTime?: boolean;
  locations?: Map<U, Location<U>>;
  virtualLocations?: Map<U, VirtualLocation>;
  links?: Map<U, Link>;
  locale?: string;
  keywords?: Map<string, boolean>;
  categories?: Map<string, boolean>;
  color?: string;
};

export type DetailsProperties = {
  title: string;
  description: string;
};

export type DetailRequest = DetailsProperties & UidGenerator;

export function createDetails<U>(detailRequest: DetailRequest): Details<U> {
  const detail: Details<U> = {
    title: detailRequest.title,
    description: detailRequest.description,
  };

  return detail;
}

export function defaultDetail(detailsProperties: DetailsProperties): Details<UUID> {
  return createDetails<UUID>({ uidGenerator: uuidv4, ...detailsProperties });
}
