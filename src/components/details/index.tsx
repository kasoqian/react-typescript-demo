export interface User {
  id: number;
  name: string;
}

interface ItemProps<T> {
  items: T[];
}

export default function Details<T>({ items }: ItemProps<T>) {
  return (
    <>
      {items.map((item: T) => {
        return <li>{JSON.stringify(item)}</li>;
      })}
    </>
  );
}
