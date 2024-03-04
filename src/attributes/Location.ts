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
