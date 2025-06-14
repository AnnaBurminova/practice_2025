import "./App.scss";
import styles from "./App.scss";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

import { Routes, Route } from "react-router-dom";

import { Main } from "./pages/main/Main";
import { About } from "./pages/about/About";
import { PopularItems } from "./pages/popularItems/PopularItems";
import { NewItems } from "./pages/newItems/NewItems";
import { CatalogItems } from "./pages/catalogItems/CatalogItems";

function App() {
  return (
    <div className="App">
      <Header className={styles.header} />

      <main className={styles["app-layout"]}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/new-items" element={<NewItems />} />
          <Route path="/popular-items" element={<PopularItems />} />
          <Route path="/catalog-items" element={<CatalogItems />} />
        </Routes>
      </main>

      <Footer className={styles.footer} />
    </div>
  );
}

export default App;
