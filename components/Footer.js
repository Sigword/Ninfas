import styles from "../styles/footer.module.css";
import Image from "next/image";
import ninfasMap from "../public/ninfas_map.png";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerHolder}>
        <div className={styles.footerContact}>
          <h2>Mama Ninfa&apos;s Missouri City</h2>
          <p>
            5730 Hwy 6<br />
            Missouri City, TX 77459
            <br />
            Tel: 281-499-5070
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          id="contact-us"
          className={styles.footerMap}
        >
          <a
            href="https://www.google.com/maps/place/Ninfa's/@29.5702389,-95.5714415,17z/data=!3m1!4b1!4m5!3m4!1s0x8640e5fa5bce4469:0x5ef929721c8db434!8m2!3d29.5702407!4d-95.5692502"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={ninfasMap}
              alt="mama ninfas map location"
              width={600}
              height={350}
            />
          </a>
        </motion.div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Mama Ninfa&apos;s. All rights reserved.</p>
      </div>
    </div>
  );
}
