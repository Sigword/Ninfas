import Antonjitos from "../MenuComponents/Antonjitos";
import Burritos from "../MenuComponents/Burritos";
import DeLaParilla from "../MenuComponents/DeLaParilla";
import Desserts from "../MenuComponents/Desserts";
import Enchilada from "../MenuComponents/Enchilada";
import Especialidades from "../MenuComponents/Especialidades";
import MamaPlatters from "../MenuComponents/MamaPlatters";
import SoupsSalads from "../MenuComponents/SoupsSalads";
import Tacos from "../MenuComponents/Tacos";
import Seafood from "../MenuComponents/Seafood";
import PlatosMexicanos from "../MenuComponents/PlatosMexicanos";
import NinfasOriginals from "../MenuComponents/NinfasOriginals";

import styles from "../styles/menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuHeading}>
        <h1>Menu</h1>
      </div>

      <Antonjitos />
      <SoupsSalads />
      <Tacos />
      <MamaPlatters />
      <Especialidades />
      <NinfasOriginals />
      <Seafood />
      <DeLaParilla />
      <PlatosMexicanos />
      <Enchilada />
      <Burritos />
      <Desserts />
    </div>
  );
};

export default Menu;
