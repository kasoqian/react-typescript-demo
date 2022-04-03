export interface User {
  id: number;
  name: string;
}

interface ItemProps {
  items: User[];
}

export default function Details({ items }: ItemProps) {
  return (
    <>
      {items.map((item: User) => {
        return <li>{JSON.stringify(item)}</li>;
      })}
    </>
  );
}
