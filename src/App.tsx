import React, { useContext, useState } from "react";
import "./App.css";
import { InputValueContext } from "./context/inputValue";
import { AppProps, User } from "./interface";
import { User as UserDetail } from "./components/details/index";
import Details from "./components/details/index";

interface FormData {
  title: string;
  body: string;
}

type CheckTable = "Details" | "Shopping";

const defaultFormData = {
  title: "",
  body: "",
};

// 可以直接设置默认参数，并定义它的类型
function App({ headerText, extraText = "默认参数，extraText" }: AppProps) {
  // 定义给到usstate，可选User和null类型
  const [user, setUser] = useState<User | null>(null);
  // 定义一个formData的对象
  const [formeData, setFormeData] = useState<FormData>(defaultFormData);

  // 从state对象中拿到属性
  const { title, body } = formeData;

  const { state, dispatch } = useContext(InputValueContext);

  const [checkTable, setcheckTable] = useState<CheckTable>("Details");

  // 当input 改变时，重新定义formData的值
  // 此处的"React.ChangeEvent<HTMLInputElement>"来自于类型推断，鼠标放在e上就会显示
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormeData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // 点击提交时，显示当前的fordata
  // 此处的"React.FormEvent<HTMLFormElement>"来自于类型推断，鼠标放在e上就会显示
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(formeData);
    setFormeData(defaultFormData);
  };

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

  const users: UserDetail[] = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ];

  const users2 = [
    { id: 1, name: "one", age: 20 },
    { id: 2, name: "two", age: 20 },
    { id: 3, name: "three", age: 20 },
  ];

  return (
    <div className="App">
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
      <button onClick={fetchUser}>fetch data</button>
      {user && <p>{user.name}</p>}
      {user && <p>{user.age}</p>}
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input id="title" type="text" value={title} onChange={onChange} />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input id="body" type="text" value={body} onChange={onChange} />
        <br />
        <br />
        <button type="submit">上传数据</button>
        <br />
      </form>
      <div>title: {formeData.title}</div>
      <div>body:{formeData.body}</div>
      <p>value:{state.inputValue}</p>
      <button onClick={() => dispatch({ type: "set_input_value_to_100" })}>
        数据+100
      </button>

      {checkTable === "Details" && (
        <>
          <div>this is details page</div>
          <button onClick={() => setcheckTable("Shopping")}>
            go to shopping
          </button>
        </>
      )}

      {checkTable === "Shopping" && (
        <>
          <div>this is shpping page</div>
          <button onClick={() => setcheckTable("Details")}>go to detail</button>
        </>
      )}
      <Details items={users}></Details>
      <Details items={users2}></Details>
    </div>
  );
}

export default App;
