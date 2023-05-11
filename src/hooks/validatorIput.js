
let regexPassword = /^\S{8,16}$/;
let regexPhoneNumber = /\+7\(\d{3}\) \d{3}\-\d{2}\-\d{2}/;
let nameValidator = /^[A-ZА-Я][a-zа-я]{2,20}\s[A-ZА-Я][a-zа-я]{2,20}(\s[A-ZА-Я][a-zа-я]{2,20})?$/
// let nameValidator = /^([A-ZА-Я][a-zа-я]{2,20}\s){2,3}$/;

export const  validatorPassword = (password) => {
    return regexPassword.test(password)
}

export const validatorPhoneNumber = (phoneNumber) => {
 return regexPhoneNumber.test(phoneNumber)
}

export const validatorName = ({value}) => {
    console.log(nameValidator.test(value));
    return nameValidator.test(value)
}
