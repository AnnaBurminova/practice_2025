import { ItemCard } from "../../components/itemCard/ItemCard";
import { ItemList } from "../../components/itemList/ItemList";

import sneaker1 from "./images/sneaker1.jpg";
import sneaker2 from "./images/sneaker2.jpg";
import sneaker3 from "./images/sneaker3.jpg";
import sneaker4 from "./images/sneaker4.jpg";
import sneaker5 from "./images/sneaker5.jpg";
import sneaker6 from "./images/sneaker6.jpg";
import cleanSpray from "./images/cleanSpray.jpg";

const popularItemsData = [
  {
    id: 1,
    title: "Модель Air Max 97",
    description: "Беговые кроссовки с технологией амортизации Air",
    cost: 415,
    img: sneaker1,
  },
  {
    id: 2,
    title: "Модель Yeezy Boost 350",
    description: "Ультралегкие кроссовки с верхом из Primeknit",
    cost: 389,
    img: sneaker2,
  },
  {
    id: 3,
    title: "JORDAN 1 RETRO",
    description: "Классика баскетбола, кожа премиум качества, оригинальная цветовая гамма",
    cost: 349,
    img: sneaker3,
  },
  {
    id: 4,
    title: "ULTRABOOST 22",
    description: "Беговые кроссовки, энергоотдача Boost, адаптивная поддержка стопы",
    cost: 59,
    img: sneaker4,
  },
  {
    id: 5,
    title: "CHUCK TAYLOR 70",
    description: "Винтажный дизайн, усиленная подошва, хлопковый канвас",
    cost: 35,
    img: sneaker5,
  },
  {
    id: 6,
    title: "OLD SKOOL PRO",
    description: "Скейтбординг, усиленные зоны, подошва Vulcanized",
    cost: 45,
    img: sneaker6,
  },
];

const accessoriesItemsData = [
  {
    id: 7,
    title: "ЗАЩИТНЫЙ СПРЕЙ",
    description: "Защита от воды и грязи, для всех типов материалов",
    cost: 15,
    img: cleanSpray,
  },
];

export const PopularItems = () => {
  return (
    <section>
      <ItemList title="ЭТО ВЫБИРАЮТ ЧАЩЕ ВСЕГО">
        {popularItemsData.map(({ id, title, description, cost, img }) => (
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
        {accessoriesItemsData.map(({ id, title, description, cost, img }) => (
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
