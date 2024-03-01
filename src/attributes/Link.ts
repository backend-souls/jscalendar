import type { Type } from '../datatypes/Type';

export type DisplayValue = 'badge' | 'graphic' | 'fullsize' | 'thumbnail';

export class Link {
  #_type: Type;
  #title?: string;
  #href: string;
  #cid?: string;
  #contentType?: string;
  #size?: number;
  #rel?: string;
  #display?: DisplayValue;

  constructor(
    href: string,
    title?: string,
    cid?: string,
    contentType?: string,
    size?: number,
    rel?: string,
    display?: DisplayValue
  ) {
    this.#_type = 'Link';
    this.#href = href;
    this.#title = title;
    this.#cid = cid;
    this.#contentType = contentType;
    this.#size = size;
    this.#rel = rel;
    this.#display = display;
  }

  get '@type'(): Type {
    return this.#_type;
  }

  get href(): string {
    return this.#href;
  }

  get title(): string | undefined {
    return this.#title;
  }

  get cid(): string | undefined {
    return this.#cid;
  }

  get contentType(): string | undefined {
    return this.#contentType;
  }

  get size(): number | undefined {
    return this.#size;
  }

  get rel(): string | undefined {
    return this.#rel;
  }

  get display(): DisplayValue | undefined {
    return this.#display;
  }
}
