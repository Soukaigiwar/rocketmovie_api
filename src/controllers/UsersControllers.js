const AppError = require("../utils/AppError");
const UserRepository = require("../repositories/UserRepository");
const PasswordValidator = require("../utils/PasswordValidator");
const UserCreateService = require("../services/UserCreateService");

class UsersControllers {
    async create(request, response) {
        const { name, email, password } = request.body;

        const userRepository = new UserRepository();
        const userCreateService = new UserCreateService(userRepository);

        await userCreateService.execute({ name, email, password });

        return response.status(201).json();
    };

    async update(request, response) {
        const { name, email, old_password, new_password } = request.body;
        const user_id = request.user.id;

        const userRepository = new UserRepository();
        const passwordValidator = new PasswordValidator();

        const user = await userRepository.findById(user_id);

        if (!user) {
            throw new AppError("Usuário não encontrado.", 401);
        };

        const emailExist = await userRepository.findByEmail(email);

        console.log(emailExist);

        if (emailExist && emailExist.id !== user.id) {
            throw new AppError("Email já está em uso.", 401);
        };

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        const password = await passwordValidator
            .validatePasswords(new_password, old_password, user.password);

        if (password === user.password) {
            await userRepository.update(user_id, name, email);
        } else {
            await userRepository.update(user_id, name, email, password);
        };

        return response.status(201).json();
        // Default password: !234qwerT
    };
};

module.exports = UsersControllers;
