/**
 * 基础类型
 * @author kasoqian
 * @date 2022-04-22
 */

/**
 * 简单的数据类型
 */
let isDone: boolean;
let myName: string;
let myScore: number;
let list: number[];
let listOther: Array<number>;
let dataSource: any;
let myWallet: void;
let myMoney: null;
let myGrilFriend: undefined;
type person = {
  name: string;
  age: number;
};

/**
 * string 高阶
 */
let myNameFormat: `${number}大帅哥！`;

/**
 * 元祖
 * array 高阶
 */
let position: [string, number];

/**
 * 枚举
 * color 高阶
 * 可映射用，使用枚举类型可以为一组数值赋予友好的名字
 * 也可枚举用
 */
enum ColorType {
  red = "red",
  green = "green",
  blue = "blur",
}

enum ColorEasyType {
  red,
  green,
  blue,
}

/**
 * 类型断言
 * 2种方式
 * 临时将值的类型进行修改
 */
const museNumber: number = "string" as any;
const mustNumber: number = <any>"string";

const Color: ColorType = ColorType.red; // 映射用 "red"
const Color2: string = ColorEasyType[2]; // 枚举用'blue'

/**
 * never
 * 用不存在的类型
 * 如错误, websoket，无限循环
 */
function error(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {}
}

export {};
