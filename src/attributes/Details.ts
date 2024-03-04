import { Id } from 'src/datatypes';
import { Link } from './Link';
import { Location } from './Location';
import { VirtualLocation } from './VirtualLocation';

/**
 * The Details are the 'What and Where Properties' of an Event.
 */
export type WhatProperties = {
  title?: string;
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
