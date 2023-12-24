import React, { useEffect, useState } from "react";
import styles from "./Registration.module.scss";
import userLogo from "../../../shared/assets/icons/630631-middle.png";
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
  validatorCode,
  validatorPassword,
  validatorPhoneNumber,
} from "../../lib/hooks/validatorIput";
import { codeActivation } from "../../lib/hooks/item";
import RegistrationCodeInput from "../RegistrationCodeInput/RegistrationCodeInput";

const Registration = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState(new Array(6).fill(""));
  const [codeInput, setCodeInput] = useState(0);

  const dispatch = useDispatch();

  const users = useSelector((state) => state.usersReducer.users);
  const user = useSelector((state) => state.usersReducer.user);
  const token = useSelector((state) => state.usersReducer.token);
  const [show, setShow] = useState(false);
  const status = useSelector((state) => state.usersReducer.status);
  const errorCode = useSelector((state) => state.usersReducer.errorCode);
  const [render, setRender] = useState(false);

  const updatePage = users?.some((user) => user.phoneNumber === phoneNumber);
  const { codeInputValue } = validatorCode(code);

  const { userCode, passwordTrue } = codeActivation(
    users,
    phoneNumber,
    password
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [render]);

  const stopForm = (e) => {
    e.preventDefault();
  };

  const handleInputNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const registration = () => {
    if (validatorPhoneNumber(phoneNumber)) {
      dispatch(userRegistration({ phoneNumber }));
      dispatch(getUsers());
      setRender(!render);
    }
  };

  const activationUserProfile = () => {
    if (userCode !== "verified") {
      dispatch(activationCode({ codeInputValue, phoneNumber }));
      setRender(!render);
    }
    if (userCode === "verified") {
      if (validatorPassword(password)) {
        dispatch(addPassword({ phoneNumber, password }));
        setPassword("");
        setRender(!render);
      }
    }
    dispatch(getUsers());
  };

  const showPassword = (e) => {
    e.target.classList.toggle(styles.inputSpanEye);
    e.target.classList.toggle(styles.inputSpanNoEye);
    setShow(!show);
  };

  if (updatePage && userCode === "verified" && passwordTrue) {
    return <Navigate to={"/login"} state={{ phoneNumber }} />;
  }
  if (token) {
    return <Navigate to={"/usersAccount"} />;
  }

  if (status === "error" && !errorCode) {
    return <Navigate to={"/error"} />;
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
              onChange={handleInputNumber}
              mask="+7(999) 999-99-99"
            />
          </div>
          <div
            className={
              userCode && userCode !== "verified"
                ? styles.inputCodeStyle
                : styles.inputBlockNone
            }
          >
            <RegistrationCodeInput
              code={code}
              setCode={setCode}
              codeInput={codeInput}
              setCodeInput={setCodeInput}
              errorCode={errorCode}
            />
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type={show ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={handleInputPassword}
              placeholder="Пароль 8-20 символов"
            />
            <span
              onClick={showPassword}
              className={styles.inputSpanNoEye}
            ></span>
          </div>
          <input
            className={styles.submit}
            type="submit"
            onClick={!updatePage ? registration : activationUserProfile}
          />
        </form>

        <div className={styles.inputCheckboxContainer}>
          <Link
            className={styles.linkAgreement}
            to={"/inDeveloping"}
            state={{ page: "/signinUp" }}
          >
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
