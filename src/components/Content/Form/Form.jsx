import React, { useEffect, useRef, useState } from "react";
import { useTelegram } from "../../../hooks/useTelegram";
import Button from "./Button/Button";
import styles from "./Form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AddressSuggestions, FioSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { getUser, patchUser } from "../../../app/AsyncFetch/userFetch";

const Form = () => {
  const dispatch = useDispatch();
  const nameInput = useRef(null);
  const userId = useSelector((state) => state.usersReducer.userId);
  // const users = useSelector((state) => state.usersReducer.users)
  const user = useSelector((state) => state.usersReducer.user);

  useEffect(() => {
    dispatch(getUser({ userId }));
  }, []);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const { phoneNumber } = user;

  const addUserData = () => {
    dispatch(patchUser({ name, address,  contact, userId }));
  };

  const stopForm = (e) => {
    e.preventDefault();
  };
  const onChangeName = (e) => {
    setName(e);
  };
  const onChangeAddress = (e) => {
    setAddress(e);
  };
  const onChangeContact = (e) => {
    setContact(e.target.value);
  };

  const style = {
    className: styles.input,
  };

  return (
    <div className={styles.form_wrapper}>
      <form onClick={stopForm} className={styles.form}>
        <div className={styles.elKutbi}>EL-KUTBI</div>
        <div className={styles.formText}>Форма для оформления заказа</div>
        <div className={styles.inputContainer}>
          {/* <input
            className={styles.input}
            type="tel"
            value={phoneNumber}
            disabled
          /> */}
          <FioSuggestions
            inputProps={style}
            ref={nameInput}
            token="d48068d3df3e54cbd1bb9c0a6edf99b88a6adfe4"
            className={styles.input}
            type="text"
            value={name}
            placeholder="Отчество"
            onChange={onChangeName}
          />
          <AddressSuggestions
            inputProps={style}
            token="d48068d3df3e54cbd1bb9c0a6edf99b88a6adfe4"
            type="text"
            value={address}
            placeholder="Улица_дом_квартира"
            onChange={onChangeAddress}
          />
          <input
            className={styles.input}
            type="text"
            value={contact}
            placeholder="Контакт для связи WhatsApp, Telegram или Instagram"
            onChange={onChangeContact}
          />
        </div>

        <Button addUserData={addUserData} />
      </form>
      <div className={styles.addressWrapper}>
        <div className={styles.addressBlock}>
          <p>
            <strong>Получатель: </strong>
            {user?.name}
          </p>
          <p>
            <strong>Номер: </strong>
            {user?.phoneNumber}
          </p>
          <p>
            <strong>Адрес: </strong>
            {user?.address}
          </p>
          <p>
            <strong>Индекс: </strong>
            {user?.postal_code}
          </p>
          <a href={user?.contact} target="_blank">
            <strong>Мессенджер: </strong>
            {user?.contact}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
