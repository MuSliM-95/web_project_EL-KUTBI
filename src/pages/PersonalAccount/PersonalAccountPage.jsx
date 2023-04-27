import React from "react";
import styles from "./PersonalAccount.module.scss"
import { useSelector } from "react-redux";

const PersonalAccount = () => {
    const token = useSelector((state) => state.usersReducer.token)
    if(!token) {
        return <Navigate to={"signinUp"} />
      }
    return (
        <div>
            Кабинет
        </div>
    )

}

export default PersonalAccount