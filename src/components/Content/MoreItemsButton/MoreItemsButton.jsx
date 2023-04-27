import React from "react";
import styles from "./MoreItemsButton.module.scss"
import PropTypes from "prop-types"

const MoreItemsButton = ({getMoreProducts}) => {
    return (
        <button onClick={getMoreProducts} className={styles.moreItemsButton} >
      Показать еще  ↆ
        </button>
    )
}

MoreItemsButton.propTypes = {
    getMoreProducts: PropTypes.func.isRequired 
}
export default MoreItemsButton