import React from "react";
import styles from "./ProductButton.module.scss"
import PropTypes from "prop-types"


const ProductButton = ({el}) => {

 const  addProductBasket = () => {
  console.log(el);
 }

     return (
       <button onClick={addProductBasket} className={styles.productButton}>В корзину</button>
     )
}

ProductButton.propTypes = {
  el: PropTypes.object
}
 
export default ProductButton