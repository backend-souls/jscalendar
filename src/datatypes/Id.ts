import { UUID, randomUUID } from 'crypto';

export type Id = UUID;

export const generateRandomId = randomUUID;
