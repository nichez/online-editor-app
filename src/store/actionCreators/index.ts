import { Dispatch } from "redux";

import { ActionType } from "../actionsTypes";
import {
  Action,
  UpdateCellAction,
} from "../actions";
import bundle from "../../bundler";

export const updateCell = (content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    content: content,
  };
};

export const createBundle = (input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BUNDLE_START
    });

    const result = await bundle(input);

    dispatch({
      type: ActionType.BUNDLE_COMPLETE,
      bundle: result,
    });
  };
};
