import { User } from "../models/user";
import "@testing-library/jest-dom";
import { useUsers } from "./use.users";
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { MemoryRouter as Router } from "react-router-dom";
import { UserRepository } from "../services/user.repository";
import userEvent from "@testing-library/user-event";
import { ac, loginUserAsync, registerUserAsync } from "../redux/users.slice";

jest.mock("../config.ts", () => ({
  url: "",
}));

const mockUser = {
  userName: "test",
  email: "test@email.com",
} as unknown as User;
const mockRepo = {
  register: jest.fn(),
  login: jest.fn(),
} as unknown as UserRepository;

function TestComponent() {
  const { handleRegisterUser, handleLoginUser, handleLogoutUser } = useUsers();

  return (
    <>
      <button onClick={() => handleRegisterUser(mockUser)}></button>
      <button onClick={() => handleLoginUser(mockUser)}></button>
      <button onClick={() => handleLogoutUser()}></button>
    </>
  );
}

describe("Given the useUsers custom hook", () => {
  let elements: HTMLElement[];

  beforeEach(async () => {
    await act(async () =>
      render(
        <Router>
          <Provider store={store}>
            <TestComponent></TestComponent>
          </Provider>
        </Router>
      )
    );
    elements = screen.getAllByRole("button");
  });

  describe("When is rendered", () => {
    test("Then the handleRegisterUser function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[0]);
        await act(async () => {
          store.dispatch(registerUserAsync({ repo: mockRepo, user: mockUser }));
        });
        expect(mockRepo.register).toHaveBeenCalled();
      });
    });

    test("Then the handleLoginUser function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[1]);
        await act(async () => {
          store.dispatch(loginUserAsync({ repo: mockRepo, user: mockUser }));
        });
        expect(mockRepo.login).toHaveBeenCalled();
      });
    });

    test("Then the handleLogoutUser function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[2]);
        store.dispatch(ac.logoutUser());
      });
    });
  });
});
