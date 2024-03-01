import { randomUUID, type UUID } from 'node:crypto';
import { type Id } from 'src/index';

export type ProductProperties = {
  uid?: Id;
  name?: string;
  externalProductId?: string;
};

export class Product {
  private uid: Id;

  /** NOT RFC-8984 Properties */
  #name?: string;
  #externalId?: string;

  constructor({ uid: prodId, name, externalProductId }: ProductProperties = {}) {
    this.uid = prodId ? prodId : randomUUID();
    this.#externalId = externalProductId;
    this.#name = name;
  }

  get prodId(): Id {
    return this.uid;
  }

  get name(): string | undefined {
    return this.#name;
  }

  get externalProductId(): string | undefined {
    return this.#externalId;
  }
}
