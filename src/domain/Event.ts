import {
  Details,
  DetailsProperties,
  Metadata,
  type Duration,
  type UTCDateTime,
  RequiredMetadataProperties,
} from 'src/index';

export type Status = 'confirmed' | 'cancelled' | 'tentative';

export type RequiredEventProperties = RequiredMetadataProperties &
  DetailsProperties & {
    start: UTCDateTime;
  };

export type Event = Metadata &
  Details & {
    start: UTCDateTime;
    duration?: Duration;
    status?: Status;
  };
