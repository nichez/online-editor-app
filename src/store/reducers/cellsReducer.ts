import produce from "immer";

import { ActionType } from "../actionsTypes";
import { Action } from "../actions";

interface CellsState {
  loading: boolean;
  error: string | null;
  content: string;
}

const initialState: CellsState = {
  loading: false,
  error: null,
  content: '',
};

const reducer = produce((state: CellsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      const { content } = action;
      state.content = content;

      return state;
    default:
      return state;
  }
}, initialState);

export default reducer;
