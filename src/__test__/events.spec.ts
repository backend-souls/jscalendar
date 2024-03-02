import { UUID } from 'node:crypto';

import { describe, it, expect, assertType } from 'vitest';

import { Event } from 'src/domain';
import { generateRandomId } from 'src/datatypes';

describe('Events', () => {
  it('should create Event with required fields', () => {
    const event: Event = {
      _type: 'Event',
      uid: generateRandomId(),
      updated: new Date(),
      start: new Date(),
    };

    expect(event).not.toBeNull();
    expect(event).not.toBeUndefined();

    expect(event.uid).not.toBe('');
    expect(event.uid).not.toBeNull();
    expect(event.uid).not.toBeUndefined();
    //    expect(event.uid).toBeTypeOf(UUID);
  });
});
