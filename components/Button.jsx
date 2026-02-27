import styles from "../styles/button.module.css";
import { motion } from "framer-motion";

export default function Button({ children, href }) {
  return (
    <motion.div
      className={styles.orderCon}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className={styles.order}>
        <a
          className={styles.orderBtn}
          href={href}
          target={"_blank"}
          rel="noreferrer"
        >
          {children}
        </a>
      </div>
    </motion.div>
  );
}
