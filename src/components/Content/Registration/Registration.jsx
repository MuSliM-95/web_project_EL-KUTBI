import React, { useEffect, useState, useRef } from "react";
import styles from "./Registration.module.scss";
import userLogo from "../../../logo/630631-middle.png";
import { useDispatch, useSelector } from "react-redux";
import {
  activationCode,
  addPassword,
  getUsers,
  userRegistration,
} from "../../../app/AsyncFetch/userFetch";
import { Link, Navigate } from "react-router-dom";
import { InputMask } from "primereact/inputmask";
import {
  validatorPassword,
  validatorPhoneNumber,
} from "../../../hooks/validatorIput";

const Registration = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const user = useSelector((state) => state.usersReducer.user);
  // const userId = useSelector((state) => state.usersReducer.userId);
  const token = useSelector((state) => state.usersReducer.token);
  // const error = useSelector((state) => state.usersReducer.status);

  const inputpassword = useRef();

  useEffect(() => {
    dispatch(getUsers());
  },[]);

  const stopForm = (e) => {
    e.preventDefault();
  };

  const addPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const addCode = (e) => {
    setCode(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const registration = () => {
    if (validatorPhoneNumber(phoneNumber)) {
      dispatch(userRegistration({ phoneNumber }));
    }
  };

  const activationUserProfile = () => {
    const { phoneNumber } = user;
    if (user?.code === code) {
      dispatch(activationCode(user));
    }
    if (user?.code === "verified") {
      if (validatorPassword(password)) {
        dispatch(addPassword({ phoneNumber, password }));
        setPassword("");
      }
    }
  };


  const updatePage = users?.some((user) => user.phoneNumber === phoneNumber);


  if (updatePage) {
    return <Navigate to={"/login"} state={{phoneNumber: phoneNumber}} />;
  }
  if (token) {
    console.log(7);
    return <Navigate to={"/usersAccount"} />;
  }
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signUpBlock}>
        <h1>Введите номер</h1>
        <form onClick={stopForm} className={styles.signUp_form}>
          <div className={styles.inputBlock}>
            <img className={styles.inputImg} src={userLogo} alt="inputImg" />
            <InputMask
              className={styles.input}
              type="tel"
              id="phone"
              name="phone"
              placeholder="+7(999) 999-99-99"
              value={user?.code ? user?.phoneNumber : phoneNumber}
              onChange={addPhoneNumber}
              mask="+7(999) 999-99-99"
            />
          </div>
          <div
            ref={inputpassword}
            className={
              user?.code && user?.code !== "verified"
                ? styles.inputBlock
                : styles.inputBlockNone
            }
          >
            <input
              className={styles.input}
              type="code"
              id="code"
              name="code"
              value={code}
              onChange={addCode}
            />
          </div>
          <div
            className={
              user?.code && user?.code === "verified"
                ? styles.inputBlock
                : styles.inputBlockNone
            }
          >
            <input
              className={styles.input}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={inputPassword}
              placeholder="Пароль 8-20 символов"
            />
          </div>
          <input
            className={styles.submit}
            type="submit"
            onClick={user?.code ? activationUserProfile : registration}
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
