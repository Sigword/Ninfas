import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Pagination, Autoplay, EffectFade } from "swiper";

import Image from "next/image";
import drinks from "../public/drinks.jpg";
import ninfa from "../public/ninfa.jpg";
import seats from "../public/seats.jpg";

import styles from "../styles/heroslide.module.css";
import Button from "./Button";

export default function HeroSlide() {
  const rootRef = useRef(null);
  const h1Ref = useRef(null);
  const subtitleRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx;
    const initGSAP = async () => {
      const { gsap, ScrollTrigger } = await import("../lib/gsap");
      ctx = gsap.context(() => {
        // Split-word h1 animation
        if (h1Ref.current) {
          const words = h1Ref.current.querySelectorAll(`.${styles.heroWord}`);
          gsap.from(words, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.3,
          });
        }

        // Subtitle fade in
        if (subtitleRef.current) {
          gsap.from(subtitleRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 1,
          });
        }

        // Parallax on scroll
        if (bgRef.current) {
          gsap.to(bgRef.current, {
            y: "30%",
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }, rootRef);
    };
    initGSAP();
    return () => ctx?.revert();
  }, []);

  const headingText = "Welcome to Mama Ninfa's Missouri City";
  const words = headingText.split(" ");

  return (
    <section className={styles.root} ref={rootRef}>
      <div className={styles.container}>
        <h1 ref={h1Ref}>
          {words.map((word, i) => (
            <span key={i} className={styles.heroWord}>
              {word}
            </span>
          ))}
        </h1>
        <p className={styles.subtitle} ref={subtitleRef}>
          Authentic Mexican Cuisine Since 1973
        </p>
        <Button
          href={"https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3"}
        >
          Order Now
        </Button>
      </div>
      <div className={styles.backgroundContainer} ref={bgRef}>
        <div className={styles.background}>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: false }}
            modules={[Autoplay, EffectFade]}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <Image src={drinks} alt="Drinks at Ninfa" layout="fill" />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={ninfa}
                alt="Ninfa Logo in the Restaurant"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={seats} alt="Seating at Ninfa" layout="fill" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
