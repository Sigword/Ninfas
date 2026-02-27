import { useEffect, useRef } from "react";
import Head from "next/head";
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
import meta from "../content/meta.json";

import styles from "../styles/menu.module.css";

export default function Menu() {
  const menuRef = useRef(null);

  useEffect(() => {
    let ctx;
    const initGSAP = async () => {
      const { gsap, ScrollTrigger } = await import("../lib/gsap");
      ctx = gsap.context(() => {
        const containers = menuRef.current?.querySelectorAll(
          `.${styles.itemContainer}`
        );
        if (containers) {
          containers.forEach((container, i) => {
            gsap.from(container, {
              y: 40,
              opacity: 0,
              duration: 0.6,
              delay: i * 0.05,
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
          });
        }
      }, menuRef);
    };
    initGSAP();
    return () => ctx?.revert();
  }, []);

  return (
    <div className={styles.menu} ref={menuRef}>
      <Head>
        <title>Menu | {meta.title}</title>
      </Head>

      <h1 className={styles.heading}>Menu</h1>

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
}
