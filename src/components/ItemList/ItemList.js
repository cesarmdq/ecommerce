import Item from "../Item/Item";

export default function ItemList({ games }) {
  return (
    <>
      {games.map((game, index) => (
        <Item game={game} index={index} />
      ))}
    </>
  );
}
