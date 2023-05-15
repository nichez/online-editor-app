import { ActionType } from "../actionsTypes";

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  content: string;
}

export interface BundleStartAction {
  type: ActionType.BUNDLE_START;
}

export interface BundleCompleteAction {
  type: ActionType.BUNDLE_COMPLETE;
  bundle: {
    code: string;
    error: string;
  };
}

export type Action =
  | UpdateCellAction
  | BundleStartAction
  | BundleCompleteAction;
