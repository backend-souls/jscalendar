import type { UUID } from 'crypto';
import { Link } from './Link';
import { Location } from './Location';
import { VirtualLocation } from './VirtualLocation';

export type DetailsProperties = {
  title: string;
  description?: string;
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

export type Details = {
  title: string;
  description?: string;
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

export function createDetails({
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
  return {
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
  };
}
