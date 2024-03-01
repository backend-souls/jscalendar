import { UUID, randomUUID } from 'node:crypto';

export type ProductProperties = {
  prodId?: UUID;
  name?: string;
  externalProductId?: string;
};

export class Product {
  #prodId: UUID;

  /** NOT RFC-8984 Properties */
  #name?: string;
  #externalProductId?: string;

  constructor({ prodId, name, externalProductId }: ProductProperties = {}) {
    this.#prodId = prodId ? prodId : randomUUID();
    this.#externalProductId = externalProductId;
    this.#name = name;
  }

  get prodId(): UUID {
    return this.#prodId;
  }

  get name(): string | undefined {
    return this.#name;
  }

  get externalProductId(): string | undefined {
    return this.#externalProductId;
  }
}
