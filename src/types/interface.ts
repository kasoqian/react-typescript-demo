/**
 * 01 可选参数
 * 使用前要用if判断一下是否存在
 *
 * eg
 * if(name){}
 */
interface PersonType {
  name?: string;
}

/**
 * 02 读写权限
 * readonly 只读，不能修改
 *
 * 变量用 const
 * 属性用 readonly
 */

interface PersonType2 {
  name: string;
  readonly class: "五年级一班";
}

/**
 * 03 索引签名
 * 接收若干个除规定外的灵活传参
 */

interface PersonType3 {
  name?: string;
  age?: number;
  [propName: string]: any;
}

function getPerson({ name, age }: PersonType3) {}
getPerson({ goodName: "admin" });

/**
 * 04 函数类型
 * 定义传参类型与返回值类型
 */
interface PersonType4 {
  (name: string, age: number): boolean;
}

const isOurClassmates: PersonType4 = (name, age) => true;

/**
 * 提高可读性可以这样写
 */
let isOurFriend: PersonType4;
isOurFriend = (name, age) => true;

/**
 * 05 类类型
 * 约束类的设计
 * TODO
 */

interface PersonInstanceType {
  name: string;
  getName(name: string): string;
}

interface PersonType5 {
  name: string;
  getName(name: string): string;
}

class Person implements PersonType5 {
  name = "kasoqian";
  constructor(h: number, m: number) {}
  public getName(name: string) {
    return "1";
  }
}

/**
 * 06 继承接口
 * 用于给现有接口附加上属性
 */

interface PersonDataObject {
  name: string;
  age: number;
}

/**
 * PersonDataType共3个属性 {name, age, score}
 */
interface PersonDataType extends PersonDataObject {
  score: number;
}

/**
 * 07 混合类型
 * 用在对象上，一个对象具有较为复杂的类型
 */
interface PersonType7 {
  name: string;
  getName: () => void;
}

const kasoqian: PersonType7 = {
  name: "kaso",
  getName: () => "hello kasoqian",
};

/**
 * 08 接口与类
 */

interface PersonDataBase {
  name: string;
  age: number;
}

interface PersonType extends PersonDataBase {
  getName(): void;
  getAge(): void;
}

class Person2 implements PersonType {
  name: string = "kasoqian";
  age: number = 12;
  getName(): void {}
  getAge(): void {}
}

export {};
