import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";

import { appSaga } from "./saga";
import { name, reducer, actions } from "./slice";

export const useAppSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: appSaga });

  return { actions };
};
