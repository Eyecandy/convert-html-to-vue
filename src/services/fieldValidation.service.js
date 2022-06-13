
class FieldValidationService {

    validateEmail(email) {

        const re = new RegExp('^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@'
            + '[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$');

        return re.test(email)

    }

    validatePassword(password) {
        return password.length >= 8 && password.trim().length !== 0
    }

    validatePasswordMatch(password, passwordConfirmation) {
        return password === passwordConfirmation
    }



}

export default new FieldValidationService();