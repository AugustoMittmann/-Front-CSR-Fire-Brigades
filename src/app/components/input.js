'use client'

import { useRef, useState } from "react";
import styles from "./input.module.css";
import Label from "./label";

export default function Input({label, placeholder, type = "text", disabled = false}) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Valor inválido");
  const inputRef = useRef(null);

  const getStyle = () => {
    if (disabled) {
      return styles.disabled;
    }
    if (hasError) {
      return styles.error;
    }
    return styles.input;
  };

  const validateInput = () => {
    const isValidValueForType = {
      email: (value) => {
        return value.includes("@") && (value.endsWith(".com") || value.endsWith(".com.br"));
      },
      text: (value) => {
        return value.length > 0;
      },
    };
    const errorMessageForType = {
      email: "E-mail inválido",
      text: "Valor inválido",
    }
    const isInvalid = !isValidValueForType[type](inputRef.current.value);
    setHasError(isInvalid);
    if (isInvalid) {
      setErrorMessage(errorMessageForType[type]);
    }
  };

  return (
    <>
      {label &&
        <div className={styles.labelpadding}>
          <Label text={label}/>
        </div>
      }
      <div>
        <input
          ref={inputRef}
          className={getStyle()}
          placeholder={placeholder}
          disabled={disabled}
          onChange={() => validateInput()}
          type={type}
        />
        <br />
      </div>
      {hasError &&
        <text
          className={styles.errormessage}
        >
            {errorMessage}
        </text>
      }
    </>
  );
}
