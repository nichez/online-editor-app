import produce from "immer";

import { ActionType } from "../actionsTypes";
import { Action } from "../actions";

interface BundlesState {
  data: {
    loading: boolean;
    code: string;
    error: string;
  };
}

const initialState: BundlesState = {
  data: {
    loading: false,
    code: "",
    error: "",
  },
};

const reducer = produce(
  (state: BundlesState = initialState, action: Action): BundlesState => {
    switch (action.type) {
      case ActionType.BUNDLE_START:
        state.data = {
          loading: true,
          code: "",
          error: "",
        };

        return state;
      case ActionType.BUNDLE_COMPLETE:
        state.data = {
          loading: false,
          code: action.bundle.code,
          error: action.bundle.error,
        };

        return state;
      default:
        return state;
    }
  },
  initialState
);

export default reducer;
