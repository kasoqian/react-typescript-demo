/**
 * 讲述复合类型的使用案例
 * @date 2022-04-03
 * @author kasoqian
 */

// 注意 type 可以省略，但建议添加
interface User {
  type: "user";
  id: number;
  name: string;
  age: number;
}

interface Good {
  type: "good";
  orderId: number;
  goodsName: string;
  description: string;
}

/**
 * 复合数据类型
 * User 或 Good 组成的复合数据类型
 * 如某数据具有 User 类型，可以使用 User 的提示，但若调用 Good 的属性，则会报错
 */
type Item = User | Good;

export default function App() {
  /**
   * 具有复合类型的数据
   * @date items
   * @type Item[]
   * @returns {any}
   */
  const items: Item[] = [
    {
      type: "user",
      id: 1,
      name: "kasoqian",
      age: 24,
    },
    {
      type: "good",
      orderId: 2,
      goodsName: "卡通车",
      description: "一个好车",
    },
  ];

  return (
    <div style={{ width: "30%" }}>
      {items.map((item: Item) => {
        //  === 后会自动提示 user , good
        if (item.type === "user") {
          return (
            <ul>
              这是来自User
              {/* 鼠标放上去会发现这是User类型 */}
              <li> id: {item.id}</li>
              <li>name: {item.name}</li>
              <li>age: {item.age}</li>
            </ul>
          );
        }
        return (
          <ul>
            这是来自Goods
            {/* 鼠标放上去会发现这是Good类型 */}
            <li>orderId: {item.orderId}</li>
            <li>goodName: {item.goodsName}</li>
            <li>description:{item.description}</li>
          </ul>
        );
      })}
    </div>
  );
}
