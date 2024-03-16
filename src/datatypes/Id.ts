import { type UUID, randomUUID } from 'crypto';

export type Id = UUID;

export const genId = randomUUID;
