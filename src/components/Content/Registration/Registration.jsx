import React, { useEffect, useState } from "react";
import styles from "./Registration.module.scss";
import userLogo from "../../../logo/630631-middle.png";
import { useDispatch } from "react-redux";
import { getUsers, userRegistration } from "../../../app/AsyncFetch/userFetch";
import { Link } from "react-router-dom";
import { InputMask } from "primereact/inputmask";

const Registration = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();
  // const users = useSelector((state) => state.usersReducer.users);
  // const error = useSelector((state) => state.usersReducer.status);

  useEffect(() => {
    dispatch(getUsers());
  });

  const stopForm = (e) => {
    e.preventDefault();
  };

  const addPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const registration = () => {
    dispatch(userRegistration({ phoneNumber }));
  };
  
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signUpBlock}>
        <h1>Cоздать профиль</h1>
        <form onClick={stopForm} className={styles.signUp_form}>
          <div className={styles.inputBlock}>
            <img className={styles.inputImg} src={userLogo} alt="inputImg" />
            <InputMask
              className={styles.input}
              type="tel"
              id="phone"
              name="phone"
              placeholder="+7(999) 999-99-99"
              value={phoneNumber}
              onChange={addPhoneNumber}
              mask="+7(999) 999-99-99"
            />
          </div>

          <input
            className={styles.submit}
            type="submit"
            onClick={registration}
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
  );
};

export default Registration;
