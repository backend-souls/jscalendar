import { randomUUID } from 'node:crypto';

import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker/locale/en';
import { Product } from 'src/domain/extensions';

describe('Product', () => {
  it('create a Product with all properties', () => {
    const productName = faker.commerce.product();
    const product: Product = new Product({
      name: productName,
      externalProductId: randomUUID(),
    });

    expect(product.prodId).not.toBeNull();
    expect(product.prodId).not.toBeUndefined();

    expect(product.name).toBe(productName);

    expect(product.externalProductId).not.toBeNull();
    expect(product.externalProductId).not.toBeUndefined();
  });

  it('create a Product without optional parameters', () => {
    const product: Product = new Product();

    expect(product.prodId).not.toBeNull();
    expect(product.prodId).not.toBeUndefined();
  });
});
