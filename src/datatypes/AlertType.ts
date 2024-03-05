export type ActionType = 'display' | 'email';

/** Vendor/Library Actions */
export type BSoulsActionType =
  | 'backendsouls:sms'
  | 'backendsouls:email'
  | 'backendsouls:display'
  | 'backendsouls:webhook';

export function isBackendsoulsActionType(
  action: ActionType | BSoulsActionType
): action is BSoulsActionType {
  return action.startsWith('backendsouls:');
}

export function isActionType(
  action: ActionType | BSoulsActionType
): action is ActionType {
  return action === 'display' || action === 'email';
}

export class ActionTypeError extends Error {
  constructor(action: ActionType | BSoulsActionType) {
    super(`Invalid action type: ${action} for type ${typeof action}`);
  }
}
