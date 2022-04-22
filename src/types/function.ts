/**
 * 函数类型
 * @author kasoqian
 * @date 2022-04-22
 */

/*
 * 推断类型
 * 先声明对应的类型，使用时则不需要再声明类型了
 */
let getName: (name: string) => string;
getName = name => {
  return name;
};

/** 默认参数 & 可选参数 */
let getName2 = (name = "kasoqian", age?: string): string => name;

/* 剩余参数 */
let getName3 = (name: string, ...restOfName: string[]) => restOfName;

/* 重载, 支持多种传参与返回格式*/
function getName4(data: { name: string; age: number }): string;
function getName4(name: number): number;
function getName4(name: any): any {}
console.log(getName4);

export {};
