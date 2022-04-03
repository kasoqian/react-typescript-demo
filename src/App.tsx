/**
 * 学习React-Typescript的结合使用
 * @author: kasoqian
 * @date 2022-04-03
 */
import React, { useContext, useState } from "react";
import { InputValueContext } from "./context/input";
import Details from "./components/details/index";
import ComplexDetails from "./components/complexDetails";
import "./App.css";

// 类型接口文件模块化
import { AppProps, User, FormData, CheckTable, User2 } from "./interface";
// 类型接口文件内嵌在组件中
import { User as UserDetail } from "./components/details";

const defaultFormData: FormData = {
  title: "",
  body: "",
};

/**
 * props传参类型-格式，默认值
 * @param { headerText, extraText = "默认参数，extraText" } obj
 * @type  AppProps :
 * @returns {JSX.Element}
 */
function App({ headerText, extraText = "默认参数，extraText" }: AppProps) {
  // 可选 User 和 null 类型
  const [user, setUser] = useState<User | null>(null);
  // FormData 类型
  const [formeData, setFormeData] = useState<FormData>(defaultFormData);
  // CheckTable 类型
  const [checkTable, setcheckTable] = useState<CheckTable>("Details");

  const { title, body } = formeData;
  const { state, dispatch } = useContext(InputValueContext);

  /**
   * 当 input 改变时，重新set formData值
   * @param e
   * @type  React.ChangeEvent<HTMLInputElement>
   *        此处的"React.ChangeEvent<HTMLInputElement>"来自于类型推断，鼠标放在e上就会显示
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormeData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  /**
   * 点击提交时，显示当前的fordata
   * @param e
   * @type React.FormEvent<HTMLFormElement>
   *       此处的"React.FormEvent<HTMLFormElement>"来自于类型推断，鼠标放在e上就会显示
   */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(formeData);
    setFormeData(defaultFormData);
  };

  /**
   * 一个复杂的数据结构
   * 数据类型拆分为 User 和 Address
   */
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

  const users2: User2[] = [
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
      {/* 调用 reducer 中的方法 */}
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
      <ComplexDetails></ComplexDetails>
    </div>
  );
}

export default App;
