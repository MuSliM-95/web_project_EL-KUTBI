
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

export function codeActivation(users, phoneNumberValue, passwordValue) {
  return users?.reduce(
    (acc, { phoneNumber, code, password }) => {
      if (phoneNumber === phoneNumberValue) {
        acc.userCode = code;
      }
      if(password) {
        acc.passwordTrue = true
      }
      return acc
    },
    { userCode: "", passwordTrue: false }
  );
}

