export type Int = number;

export type UnsignedInt = number;

export function isUnsignedInteger(value: UnsignedInt): boolean {
  return Number.isInteger(value) && value >= 0;
}

export class UnsignedIntegerError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'UnsignedIntegerError';

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

export function ValidUnsignedInteger(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalSet = descriptor.set;

  descriptor.set = function (value: UnsignedInt) {
    if (!isUnsignedInteger(value)) {
      throw new UnsignedIntegerError('Invalid unsigned integer');
    }

    originalSet!.call(this, value);
  };

  return descriptor;
}
