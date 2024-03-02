import { Id, Relation, type Type, UTCDateTime, UnsignedInt } from '../index';

export type RequiredMetadataProperties = {
  _type: Type;
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
