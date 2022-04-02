import React, { createContext, useReducer } from "react";

type AppState = typeof initialState;
type Action =
  | { type: "set_input_value"; payload: number }
  | { type: "set_input_value_to_100" };

interface InputValueProviderProps {
  children: React.ReactNode;
}

const initialState = {
  inputValue: 0,
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "set_input_value":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "set_input_value_to_100":
      return {
        ...state,
        inputValue: 100,
      };
    default:
      return state;
  }
};

export const InputValueContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function InputValueProvider({ children }: InputValueProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputValueContext.Provider value={{ state, dispatch }}>
      {children}
    </InputValueContext.Provider>
  );
}

export default InputValueProvider;
