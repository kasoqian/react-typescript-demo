/**
 * context 与 reducer 的类型
 * @author kasoqian
 * @date 2022-04-03
 */
import React, { createContext, useReducer } from "react";

// 类型推断，通过 typeof 推断出类型在赋值给 AppState
type AppState = typeof initialState;

// 复合类型，类型的默认值
type Action =
  | { type: "set_input_value"; payload: number }
  | { type: "set_input_value_to_100" };

// 子组件类型为 React.ReactNode
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
    // 如果 case 里的值不符合类型定义，则会报错
    case "set_input_value_to_100":
      return {
        ...state,
        inputValue: 100,
      };
    default:
      return state;
  }
};

/**
 * createContext 的定义
 * 先定义了数据结构类型 {  state: AppState; dispatch: React.Dispatch<Action>;}
 * 再定义初始值 { state: initialState, dispatch: () => {} }
 */
export const InputValueContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

/**
 * children 的类型
 * @param  { children } : InputValueProviderProps
 */
function InputValueProvider({ children }: InputValueProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputValueContext.Provider value={{ state, dispatch }}>
      {children}
    </InputValueContext.Provider>
  );
}

export default InputValueProvider;
