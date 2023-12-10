const knex = require("../database/knex");
const PasswordValidator = require("../utils/PasswordValidator");
const AppError = require("../utils/AppError");

class UserRepository {
    async findByEmail(email) {
        try {
            return await knex("users").where({ email }).first();
        } catch (error) {
            throw new AppError(error.message);
        };
    };

    async findById(id) {
        try {
            return await knex("users").where({ id }).first();
        } catch (error) {
            throw new AppError(error.message);
        };
    };

    async create({ name, email, password }) {
        const passwordValidator = new PasswordValidator;
        const passwordIsValid = passwordValidator.validate(password);

        if (!passwordIsValid) {
            throw new AppError("A senha não tem os requisitos mínimos.", 401);
        };

        const hashedPassword = await passwordValidator.hash(passwordIsValid);

        const userId = await knex("users")
            .insert({ name, email, password: hashedPassword });

        return { id: userId };
    };

    async update(id, name, email, password = null) {
        if (!password) {
            const response = await knex("users").where({ id }).update({
                name,
                email,
                updated_at: knex.fn.now()
            });

            return response;
        } else {
            const response = await knex("users").where({ id }).update({
                name,
                email,
                password,
                updated_at: knex.fn.now()
            });

            return response;
        };
    };
};

module.exports = UserRepository;
