const AppError = require("../utils/AppError");
const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");


describe("UserCreateService", () => {
    let userRepositoryInMemory = null;
    let userCreateService = null;

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        userCreateService = new UserCreateService(userRepositoryInMemory);
    })

    it("user should be created", async () => {
        const user = {
            name: "User Test",
            email: "user_test@email.com",
            password: "!234qwerT"
        };

        const userCreated = await userCreateService.execute(user);

        expect(userCreated).toHaveProperty("id");
    });

    it("user should not be created if email already exist", async () => {
        const user1 = {
            name: "First User Test",
            email: "user_test@email.com",
            password: "!234qwerT"
        };

        const user2 = {
            name: "Second User Test",
            email: "user_test@email.com",
            password: "!234qwerT"
        };

        await userCreateService.execute(user1);

        await expect(userCreateService.execute(user2))
            .rejects.toEqual(new AppError("Email já cadastrado."));
    });
});

