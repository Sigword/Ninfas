import { useEffect, useRef } from "react";
import styles from "../styles/hours.module.css";
import Button from "./Button";

export default function Hours() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    const initGSAP = async () => {
      const { gsap, ScrollTrigger } = await import("../lib/gsap");
      ctx = gsap.context(() => {
        const cards = sectionRef.current?.querySelectorAll(
          `.${styles.hoursInfo}`
        );
        if (cards) {
          cards.forEach((card, i) => {
            const fromLeft = i % 2 === 0;
            gsap.from(card, {
              x: fromLeft ? -60 : 60,
              opacity: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
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
    <div className={styles.mainHours} ref={sectionRef}>
      <div className={styles.hoursHead}>
        <hr />
        <h2>Hours</h2>
      </div>
      <div className={styles.hoursMid}>
        <div className={styles.hoursInfo}>
          <h2>Sun-Thu</h2>
          <p>11:00AM - 9:00PM</p>
        </div>
        <div className={styles.hoursInfo}>
          <h2>Fri-Sat</h2>
          <p>11:00AM - 10:00PM</p>
        </div>
      </div>

      <Button
        href={"https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3"}
      >
        Order Now
      </Button>
    </div>
  );
}
