import styles from "./button.module.css";
import Image from "next/image";

export const ButtonStyle = {
  emphasized: styles.emphasized,
  standard: styles.standard
}

export default function Button({placeholder = "", style = ButtonStyle.emphasized, disabled = false, firstImage = null, secondImage = null, onPress = () => {}, type = "button"}) {
  const getStyle = () => {
    let activeStyle = `${styles.button} ${style}`;
    if (disabled) {
      return `${activeStyle} ${style === ButtonStyle.emphasized ? styles.disabledEmphasized : styles.disabledStandard}`;
    }
    return `${activeStyle}`;
  }

  return (
    <button
      className={getStyle()}
      disabled={disabled}
      onClick={(event) => onPress(event)}
      type={type}
    >
      {firstImage &&
        <Image
          src={firstImage.value}
          alt={firstImage.alt}
          height={20}
          width={20}
        />
      }
      <span className={styles.spaceBetween}>{placeholder}</span>
      {secondImage &&
        <Image
          src={secondImage.value}
          alt={secondImage.alt}
          height={20}
          width={20}
        />
      }
    </button>
  );
}
