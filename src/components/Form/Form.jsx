import React, { useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import Button from "./Button/Button";
import style from './Form.module.scss'


const Form = () => {
    const { tg, user } = useTelegram()
    const [name, setName] = useState({ name: '', surname: '', patronymic: '' })
    const [address, setAddress] = useState({ city: '', subject: '', postcode: '', contact: '' })

    useEffect(() => {
        tg.MainButton?.setParams({
            text: 'Отправить данные '

        })
    })

    useEffect(() => {
        if (!name.name || !name.surname || !name.patronymic || !address.city || !address.subject || !address.postcode || !address.contact) {
            tg?.MainButton.hide()
        } else {
            tg?.MainButton.show()
        }
    })

    const onChangeName = (e) => {
        setName({ name: e.target.value })
    }
    const onChangeSurname = (e) => {
        setName({ surname: e.target.value })
    }
    const onChangePatronymic = (e) => {
        setName({ patronymic: e.target.value })
    }
    const onChangeCity = (e) => {
        setAddress({ city: e.target.value })
    }
    const onChangeSubject = (e) => {
        setAddress({ subject: e.target.value })
    }
    const onChangePostcode = (e) => {
        setAddress({ postcode: e.target.value })
    }
    const onChangeContact = (e) => {
        setAddress({ contact: e.target.value })
    }

    return (
        <form onClick={(e) => e.preventDefault()} className={style.form} >
            <div className={style.elKutbi}>EL-KUTBI</div>
            <div className={style.formText}>Форма для оформления заказа</div>
            <input
                className={style.input}
                type="text" value={name.surname}
                placeholder="Фамилия"
                onChange={onChangeSurname}
            />
            <input
                className={style.input}
                type="text" value={name.name}
                placeholder="Имя"
                onChange={onChangeName}
            />

            <input
                className={style.input}
                type="text" value={name.patronymic}
                placeholder="Отчество"
                onChange={onChangePatronymic}
            />
            <input
                className={style.input}
                type="text" value={address.city}
                placeholder="Город"
                onChange={onChangeCity}
            />
            <input
                className={style.input}
                type="text" value={address.subject}
                placeholder="Улица_дом_квартира"
                onChange={onChangeSubject}
            />
            <input
                className={style.input}
                type="number" value={address.postcode}
                placeholder="Почтовый индекс"
                onChange={onChangePostcode}
            />
            <input
                className={style.input}
                type="text" value={address.contact}
                placeholder="Контакт для связи WhatsApp или Telegram"
                onChange={onChangeContact}
            />

            {user || <Button />}
        </form>
    )
}


export default Form