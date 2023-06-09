import React, { useState } from "react";
import styles from "./Login.module.scss";
import user from "../../../logo/630631-middle.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";
import { InputMask } from "primereact/inputmask";
import { userLogin } from "../../../app/AsyncFetch/userFetch";
import { validatorPassword } from "../../../hooks/validatorIput";
import loadingImage from "../../../logo/free-animated-icon-book-10164261.gif";

const Login = () => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const inputMenu = React.useRef(null);
  const inputBlock = React.useRef(null);
  const locatin = useLocation();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.usersReducer.token);
  const status = useSelector((state) => state.productsReducer.status);
  const errorCode = useSelector((state) => state.usersReducer.errorCode);
  const { phoneNumber } = locatin.state;

  const stopForm = (e) => {
    e.preventDefault();
  };

  const handleInputsPassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    if (validatorPassword(password)) {
      dispatch(userLogin({ phoneNumber, password }));
    }
    setPassword("");
  };

  const showPassword = (e) => {
    e.target.classList.toggle(styles.inputSpanEye);
    e.target.classList.toggle(styles.inputSpanNoEye);
    setShow(!show);
  };

  const loginMenu = () => {
    inputMenu.current.classList.toggle(styles.loginMenuNone);
    inputMenu.current.classList.toggle(styles.loginMenu);
  };

  if (token) {
    return <Navigate to={"/usersAccount"} />;
  }

  if (status === "loading") {
    return (
      <div className={styles.loadingBlock}>
        <img src={loadingImage} alt="loadingImage" />
      </div>
    );
  }
  if (status === "error") {
    return <Navigate to={"/error"} />;
  }

  if (errorCode) inputBlock.current?.classList.add(styles.errorInput);
  else inputBlock.current?.classList.remove(styles.errorInput);
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBlock}>
        <h1>Войти под номером</h1>
        <form onClick={stopForm} className={styles.login_form}>
          <div onClick={loginMenu} className={styles.inputBlock}>
            <img className={styles.inputImg} src={user} alt="inputImg" />
            <InputMask
              className={styles.input}
              type="tel"
              id="phone"
              name="phone"
              value={phoneNumber}
              mask="+7(999) 999-99-99"
              disabled
            />
            <span className={styles.spanInputArrowImage}></span>
            <div ref={inputMenu} className={styles.loginMenuNone}>
              <div className={styles.loginMenuBlock}>
                <img
                  className={styles.inputMenuImg}
                  src={user}
                  alt="inputImg"
                />
                <InputMask
                  className={styles.input}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phoneNumber}
                  mask="+7(999) 999-99-99"
                  disabled
                />
              </div>
              <div className={styles.menuLinkBlock}>
                <Link to={"/signinUp"} className={styles.linkSigninUp}>
                  Войти под другим номером
                </Link>
              </div>
            </div>
          </div>
          <div ref={inputBlock} className={styles.inputBlock}>
            <img className={styles.inputImg} src={user} alt="inputImg" />
            <input
              className={styles.input}
              type={show ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              placeholder="Введите пароль"
              onChange={handleInputsPassword}
            />
            <span
              onClick={showPassword}
              className={styles.inputSpanNoEye}
            ></span>
          </div>
          <input className={styles.submit} type="submit" onClick={login} />
        </form>

        <div className={styles.inputCheckboxContainer}>
          <Link className={styles.linkHome} to={"/"}>
            Гость
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
