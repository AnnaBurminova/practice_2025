import { Performance } from "../../components/performance/Performance";
import { ItemList } from "../../components/itemList/ItemList";
import { ItemCard } from "../../components/itemCard/ItemCard";

import performanceSneaker from "./images/performanceSneaker.png";
import sneaker1 from "./images/sneaker1.jpg";
import sneaker2 from "./images/sneaker2.jpg";
import sneaker3 from "./images/sneaker3.jpg";
import sneaker4 from "./images/sneaker4.jpg";
import sneaker5 from "./images/sneaker5.jpg";
import laces from "./images/laces.jpg";
import cleanSpray from "./images/cleanSpray.jpg";

const catalogItemsData = [
  {
    id: 1,
    title: "Air Max Premium",
    description: "Стильные кроссовки с технологией амортизации Air",
    cost: 11500,
    img: sneaker1,
  },
  {
    id: 2,
    title: "Run Flex Pro",
    description: "Легкие беговые кроссовки с гибкой подошвой",
    cost: 5500,
    img: sneaker2,
  },
  {
    id: 3,
    title: "Street Style Black",
    description: "Уличные кроссовки в черном цвете с деталями из кожи",
    cost: 2900,
    img: sneaker3,
  },
  {
    id: 4,
    title: "Classic White",
    description: "Классические белые кроссовки для повседневной носки",
    cost: 12900,
    img: sneaker4,
  },
  {
    id: 5,
    title: "Trail Explorer",
    description: "Кроссовки для треккинга с усиленной подошвой",
    cost: 12900,
    img: sneaker5,
  },
];

const accessoriesItemsData = [
  {
    id: 6,
    title: "ШНУРКИ СВЕТЯЩИЕСЯ",
    cost: 1200,
    img: laces,
    description: "",
  },
  {
    id: 7,
    title: "ЗАЩИТНЫЙ СПРЕЙ",
    description: "Защита от воды и грязи, для всех типов материалов",
    cost: 15,
    img: cleanSpray,
  },
];

export const CatalogItems = () => {
  return (
    <section>
      <Performance title="НАСЛАДИТЕСЬ НАШИМИ КРОССОВКАМИ" img={performanceSneaker} />

      <ItemList title="НАШИ ТОВАРЫ">
        {catalogItemsData.map(({ id, title, description, cost, img }) => (
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
