import { UserRepository } from "../services/user.repository";
import { store } from "../store/store";
import { User } from "../models/user";
import { ac, loginUserAsync, registerUserAsync } from "./users.slice";
import { ApiLoginResponse } from "../types/api.response";

describe("Given the users slice reducer", () => {
  describe("When it is instantiated", () => {
    const user = {} as Partial<User>;
    const loginUser = { user: { userName: "Sergio" } } as ApiLoginResponse;
    const repo: UserRepository = {
      register: jest.fn(),
      login: jest.fn().mockResolvedValueOnce(loginUser),
    } as unknown as UserRepository;

    test("Then it should dispach the registerUserAsync", () => {
      store.dispatch(registerUserAsync({ repo, user }));
      expect(repo.register).toHaveBeenCalled();
    });

    test("Then it should dispatch the loginUserAsync", () => {
      store.dispatch(loginUserAsync({ repo, user }));
      expect(repo.login).toHaveBeenCalled();
    });

    test("Then it should set the token to undefined in the state", () => {
      store.dispatch(ac.logoutUser());
      const state = store.getState().users;
      expect(state.token).toBe(undefined);
    });
  });
});
