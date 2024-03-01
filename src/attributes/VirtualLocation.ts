import type { Type } from '../datatypes/Type';

export type Feature = 'audio' | 'chat' | 'feed' | 'moderator' | 'phone' | 'screen' | 'video';

export type VirtualLocationProperties = {
  name: string;
  description?: string;
  uri?: string;
};

export class VirtualLocation {
  #name: string;

  #uri?: string;
  #description?: string;

  #features: Map<Feature, boolean> = new Map<Feature, boolean>();

  constructor({ name, description, uri }: VirtualLocationProperties) {
    this.#name = name;
    this.#description = description;
    this.#uri = uri;
  }

  get '@type'(): Type {
    return 'VirtualLocation';
  }

  get name(): string | undefined {
    return this.#name;
  }

  get description(): string | undefined {
    return this.#description;
  }

  get uri(): string | undefined {
    return this.#uri;
  }

  get features(): Map<Feature, boolean> | undefined {
    return this.#features;
  }

  addFeature(feature: Feature, value: boolean): void {
    this.#features.set(feature, value);
  }
}
