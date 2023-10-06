import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router, useNavigate } from "react-router-dom";
import Login from "./login";
import { store } from "../../store/store";
import { useUsers } from "../../hooks/use.users";
import Swal from "sweetalert2";
import userEvent from "@testing-library/user-event";

jest.mock("../../hooks/use.users", () => ({
  useUsers: jest.fn().mockReturnValue({
    handleLoginUser: jest.fn(),
    loginError: null,
  }),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn().mockReturnValue(jest.fn()),
}));

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

describe("Given Login component", () => {
  describe("When the component is rendered", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>
      );
    });

    test("Then the 'Send' button should be in the form", async () => {
      const submitButton = screen.getByText("SEND");
      expect(submitButton).toBeInTheDocument();
    });

    test("Then the handleLoginUser function should be called on form submit", async () => {
      const form = screen.getByLabelText("form") as HTMLFormElement;
      const userInput = screen.getByPlaceholderText(
        "USER/EMAIL"
      ) as HTMLInputElement;
      const passwordInput = screen.getByPlaceholderText(
        "PASSWORD"
      ) as HTMLInputElement;

      await userEvent.type(userInput, "test");
      await userEvent.type(passwordInput, "1234");

      fireEvent.submit(form);
      expect(useUsers().handleLoginUser).toHaveBeenCalled();
    });
  });

  describe("When the component is rendered having the loginError value equal to false", () => {
    beforeEach(() => {
      (useUsers as jest.Mock).mockReturnValue({
        handleLoginUser: jest.fn(),
        loginError: false,
      });

      render(
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>
      );
    });

    test("Then the useNavigate function should be used", async () => {
      const form = screen.getByLabelText("form") as HTMLFormElement;
      await fireEvent.submit(form);
      expect(useNavigate()).toHaveBeenCalled();
    });
  });

  describe("When the component is rendered having the loginError value equal to true", () => {
    beforeEach(() => {
      (useUsers as jest.Mock).mockReturnValue({
        handleLoginUser: jest.fn(),
        loginError: true,
      });

      render(
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>
      );
    });

    test("Then the useNavigate function should not be used", async () => {
      const form = screen.getByLabelText("form") as HTMLFormElement;
      await fireEvent.submit(form);
      expect(Swal.fire).toHaveBeenCalled();
    });
  });
});
