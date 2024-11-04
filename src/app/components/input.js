'use client'

import { useState } from "react";
import styles from "./input.module.css";
import Label from "./label";

export default function Input({placeholder, label, disabled = false}) {
  const [hasError, setHasError] = useState(false);

  const getStyle = () => {
    if (disabled) {
      return styles.disabled;
    }
    if (hasError) {
      return styles.error;
    }
    return styles.input;
  }
  const validateInput = () => {
    console.log("should do something here")
    setHasError(!hasError);
  }

  return (
    <>
      {label && <Label text={label}/>}
      {label && <br/>}
      <input
        className={getStyle()}
        placeholder={placeholder}
        disabled={disabled}
        onChange={() => validateInput(!hasError)}
      />
      <br />
      {hasError &&
        <text
          className={styles.errormessage}
        >
            Mensagem de erro
        </text>
      }
    </>
  );
}
