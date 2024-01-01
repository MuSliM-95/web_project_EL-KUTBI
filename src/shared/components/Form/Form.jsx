import React, { useState } from "react";
import styles from "./Form.module.scss";
import { useDispatch } from "react-redux";
import { AddressSuggestions, FioSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { patchUser } from "../../../app/AsyncFetch/userFetch";
import { InputMask } from "primereact/inputmask";
import { Link, Navigate, useLocation } from "react-router-dom";
import { validatorName } from "../../lib/hooks/validatorIput";
import { Loading } from "../../ui";
import Button from "../../ui/Button/Button";

const Form = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const page = location?.state?.page;
  const user = location?.state?.user;
  const userId = location?.state?.userId;
  const status = location?.state?.status;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [recipientNumber, setRecipientNumber] = useState("");

  const addUserData = () => {
    if (validatorName(name))
      return dispatch(
        patchUser({ name, address, contact, recipientNumber, userId })
      );
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
    setRecipientNumber(e.value);
  };

  const style = {
    className: styles.input,
  };

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "error") return <Navigate to={"/error"} />;
  if (!user) return <Navigate to={"/signinUp"} />;

  return (
    <div className={styles.form_wrapper}>
      <form onClick={handleStopForm} className={styles.form}>
        <div className={styles.elKutbi}>EL-KUTBI</div>
        <div className={styles.formText}>Форма для оформления заказа</div>
        <div className={styles.inputContainer}>
          <div className={styles.input_block}>
            <p>Номер для звонка</p>
            <InputMask
              className={styles.input}
              type="text"
              id="phone"
              name="phone"
              placeholder="+7(999) 999-99-99"
              value={recipientNumber}
              onChange={handleRecipientNumber}
              mask="+7(999) 999-99-99"
            />
          </div>
          <div className={styles.input_block}>
            <p>Полное имя</p>
            <FioSuggestions
              inputProps={style}
              token="d48068d3df3e54cbd1bb9c0a6edf99b88a6adfe4"
              className={styles.input}
              type="text"
              value={name}
              placeholder="Полное имя"
              onChange={handleName}
            />
          </div>
          <div className={styles.input_block}>
            <p>Адрес</p>
            <AddressSuggestions
              inputProps={style}
              token="d48068d3df3e54cbd1bb9c0a6edf99b88a6adfe4"
              type="text"
              value={address}
              placeholder="Улица_дом_квартира"
              onChange={handleAddress}
            />
          </div>
          <div className={styles.input_block}>
            <p>WhatsApp</p>
            <input
              className={styles.input}
              type="text"
              value={contact}
              placeholder="+79289999999"
              onChange={handleContact}
            />
          </div>
        </div>
        <Button addUserData={addUserData} />
      </form>
      <div className={styles.addressWrapper}>
        <div className={styles.addressBlock}>
          <p className={styles.user_info}>
            <strong>Заказчик: </strong>
            {user?.phoneNumber}
          </p>
          <p className={styles.user_info}>
            <strong>Получатель: </strong>
            {user?.name}
          </p>
          <p className={styles.user_info}>
            <strong>Номер получателя: </strong>
            {user?.recipientNumber}
          </p>
          <p className={styles.user_info}>
            <strong>Адрес: </strong>
            {user?.address}
          </p>
          <p className={styles.user_info}>
            <strong>Индекс: </strong>
            {user?.postal_code}
          </p>
          <a href={`https://wa.me/${user?.contact}`} target="_blank">
            <strong>WhatsApp: </strong>
            {user?.contact}
          </a>
        </div>
        <div className={styles.buttonBlock}>
          <Link to={page}>Выбрать✅</Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
