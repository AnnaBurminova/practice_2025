import { ItemCard } from "../../components/itemCard/ItemCard";
import { ItemList } from "../../components/itemList/ItemList";

import sneaker1 from "./images/sneaker1.jpg";
import sneaker2 from "./images/sneaker2.jpg";
import sneaker3 from "./images/sneaker3.jpg";
import sneaker4 from "./images/sneaker4.jpg";
import sneaker5 from "./images/sneaker5.jpg";
import sneaker6 from "./images/sneaker6.jpg";
import sneaker7 from "./images/sneaker7.jpg";
import sneaker8 from "./images/sneaker8.jpg";
import laces from "./images/laces.jpg";

const newItemsData = [
  {
    id: 1,
    title: "NIKE AIR MAX",
    description: "Легендарная амортизация Air",
    cost: 12999,
    img: sneaker1,
  },
  {
    id: 2,
    title: "ADIDAS ULTRA BOOST",
    description: "Технология Boost для максимальной энергии",
    cost: 9999,
    img: sneaker2,
  },
  {
    id: 3,
    title: "NEW BALANCE 574",
    description: "Классический силуэт, комфорт на весь день",
    cost: 8900,
    img: sneaker3,
  },
  {
    id: 4,
    title: "PUMA RS-X",
    description: "Смелый дизайн и современные технологии",
    cost: 9900,
    img: sneaker4,
  },
  {
    id: 5,
    title: "JORDAN 1 RETRO",
    description: "Культовая баскетбольная модель",
    cost: 15900,
    img: sneaker5,
  },
  {
    id: 6,
    title: "VANS OLD SKOOL",
    description: "Легендарные скейтерские кроссовки",
    cost: 6900,
    img: sneaker6,
  },
  {
    id: 7,
    title: "VANS OLD SKOOL",
    description: "Легендарные скейтерские кроссовки",
    cost: 6900,
    img: sneaker7,
  },
  {
    id: 8,
    title: "VANS OLD SKOOL",
    description: "Легендарные скейтерские кроссовки",
    cost: 6900,
    img: sneaker8,
  },
];

const accessoriesItemsData = [
  {
    id: 9,
    title: "ШНУРКИ СВЕТЯЩИЕСЯ",
    cost: 1200,
    img: laces,
    description: "",
  },
];

export const NewItems = () => {
  return (
    <section>
      <ItemList title="НОВИНКИ СЕЗОНА">
        {newItemsData.map(({ id, title, description, cost, img }) => (
          <ItemCard
            key={id}
            title={title}
            description={description}
            cost={cost}
            img={img}
          />
        ))}
      </ItemList>

      <ItemList title="АКСЕССУАРЫ И УХОД">
        {accessoriesItemsData.map(({ id, title, description = "", cost, img }) => (
          <ItemCard
            key={id}
            title={title}
            description={description}
            cost={cost}
            img={img}
          />
        ))}
      </ItemList>
    </section>
  );
};
