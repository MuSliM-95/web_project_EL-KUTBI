import React from "react";
import styles from "./PersonalAccount.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeToken } from "../../app/Reducers/usersReducer";

const PersonalAccount = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.usersReducer.token)
    if(!token) {
        return <Navigate to={"/signinUp"} />
      }

    const exit = () => {
        dispatch(removeToken())
    }
    return (
        <div>
            Кабинет

            <button type="button" onClick={exit}>x</button>
        </div>
    )

}

export default PersonalAccount