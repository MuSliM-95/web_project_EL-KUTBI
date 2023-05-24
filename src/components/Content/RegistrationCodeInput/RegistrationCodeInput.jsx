import React, { useEffect, useRef, useState } from "react";
import styles from "./RegistrationCodeInput.module.scss";
import PropTypes from "prop-types";

let codeIndex = 0;
const RegistrationCodeInput = ({
  code,
  setCode,
  codeInput,
  setCodeInput,
  errorCode,
}) => {
  const inputRef = useRef(null);
  const inputBlock = useRef(null)

  const [render, setRender] = useState(false)
  
  useEffect(() => {
    inputRef.current?.focus();
 
  }, [codeInput]);

  
  const handleOnChange = ({ target }) => {
    const { value } = target;
    const newCode = [...code];
    newCode[codeIndex] = value.substring(value.length - 1);
    if (!value) setCodeInput(codeIndex - 1);
    else setCodeInput(codeIndex + 1);
    setCode(newCode);
  };

  const handleOnKeyDown = ({ key }, index) => {
    codeIndex = index;
    if (key === "Backspace") setCodeInput(index - 1);
    
  };
 
  if (errorCode) inputBlock.current?.classList.add(styles.errorInput);
  else inputBlock.current?.classList.remove(styles.errorInput);
  return (
    <div ref={inputBlock}   className={styles.inputWrapper}>
      {code.map((_, index) => {
        return (
          <div    className={styles.codeInputBlock} key={index}>
            <input
              ref={index === codeInput ? inputRef : null}
              className={styles.input}
              type="number"
              onChange={handleOnChange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              value={code[index]}
            />
          </div>
        );
      })}
    </div>
  );
};

RegistrationCodeInput.propTypes = {
  code: PropTypes.array.isRequired,
  setCode: PropTypes.func.isRequired,
  codeInput: PropTypes.number.isRequired,
  setCodeInput: PropTypes.func.isRequired,
  errorCode: PropTypes.string,
};

export default RegistrationCodeInput;
