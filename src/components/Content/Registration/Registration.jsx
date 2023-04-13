import React, { useEffect, useState } from "react";
import styles from "./Registration.module.scss";
import userLogo from "../../../logo/630631-middle.png";
import { useDispatch, useSelector } from "react-redux";
import { activationCode, getUsers, userRegistration } from "../../../app/AsyncFetch/userFetch";
import { Link } from "react-router-dom";
import { InputMask } from "primereact/inputmask";

const Registration = () => {
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [code, setCode] = useState("");
  const [registrationComponent, setRegistrationComponent] = useState({phoneNumber: "", code: ""})

  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const user = useSelector((state) => state.usersReducer.user);
  const error = useSelector((state) => state.usersReducer.status);

  useEffect(() => {
    dispatch(getUsers());
  },[]);

  console.log(user);
  const stopForm = (e) => {
    e.preventDefault();
  };

  const addPhoneNumber = (e) => {
    setRegistrationComponent({phoneNumber: e.target.value});
  };
  const addCode = (e) => {
    setRegistrationComponent({code: e.target.value});
  };
  const registration = () => {
    dispatch(userRegistration(registrationComponent));
  };
  const activationUserProfile = () => {
    if(user?.code === registrationComponent.code) {
      dispatch(activationCode(registrationComponent));
    }
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
              value={user?.code ? user?.phoneNumber : registrationComponent.phoneNumber}
              onChange={addPhoneNumber}
              mask="+7(999) 999-99-99"
            />
          </div>

          {user?.code && <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="text"
              id="code"
              name="code"
              value={registrationComponent.code}
              onChange={addCode}
            />
          </div>}
          {/* {user?.code === "verified" && <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="text"
              id="code"
              name="code"
              value={registrationComponent.code}
              onChange={addCode}
            />
          </div>} */}

          <input
            className={styles.submit}
            type="submit"
            onClick={user?.code ?  activationCode : registration}
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
