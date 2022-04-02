import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppProps {
  headerText: string;
  // 可选操作符，意思为该参数可选传
  extraText?: string;
}
// 可以直接设置默认参数，并定义他的类型
function App({ headerText, extraText = "默认参数，extraText" }: AppProps) {
  return (
    <div className="App">
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
    </div>
  );
}

export default App;
