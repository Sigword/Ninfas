import { useEffect, useRef } from "react";
import styles from "../styles/about.module.css";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    const initGSAP = async () => {
      const { gsap, ScrollTrigger } = await import("../lib/gsap");
      ctx = gsap.context(() => {
        const texts = sectionRef.current?.querySelectorAll(
          `.${styles.aboutText}`
        );
        if (texts) {
          texts.forEach((text) => {
            gsap.from(text, {
              y: 60,
              opacity: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: text,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
          });
        }
      }, sectionRef);
    };
    initGSAP();
    return () => ctx?.revert();
  }, []);

  return (
    <div id="about-us" className={styles.aboutMain} ref={sectionRef}>
      <div className={styles.aboutText}>
        <p>
          Every Day we continue a{" "}
          <span className={styles.aboutHighlight}>wonderful tradition</span> by
          serving you and your family with the{" "}
          <span className={styles.aboutHighlight}>
            same affection and quality
          </span>{" "}
          that our founder,{" "}
          <span className={styles.aboutHighlight}>
            Maria Ninfa Rodriquez Laurenzo,
          </span>{" "}
          established in 1973.
        </p>
      </div>
      <div className={styles.aboutLine}>
        <span className={styles.diamondLine}></span>
        <span className={styles.diamond}></span>
        <span className={styles.diamondLine}></span>
      </div>
      <div className={styles.aboutText}>
        <p>
          Known to everyone as &ldquo;Mama&rdquo;,{" "}
          <span className={styles.aboutHighlight}>
            her legacy began in a small 10-table restaurant on Navigation.
          </span>{" "}
          Using her own pots and pans,{" "}
          <span className={styles.aboutHighlight}>
            she created this world-renowned tradition
          </span>{" "}
          of serving great food and delicious Margaritas.
        </p>
      </div>
    </div>
  );
}
