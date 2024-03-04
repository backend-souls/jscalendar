export type Feature =
  | 'audio'
  | 'chat'
  | 'feed'
  | 'moderator'
  | 'phone'
  | 'screen'
  | 'video';

export type VirtualLocation = {
  '@type': 'VirtualLocation';
  uri: string;
  name?: string;
  description?: string;
  features: Map<Feature, boolean>;
};
