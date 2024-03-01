import { randomUUID } from 'crypto';
import { Id, Product, Relation, type Type, UTCDateTime } from '../index';

interface Default<T> {
  default(...args: any[]): T;
}

export type MetadataProperties = {
  /** Mandatory */
  _type: Type;

  /** Optional */
  uid?: Id;

  product?: Product;

  method?: string;
};

export class Metadata {
  /** Mandatory */
  private _type: Type;

  private uid: Id;

  #updated: UTCDateTime;

  /** Optional */
  #relatedTo: Map<Id, Relation>;

  product?: Product;

  #created: UTCDateTime;

  #sequence: number;

  #method?: string;

  constructor({ _type, uid, product, method }: MetadataProperties) {
    this._type = _type;
    this.#method = method;
    this.product = product;

    /** Defaults */
    this.#sequence = 0;
    this.uid = uid ? uid : randomUUID();
    this.#created = new Date(Date.now());
    this.#updated = new Date(Date.now());
    this.#relatedTo = new Map<Id, Relation>();
  }

  get prodId(): Id | undefined {
    return this.product?.prodId;
  }

  get relatedTo(): Map<Id, Relation> {
    return this.#relatedTo;
  }

  get method(): string | undefined {
    return this.#method;
  }

  get created(): UTCDateTime {
    return this.#created;
  }

  get updated(): UTCDateTime {
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
