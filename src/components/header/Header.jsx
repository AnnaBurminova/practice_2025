import styles from "./Header.module.scss";
import burgerLogo from "./images/burgerLogo.svg";
import companyLogo from "./images/companyLogo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { path: "/", label: "Главная" },
  { path: "/about", label: "О нас" },
  { path: "/new-items", label: "Новинки" },
  { path: "/popular-items", label: "Популярное" },
  { path: "/catalog-items", label: "Каталог" },
];

const MenuItems = ({ onClick }) =>
  navLinks.map(({ path, label }) => (
    <NavLink
      key={path}
      to={path}
      className={({ isActive }) =>
        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
      }
      onClick={onClick}
    >
      {label}
    </NavLink>
  ));

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={styles.appHeader}>
        <div className={styles.logoWrapper}>
          <img src={companyLogo} alt="Логотип компании" className={styles.logo} />
        </div>
        <nav className={styles.navMenu}>
          <MenuItems />
        </nav>
      </header>

      <button className={styles.burger} onClick={toggleMenu} aria-label="Открыть меню">
        <img src={burgerLogo} alt="Меню" />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.logoWrapper}>
            <img src={companyLogo} alt="Логотип компании" className={styles.logo} />
          </div>
          <MenuItems onClick={closeMenu} />
        </div>
      )}
    </>
  );
};
