import type { UUID } from 'crypto';
import { Link } from './Link';
import { Location } from './Location';
import { VirtualLocation } from './VirtualLocation';

/**
 * The Details are the 'What and Where Properties' of an Event.
 */

export type OptionalDetailsProperties = {
  title?: string;
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

export type DetailsProperties = OptionalDetailsProperties;

export type Details = DetailsProperties;
