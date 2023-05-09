import styles from "../components/Content/Form/Form.module.scss"

export function itemInfo(arrItem) {
  return arrItem?.reduce(
    (acc, { quantity, price }) => {
      acc.totalPrice += quantity * price;
      acc.totalQuantity += quantity;
      acc.totalDelivery += quantity * 50;
      acc.totalAmount += quantity * price + quantity * 50;
      return acc;
    },
    { totalPrice: 0, totalQuantity: 0, totalDelivery: 0, totalAmount: 0 }
  );
}


