import { Id, Relation, UTCDateTime, UnsignedInt } from '../index';

export type RequiredMetadataProperties = {
  uid: Id;

  updated: UTCDateTime;
};

export type OptionalMetadataProperties = {
  relatedTo?: Map<Id, Relation>;

  prodId?: Id;

  created?: UTCDateTime;

  sequence?: UnsignedInt;

  method?: string;
};

export type MetadataProperties = RequiredMetadataProperties &
  OptionalMetadataProperties;
