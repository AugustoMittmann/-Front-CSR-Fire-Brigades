'use client'

import styles from "./label.module.css";

export default function Label({text}) {
  return (
    <text
      className={styles.label}
    >
      {text}
    </text>
  );
}
