import { UUID } from 'node:crypto';
import { validate as isValidUUIDv4 } from 'uuid';
import { describe, it, expect } from '@jest/globals';
import { faker } from '@faker-js/faker/locale/en';

import { createProduct, defaultProduct, Product } from '..';

describe('Product [DEFAULT_UID]', () => {
  it('create a Product with all properties', () => {
    const productName = faker.commerce.product();
    const product: Product<UUID> = defaultProduct({ name: productName });

    expect(product.name).toBe(productName);
  });

  it('create a Product without name', () => {
    const product: Product<UUID> = defaultProduct();

    expect(isValidUUIDv4(product.prodId)).toBe(true);
  });
});

describe('Product [CUSTOM_UID]', () => {
  it('create a Product with all properties', () => {
    const productName = faker.commerce.product();
    const product: Product<string> = createProduct({
      name: productName,
      uidGenerator: faker.database.mongodbObjectId,
    });

    expect(product.name).toBe(productName);
  });

  it('create a Product without name', () => {
    const product: Product<string> = createProduct({
      uidGenerator: faker.database.mongodbObjectId,
    });

    expect(product.prodId).not.toBeNull();
    expect(product.prodId).not.toBeUndefined();
  });
});
