/**
 * 泛型
 * @author kasoqian
 * @date 2022-04-22
 */

/* 场景1: 前后参数类型未知时 */
function identity(arg: any): any {
  return arg;
}

/* 注意泛型“定义”的位置 */
function identity2<T>(arg: T): T {
  const arg2: T = arg;
  return arg2;
}

identity2({ a: "10" });

/*
 * 场景2: 泛型约束
 * 泛型约束相当于给不确定加上确定性
 */
interface APIResult {
  data: any;
  msg: string;
  code: number;
}

function fetchUserData<T extends APIResult>(data: T): T {
  console.log(data.msg);
  return data;
}

/* 场景3: 多个泛型 */
function fetchUserData2<T, K>(userId: T, token: K) {
  let userIds: T[];
  let tokens: K[];
}

export {};
