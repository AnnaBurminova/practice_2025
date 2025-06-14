import styles from "./Footer.module.scss";

const footerData = [
  {
    title: "О компании",
    content: [
      "Мы — ведущий бренд кроссовок, сочетающий стиль, комфорт и технологичность. Наша цель — вдохновлять движение.",
    ],
  },
  {
    title: "Приложение",
    content: [
      <a href="https://play.google.com/store/apps/details?id=com.sneakershop.app" target="_blank" rel="noreferrer" key="app">
        Скачать приложение
      </a>,
    ],
  },
  {
    title: "Контакты",
    content: [
      "Email: support@sneakershop.com",
      "Телефон: +7 (999) 123-45-67",
      "Адрес: г. Барнаул, ул. Ленина, 46",
    ],
  },
];

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      {footerData.map(({ title, content }) => (
        <div className={styles.section} key={title}>
          <h3>{title}</h3>
          {content.map((item, index) =>
            typeof item === "string" ? <p key={index}>{item}</p> : item
          )}
        </div>
      ))}
    </div>
    <div className={styles.bottom}>
      © {new Date().getFullYear()} SneakerShop. Все права защищены.
    </div>
  </footer>
);
