import React, { useState } from "react";
import styles from "./Login.module.scss";
import user from "../../../logo/630631-middle.png";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { InputMask } from "primereact/inputmask";

const Login = () => {
  const [loginComponent, setLoginComponent] = useState({phoneNumber: "", password: "", show: false})
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");
  // const [show, setShow] = useState(false);

  const inputMenu = React.useRef();

  const dispatch = useDispatch();

  const stopForm = (e) => {
    e.preventDefault();
  };

  const addPhoneNumber = (e) => {
    setLoginComponent({phoneNumber: e.target.value});
  };

  const addPassword = (e) => {
    setLoginComponent({password: e.target.value});
  };

  const login = () => {
    // dispatch(userLogin({ phoneNumber }));
  };

  const showPassword = (e) => {
    e.target.classList.toggle(styles.inputSpanEye);
    e.target.classList.toggle(styles.inputSpanNoEye);
    setLoginComponent({show: !loginComponent.show});
  };

  const loginMenu = () => {
    inputMenu.current.classList.toggle(styles.loginMenuNone);
    inputMenu.current.classList.toggle(styles.loginMenu);
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBlock}>
        <h1>Войти под номером</h1>
        <form onClick={stopForm} className={styles.login_form}>
          <div className={styles.inputBlock}>
            <img className={styles.inputImg} src={user} alt="inputImg" />
            <InputMask
              className={styles.input}
              type="tel"
              id="phone"
              name="phone"
              placeholder="+7(999) 999-99-99"
              value={loginComponent.phoneNumber}
              onChange={addPhoneNumber}
              mask="+7(999) 999-99-99"
            />
            <span
              onClick={loginMenu}
              className={styles.spanInputArrowImage}
            ></span>
            <div ref={inputMenu} className={styles.loginMenuNone}>
              <div className={styles.loginMenuBlock}>
                <img
                  onClick={loginMenu}
                  className={styles.inputMenuImg}
                  src={user}
                  alt="inputImg"
                />
                <InputMask
                  className={styles.input}
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+7(999) 999-99-99"
                  value={loginComponent.phoneNumber}
                  onChange={addPhoneNumber}
                  mask="+7(999) 999-99-99"
                  onClick={loginMenu}
                />
              </div>
              <div className={styles.menuLinkBlock}>
                <Link className={styles.linkSigninUp}>Войти под другим номером</Link>
              </div>
            </div>
          </div>
          <div className={styles.inputBlock}>
            <img className={styles.inputImg} src={user} alt="inputImg" />
            <input
              className={styles.input}
              type={loginComponent.show ? "text" : "password"}
              id="phone"
              name="phone"
              value={loginComponent.password}
              onChange={addPassword}
            />
            <span
              onClick={showPassword}
              className={styles.inputSpanNoEye}
            ></span>
          </div>
          <input className={styles.submit} type="submit" onClick={login} />
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

export default Login;
