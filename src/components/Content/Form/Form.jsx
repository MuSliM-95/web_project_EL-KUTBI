import React, { useEffect, useRef, useState } from "react";
import { useTelegram } from "../../../hooks/useTelegram";
import Button from "./Button/Button";
import styles from "./Form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AddressSuggestions, FioSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { getUser, patchUser } from "../../../app/AsyncFetch/userFetch";
import { InputMask } from "primereact/inputmask";
import { Link } from "react-router-dom";
import { validatorName } from "../../../hooks/validatorIput";

const Form = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.usersReducer.userId);
  const user = useSelector((state) => state.usersReducer.user);

  useEffect(() => {
    dispatch(getUser({ userId }));
  }, []);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [recipientNumber, setRecipientNumber] = useState("");

  const { phoneNumber } = user;

  const addUserData = () => {
    console.log(validatorName(name));
    if (validatorName(name)) {
      return dispatch(
        patchUser({ name, address, contact, recipientNumber, userId })
      );
    }
  };

  const handleStopForm = (e) => {
    e.preventDefault();
  };
  const handleName = (e) => {
    setName(e);
  };
  const handleAddress = (e) => {
    setAddress(e);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handleRecipientNumber = (e) => {
    setRecipientNumber(e.target.value);
  };

  const style = {
    className: styles.input,
  };

  return (
    <div className={styles.form_wrapper}>
      <form onClick={handleStopForm} className={styles.form}>
        <div className={styles.elKutbi}>EL-KUTBI</div>
        <div className={styles.formText}>Форма для оформления заказа</div>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="tel"
            value={phoneNumber}
            disabled
          />
          <InputMask
            className={styles.input}
            type="tel"
            id="phone"
            name="phone"
            placeholder="+7(999) 999-99-99"
            value={recipientNumber}
            onChange={handleRecipientNumber}
            mask="+7(999) 999-99-99"
          />
          <FioSuggestions
            inputProps={style}
            token="d48068d3df3e54cbd1bb9c0a6edf99b88a6adfe4"
            className={styles.input}
            type="text"
            value={name}
            placeholder="Полное имя"
            onChange={handleName}
          />
          <AddressSuggestions
            inputProps={style}
            token="d48068d3df3e54cbd1bb9c0a6edf99b88a6adfe4"
            type="text"
            value={address}
            placeholder="Улица_дом_квартира"
            onChange={handleAddress}
          />
          <input
            className={styles.input}
            type="text"
            value={contact}
            placeholder="Контакт для связи WhatsApp"
            onChange={handleContact}
          />
        </div>
        <Button addUserData={addUserData} />
      </form>
      <div className={styles.addressWrapper}>
        <div className={styles.addressBlock}>
          <p>
            <strong>Заказчик: </strong>
            {user?.phoneNumber}
          </p>
          <p>
            <strong>Получатель: </strong>
            {user?.name}
          </p>
          <p>
            <strong>Номер получателя: </strong>
            {user?.recipientNumber}
          </p>
          <p>
            <strong>Адрес: </strong>
            {user?.address}
          </p>
          <p>
            <strong>Индекс: </strong>
            {user?.postal_code}
          </p>
          <a href={`https://wa.me/${user?.contact}`} target="_blank">
            <strong>WhatsApp: </strong>
            {user?.contact}
          </a>
        </div>
        <div className={styles.buttonBlock}>
          <Link to={"/basket"}>Выбрать✅</Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
