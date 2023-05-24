import React, { useState } from "react";
import styles from "./ProfileDelete.module.scss";
import { InputMask } from "primereact/inputmask";
import { removeProfile } from "../../../app/AsyncFetch/userFetch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileDelete = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useSelector((state) => state.usersReducer.userId);
  const status = useSelector((state) => state.usersReducer.status);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [seeThePassword, setSeeThePassword] = useState(false)

  const handleInputNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleseeThePassword = (e) => {
  setSeeThePassword(!seeThePassword)
  e.target.classList.toggle(styles.spanActive)
  e.target.classList.toggle(styles.spanNone)
  }

  const deleteProfile = () => {
    dispatch(removeProfile({userId, phoneNumber, password }));
    setPassword("")
    setPhoneNumber("")
    if(status === "success") {
      document.body.style.overflow = "auto";
        return navigate("/")
    }
  };
  
  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className={styles.deleteUserContainer}
    >
      <div className={styles.deleteUserBlock}>
        <h2>Удалить профиль</h2>
        <div className={styles.inputBlock}>
          <InputMask
            className={styles.input}
            type="tel"
            id="phone"
            name="phone"
            value={phoneNumber}
            mask="+7(999) 999-99-99"
            onChange={handleInputNumber}
          />
          <div className={styles.inputPasswordBlock}>
          <input
            className={styles.input}
            type={seeThePassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={handleInputPassword}
            placeholder="Введите пароль"
          />
           <span onClick={handleseeThePassword} className={styles.spanNone}></span>
          </div>
        </div>
        <div className={styles.buttonBlock}>
          <button onClick={deleteProfile} type="button">Удалить профиль</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDelete;
