import React from "react";
import styles from "./FormPage.module.scss";
import Form from "../../../shared/components/Form/Form"

const FormPage = () => {
  return (
    <div className={styles.formPage}>
      <Form />
    </div>
  );
};

export default FormPage;
