import { UUID, randomUUID } from 'crypto';

import { Type } from './datatypes/Type';
import { Product } from './product';
import { Relation } from './datatypes/Relation';

export type MetadataProperties = {
  _type: Type;
  uid?: UUID;
  product?: Product;
  method?: string;
};

export class Metadata {
  #uid: UUID;
  #_type: Type;
  #created: Date;
  #updated: Date;
  #method?: string;
  #sequence: number;
  #product?: Product;
  #relatedTo: Map<UUID, Relation>;

  constructor({ _type, uid, product, method }: MetadataProperties) {
    this.#_type = _type;
    this.#method = method;
    this.#product = product;

    this.#sequence = 0;
    this.#uid = uid ? uid : randomUUID();
    this.#created = new Date(Date.now());
    this.#updated = new Date(Date.now());
    this.#relatedTo = new Map<UUID, Relation>();
  }

  get '@type'(): Type {
    return this.#_type;
  }

  get uid(): UUID {
    return this.#uid;
  }

  get product(): Product | undefined {
    return this.#product;
  }

  get relatedTo(): Map<UUID, Relation> {
    return this.#relatedTo;
  }

  get method(): string | undefined {
    return this.#method;
  }

  get created(): Date {
    return this.#created;
  }

  get updated(): Date {
    return this.#updated;
  }

  get sequence(): number {
    return this.#sequence;
  }

  addRelation(relation: Relation): void {
    if (!this.#relatedTo) {
      this.#relatedTo = new Map();
    }

    this.#relatedTo.set(randomUUID(), relation);
  }
}
