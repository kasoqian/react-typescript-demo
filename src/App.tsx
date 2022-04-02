import React, { useState } from "react";
import "./App.css";
import { AppProps, User } from "./interface";

// 可以直接设置默认参数，并定义它的类型
function App({ headerText, extraText = "默认参数，extraText" }: AppProps) {
  // 定义给到usstate，可选User和null类型
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () =>
    setUser({
      name: "kasoqian",
      age: 20,
      address: {
        street: "桐庐街道",
        city: "上海",
      },
      admin: false,
    });

  return (
    <div className="App">
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
      <button onClick={fetchUser}>fetch data</button>
      {user && <p>{user.name}</p>}
      {user && <p>{user.age}</p>}
    </div>
  );
}

export default App;
