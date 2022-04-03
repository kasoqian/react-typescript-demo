/**
 * 类型的继承与泛型
 * @author kasoqian
 * @date 2022-04-03
 */

// 导出，模块化的类型
export interface User {
  id: number;
  name: string;
}

interface Item {
  id: number;
}

/**
 * 高阶
 * 泛型可以理解为”动态类型“，他是基于传入的值进行推断
 * 同时接收到的类型也可以继续进行传递
 *
 * 此接口接收一个 T ，并传给 items
 */

interface ItemProps<T> {
  items: T[];
}

/**
 * 此处将 T 更名为了 PorItem ，更符合实际场景
 *
 * 泛型 T extends Item 意为 T 是继承与 Item类型，必须具有 Item 上的 id 属性
 * ItemProps<T> 意为 将 T 传入到 ItemProps<T> 的类型中得到一个新类型
 */
export default function Details<PorItem extends Item>({
  items,
}: ItemProps<PorItem>) {
  return (
    <>
      {/* PorItem 即从 props 传入的类型 */}
      {items.map((item: PorItem) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>;
      })}
    </>
  );
}
