import { UUID } from 'node:crypto';
import { v4 as uuidv4 } from 'uuid';

import { UidGenerator } from '../uid-generator';

export type Product<U> = {
  prodId: U;

  /** NOT RFC-8984 Properties */
  externalProductId?: string;
  name?: string;
};

export type ProductProperties = {
  externalProductId?: string;
  name?: string;
};

export type ProductRequest = ProductProperties & UidGenerator;

export function createProduct<U>(productRequest: ProductRequest): Product<U> {
  const product: Product<U> = {
    name: productRequest.name,
    externalProductId: productRequest.externalProductId,
    prodId: productRequest.uidGenerator() as U,
  };

  return product;
}

export function defaultProduct(productProperties?: ProductProperties): Product<UUID> {
  return createProduct<UUID>({ uidGenerator: uuidv4, ...productProperties });
}
