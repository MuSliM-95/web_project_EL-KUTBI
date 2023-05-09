
let regexPassword = /^\S{8,16}$/;
let regexPhoneNumber = /\+7\(\d{3}\) \d{3}\-\d{2}\-\d{2}/;

export const  validatorPassword = (password) => {
    return regexPassword.test(password)
}

export const validatorPhoneNumber = (phoneNumber) => {
 return regexPhoneNumber.test(phoneNumber)

}
