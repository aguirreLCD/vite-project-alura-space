/* eslint-disable react/prop-types */
import "./Cards.css";
import Card from "../Card";

export default function Cards({ itens }) {
  console.log(itens);
  return (
    <ul className="cards">
      {itens.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </ul>
  );
}
