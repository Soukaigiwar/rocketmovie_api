const { hash, compare } = require("bcryptjs");
const AppError = require("./AppError");

class PasswordValidator {
    validate(new_password) {
        const requiredChars = [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/];
        const passwordEvaluated = requiredChars.every((required) =>
            required.test(new_password));
        
        if (new_password.length < 8 || !passwordEvaluated) {
            return false;
        };

        return new_password;
    };

    async hash(new_password) {
        const hashNewPassword = await hash(new_password, 8);

        return hashNewPassword;
    };

    async validatePasswords(newPassword = null, oldPassword = null, userPassword) {
        if (!newPassword && !oldPassword) {
            return userPassword;
        };

        if (newPassword && !oldPassword) {
            throw new AppError("Senha antiga inválida.", 401);
        };

        if (newPassword && oldPassword) {
            const checkNewPassword = this.validate(newPassword);
            if (!checkNewPassword) {
                throw new AppError("A senha não tem os requisitos mínimos.", 401);
            };
            const validateOldPassword = await compare(oldPassword, userPassword);

            if (!validateOldPassword) {
                throw new AppError("Senha antiga inválida", 401);
            };

            userPassword = await this.hash(newPassword);
        };

        return userPassword;
    };
};

module.exports = PasswordValidator;
