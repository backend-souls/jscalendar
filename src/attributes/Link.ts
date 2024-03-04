import { UnsignedInt } from 'src/datatypes';

export type DisplayValue = 'badge' | 'graphic' | 'fullsize' | 'thumbnail';

export type Link = {
  '@type': 'Link';
  href: string;
  cid?: string;
  rel?: string;
  title?: string;
  size?: UnsignedInt;
  contentType?: string;
  display?: DisplayValue;
};
