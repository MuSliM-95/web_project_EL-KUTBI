import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./RegistrationCode.module.scss"

const RegistrationCode = () => {
  const [code, setCode] = useState("")

  const dispatch = useDispatch()

  const stopForm = (e) => {
    e.preventDefault();
  };

  const addCode = (e) => {
    setCode(e.target.value)
  }

  const confirmationCode = () => {

  }
    return(
        <div className={styles.signupContainer}>
      <div className={styles.signUpBlock}>
        <h1>Подтвердить номер</h1>
        <form onClick={stopForm} className={styles.signUp_form}>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="number"
              id="code"
              name="code"
              placeholder="0000"
              value={code}
              onChange={addCode}
              
            />
          </div>

          <input
            className={styles.submit}
            type="submit"
            onClick={confirmationCode}
          />
        </form>

        <div className={styles.inputCheckboxContainer}>
          <Link className={styles.linkAgreement} to={"#"}>
            Согласен с условиями
          </Link>
          <Link className={styles.linkHome} to={"/"}>
            Гость
          </Link>
        </div>
      </div>
    </div>
    )
}

export default RegistrationCode