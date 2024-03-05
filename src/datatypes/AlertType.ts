export type ActionType = 'display' | 'email';
/** Vendor/Library Actions */

export type BackendSoulsActionType =
  | 'backendsouls:sms'
  | 'backendsouls:email'
  | 'backendsouls:display'
  | 'backendsouls:webhook';

export function isBackendsoulsActionType(
  action: ActionType | BackendSoulsActionType
): action is BackendSoulsActionType {
  return action.startsWith('backendsouls:');
}

export function isActionType(
  action: ActionType | BackendSoulsActionType
): action is ActionType {
  return action === 'display' || action === 'email';
}

export class ActionTypeError extends Error {
  constructor(action: ActionType | BackendSoulsActionType) {
    super(`Invalid action type: ${action} for type ${typeof action}`);
  }
}
