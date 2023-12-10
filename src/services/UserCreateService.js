const AppError = require("../utils/AppError");

class UserCreateService {
    constructor(userRepository){
        this.userRepository = userRepository;
    };

    async execute({ name, email, password }) {
        const emailExist = await this.userRepository.findByEmail(email);

        if (emailExist) {
            throw new AppError("Email já cadastrado.");
        };

        const userCreated = await this.userRepository
            .create({ name, email, password });
        
        return userCreated;
    };

};

module.exports = UserCreateService;
