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
  features?: Map<Feature, boolean>;
};

export class VirtualLocationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'VirtualLocationError';
  }
}

export class VirtualLocationBuilder {
  #virtualLocation: VirtualLocation;

  constructor() {
    this.#virtualLocation = {
      '@type': 'VirtualLocation',
      uri: '',
    };
  }

  setUri(uri: string): VirtualLocationBuilder {
    this.#virtualLocation.uri = uri;
    return this;
  }

  withName(name: string): VirtualLocationBuilder {
    this.#virtualLocation.name = name;
    return this;
  }

  withDescription(description: string): VirtualLocationBuilder {
    this.#virtualLocation.description = description;
    return this;
  }

  withFeature(feature: Feature, enabled: boolean): VirtualLocationBuilder {
    if (!this.#virtualLocation.features) {
      this.#virtualLocation.features = new Map();
    }
    this.#virtualLocation.features.set(feature, enabled);
    return this;
  }

  build(): VirtualLocation {
    if (!this.#virtualLocation.uri) {
      throw new VirtualLocationError('uri is required');
    }

    return this.#virtualLocation;
  }
}
