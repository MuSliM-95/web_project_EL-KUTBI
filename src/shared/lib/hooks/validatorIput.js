
let regexPassword = /^\S{8,16}$/;
let regexPhoneNumber = /\+7\(\d{3}\) \d{3}\-\d{2}\-\d{2}/;
let nameValidator = /^[A-ZА-Я][a-zа-я]{2,20}\s[A-ZА-Я][a-zа-я]{2,20}(\s[A-ZА-Я][a-zа-я]{2,20})?$/


export const  validatorPassword = (password) => {
    return regexPassword.test(password)
}

export const validatorPhoneNumber = (phoneNumber) => {
 return regexPhoneNumber.test(phoneNumber)
}

export const validatorName = ({value}) => {
    return nameValidator.test(value)
}


export const  validatorCode = (arrCode) => {
return arrCode.reduce((acc, code) => {
acc.codeInputValue += code
return acc

}, {codeInputValue: ""})
}