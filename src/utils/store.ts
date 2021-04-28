import { createContext } from "react";

interface StateType {
  cursteps: string[];
}

interface ActionType {
  type: string;
  payload?: any;
}

export const initialState: StateType = { cursteps: [] };

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "setSteps":
      return { ...state, cursteps: action.payload };
    case "resetSteps":
      return { ...state, cursteps: [] };
    default:
      return state;
  }
};

export const GlobalContext = createContext(null);
