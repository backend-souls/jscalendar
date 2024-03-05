import { UnsignedInt } from 'src/datatypes';

export type DisplayValue = 'badge' | 'graphic' | 'fullsize' | 'thumbnail';

export type Link = {
  '@type': 'Link';

  href: string;

  cid?: string;

  rel?: string;

  title?: string;

  size?: UnsignedInt;

  contentType?: string;

  display?: DisplayValue;
};

export class LinkError extends Error {
  constructor() {
    super('Link href is required');
  }
}

export class LinkBuilder {
  #link: Link = {
    '@type': 'Link',
    href: '',
  };

  /** set methods are required */
  public setHref(href: string): LinkBuilder {
    this.#link.href = href;
    return this;
  }

  public withCid(cid: string): LinkBuilder {
    this.#link.cid = cid;
    return this;
  }

  public withRel(rel: string): LinkBuilder {
    this.#link.rel = rel;
    return this;
  }

  public withTitle(title: string): LinkBuilder {
    this.#link.title = title;
    return this;
  }

  public withSize(size: UnsignedInt): LinkBuilder {
    this.#link.size = size;
    return this;
  }

  public withContentType(contentType: string): LinkBuilder {
    this.#link.contentType = contentType;
    return this;
  }

  public withDisplay(display: DisplayValue): LinkBuilder {
    this.#link.display = display;
    return this;
  }

  public build(): Link {
    if (this.#link.href === '') {
      throw new LinkError();
    }
    return this.#link;
  }
}
