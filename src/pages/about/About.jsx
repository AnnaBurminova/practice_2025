import styles from "./About.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MAP_CENTER = [53.34510446349056, 83.78227755137306];
const MAP_ZOOM = 16;

export const About = () => (
  <section className={styles.about}>
    <p className={styles.aboutDescription}>
      Мы предлагаем только качественные кроссовки от ведущих мировых брендов, 
      заботясь о комфорте и стиле наших клиентов. Наша команда тщательно отбирает 
      каждый товар, чтобы вы могли наслаждаться удобством и долговечностью. 
      Магазины сети представлены во всех крупных городах страны, чтобы вы всегда 
      могли легко найти нас и получить профессиональную консультацию. Мы ценим 
      мнение каждого покупателя — ваши отзывы и предложения помогают нам становиться 
      лучше и радовать вас новинками и эксклюзивными коллекциями. Обратите внимание, 
      что для связи с нами и уточнения деталей вы можете использовать контакты, 
      указанные внизу страницы.
    </p>

    <h3 className={styles.mapTitle}>Наши магазины на карте</h3>

    <div className={styles.mapWrapper}>
      <YMaps>
        <Map className={styles.map} defaultState={{ center: MAP_CENTER, zoom: MAP_ZOOM }}>
          <Placemark geometry={MAP_CENTER} />
        </Map>
      </YMaps>
    </div>
  </section>
);
