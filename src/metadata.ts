import { UUID } from 'crypto';
import { v4 as uuidv4 } from 'uuid';

import { Type } from './type';
import { Product } from './product';
import { UidGenerator } from './uid-generator';

export type RelationType = 'first' | 'next' | 'child' | 'parent';

export type Relation = {
  readonly _type: Type;
  readonly relation: Map<RelationType, boolean>;
};

export type Metadata<U> = {
  '@type': Type;
  uid: U;
  product?: Product<U>;
  relatedTo?: Map<U, Relation>;
  created?: Date;
  updated?: Date;
  sequence?: number;
  method?: string;
};

export type MetadataProperties<U> = {
  _type: Type;
  product?: Product<U>;
};

export type MetadataRequest<U> = MetadataProperties<U> & UidGenerator;

export function createMetadata<U>(metadataRequest: MetadataRequest<U>): Metadata<U> {
  const metadata: Metadata<U> = {
    '@type': metadataRequest._type,
    uid: metadataRequest.uidGenerator() as U,
    product: metadataRequest.product,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
    sequence: 0,
  };

  return metadata;
}

export function defaultMetadata<UUID>(
  metadataProperties: MetadataProperties<UUID>
): Metadata<UUID> {
  return createMetadata<UUID>({ uidGenerator: uuidv4, ...metadataProperties });
}
