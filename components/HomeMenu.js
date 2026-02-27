import { useEffect, useRef } from "react";
import styles from "../styles/homeMenu.module.css";
import Image from "next/image";
import queso from "../public/queso.png";
import nachos from "../public/nachos.png";
import onetaco from "../public/onetaco.png";
import quesadillas from "../public/quesadillas.png";
import tejascombo from "../public/tejascombo.png";
import guac from "../public/guac.png";
import { motion } from "framer-motion";

export default function HomeMenu() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    let ctx;
    const initGSAP = async () => {
      const { gsap, ScrollTrigger } = await import("../lib/gsap");
      ctx = gsap.context(() => {
        // Heading wipe-in
        if (headingRef.current) {
          gsap.from(headingRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }

        // Staggered card reveals
        const cards = sectionRef.current?.querySelectorAll(
          `.${styles.homeitem}`
        );
        if (cards) {
          gsap.from(cards, {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current?.querySelector(
                `.${styles.container}`
              ),
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }
      }, sectionRef);
    };
    initGSAP();
    return () => ctx?.revert();
  }, []);

  return (
    <div className={styles.homeMenuMain} ref={sectionRef}>
      <div className={styles.headingSection} ref={headingRef}>
        <h2>Our Favorites</h2>
        <div className={styles.goldUnderline}></div>
      </div>
      <div className={styles.container}>
        {/* Chile Con Queso Menu Item */}
        <motion.a
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          href="https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3/add/6b05ddc8-7098-4e17-8ea7-07de3e02e041/08f49a09-6807-496a-9b11-85dce05d5169"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={styles.homeitem}>
            <div className={styles.homeMenuImage}>
              <Image src={queso} alt="Chile Con Queso" width={378.67} height={253.38} />
            </div>
            <div className={styles.homeMenuDesc}>
              <p>Chile Con Queso</p>
            </div>
          </div>
        </motion.a>

        {/* Quesadillas Menu Item */}
        <motion.a
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          href="https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3/add/e422af17-62de-41d5-afde-22d93b1b6a53/08f49a09-6807-496a-9b11-85dce05d5169"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={styles.homeitem}>
            <div className={styles.homeMenuImage}>
              <Image
                src={quesadillas}
                alt="Quesadillas"
                width={378.67}
                height={253.38}
              />
            </div>
            <div className={styles.homeMenuDesc}>
              <p>Quesadillas</p>
            </div>
          </div>
        </motion.a>

        {/* Tejas Combo Menu Item */}
        <motion.a
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          href="https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3/add/7588b839-9b9b-4e7c-93e1-1aef5e5b5172/95f35c7d-5a57-4b3d-bf78-84126d1f0dde"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={styles.homeitem}>
            <div className={styles.homeMenuImage}>
              <Image
                src={tejascombo}
                alt="Tejas Combo"
                width={378.67}
                height={253.38}
              />
            </div>
            <div className={styles.homeMenuDesc}>
              <p>Tejas Combo</p>
            </div>
          </div>
        </motion.a>

        {/* Taco A La Ninfa menu Item */}
        <motion.a
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          href="https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3/add/d8e216d4-f40e-4545-a319-b911b0e23de9/cb0d6add-d4b2-462a-9d0b-244528cce715"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={styles.homeitem}>
            <div className={styles.homeMenuImage}>
              <Image
                src={onetaco}
                alt="Taco A La Ninfa"
                width={378.67}
                height={253.38}
              />
            </div>
            <div className={styles.homeMenuDesc}>
              <p>Taco A La Ninfa</p>
            </div>
          </div>
        </motion.a>

        {/* Guacamole Menu Item */}
        <motion.a
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          href="https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3/add/8ed249b3-ee79-4a08-aa10-150f979472d2/08f49a09-6807-496a-9b11-85dce05d5169"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={styles.homeitem}>
            <div className={styles.homeMenuImage}>
              <Image src={guac} alt="Guacamole" width={378.67} height={253.38} />
            </div>
            <div className={styles.homeMenuDesc}>
              <p>Guacamole</p>
            </div>
          </div>
        </motion.a>

        {/* Nachos Menu Item */}
        <motion.a
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          href="https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3/add/ca1c6ba4-d666-466a-96eb-bd3a7139a56a/08f49a09-6807-496a-9b11-85dce05d5169"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={styles.homeitem}>
            <div className={styles.homeMenuImage}>
              <Image
                src={nachos}
                alt="Nachos"
                width={378.67}
                height={253.38}
              />
            </div>
            <div className={styles.homeMenuDesc}>
              <p>Nachos</p>
            </div>
          </div>
        </motion.a>
      </div>
    </div>
  );
}
