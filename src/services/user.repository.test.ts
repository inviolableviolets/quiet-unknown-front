import { UserRepository } from "./user.repository";

describe("UserRepository", () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository("https://test.com/");
  });

  describe("When calling the register method", () => {
    test("Then it should fetch data from the API and return the response", async () => {
      const user = {
        userName: "test",
        email: "test@gmail.com",
        password: "1234",
      };

      const expectedUrl = "https://test.com/user/register";
      const mockResponse = {
        id: "1",
        userName: "test",
        email: "test@gmail.com",
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const registeredUser = await userRepository.register(user);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      expect(registeredUser).toEqual(mockResponse);
    });
  });

  describe("When calling the login method", () => {
    test("Then it should fetch data from the API and return the response", async () => {
      const user = {
        email: "test@gmail.com",
        password: "1234",
      };

      const expectedUrl = "https://test.com/user/login/";
      const mockResponse = {
        id: "1",
        userName: "test",
        email: "test@gmail.com",
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const loggedInUser = await userRepository.login(user);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      expect(loggedInUser).toEqual(mockResponse);
    });

    test("Then it should throw an error if the fetch is not successful", async () => {
      const user = {
        email: "test@gmail.com",
        password: "1234",
      };
      const error = new Error("Login error");

      const expectedUrl = "https://test.com/user/login/";

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: "Login error",
      });

      await expect(userRepository.login(user)).rejects.toThrow(error);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
    });
  });
});
