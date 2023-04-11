import React from "react";
import RegistrationCode from "../../components/Content/RegistrationCode/RegistrationCode";
import styles from "./RegistrationCodePage.module.scss"
const RegistrationCodePage = () => {
    return(
        <div className={styles.login}>
        <RegistrationCode/>
        </div>
    )
}

export default RegistrationCodePage