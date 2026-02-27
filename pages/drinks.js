import { useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/menu.module.css";
import meta from "../content/meta.json";

import Drinks from "../MenuComponents/Drinks";

export default function DrinksPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx;
    const initGSAP = async () => {
      const { gsap, ScrollTrigger } = await import("../lib/gsap");
      ctx = gsap.context(() => {
        const containers = pageRef.current?.querySelectorAll(
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
      }, pageRef);
    };
    initGSAP();
    return () => ctx?.revert();
  }, []);

  return (
    <div className={styles.menu} ref={pageRef}>
      <Head>
        <title>Drinks | {meta.title}</title>
      </Head>
      <h1 className={styles.heading}>Drinks</h1>
      <Drinks />
    </div>
  );
}
