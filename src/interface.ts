/**
 * 接口模块化
 * @date 2022-04-03
 * @author kasoqian
 */

export interface AppProps {
  headerText: string;
  // 可选操作符，意思为该参数可选传
  extraText?: string;
}

// 定义一个user的子接口
export interface Address {
  street: string;
  city: string;
}

// 定义usestate的类型接口
export interface User {
  name: string;
  age: number;
  address: Address;
  admin: boolean;
}

export interface FormData {
  title: string;
  body: string;
}

export type CheckTable = "Details" | "Shopping";

export interface User2 {
  id: number;
  name: string;
  age: number;
}
