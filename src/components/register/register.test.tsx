import { MemoryRouter as Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Register from "./register";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";
import { useUsers } from "../../hooks/use.users";
import Swal from "sweetalert2";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("../../hooks/use.users", () => ({
  useUsers: jest.fn().mockReturnValue({
    handleRegisterUser: jest.fn(),
  }),
}));

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

describe("Given the Register component", () => {
  describe("When register form is rendered", () => {
    let handleRegisterUserMock: jest.Mock;
    let SwalFireMock: jest.Mock;

    beforeEach(() => {
      handleRegisterUserMock = jest.fn();
      SwalFireMock = jest.fn();

      (useUsers as jest.Mock).mockReturnValue({
        handleRegisterUser: handleRegisterUserMock,
      });

      (Swal.fire as jest.Mock) = SwalFireMock;

      render(
        <Provider store={store}>
          <Router>
            <Register />
          </Router>
        </Provider>
      );
    });

    test("Then the handleRegisterUser should be called on form submit", async () => {
      const form = screen.getByLabelText("form") as HTMLFormElement;
      const usernameInput = screen.getByPlaceholderText(
        "USERNAME"
      ) as HTMLInputElement;
      const emailInput = screen.getByPlaceholderText(
        "EMAIL"
      ) as HTMLInputElement;
      const passwordInput = screen.getByPlaceholderText(
        "PASSWORD"
      ) as HTMLInputElement;

      await userEvent.type(usernameInput, "test");
      await userEvent.type(emailInput, "test@mail.com");
      await userEvent.type(passwordInput, "1234");

      fireEvent.submit(form);

      expect(handleRegisterUserMock).toHaveBeenCalledWith({
        userName: "test",
        email: "test@mail.com",
        password: "1234",
      });
      expect(usernameInput.value).toBe("");
      expect(emailInput.value).toBe("");
      expect(passwordInput.value).toBe("");
    });

    test("Then Swal.fire should be called on form submit", async () => {
      const form = screen.getByLabelText("form") as HTMLFormElement;

      fireEvent.submit(form);

      expect(SwalFireMock).toHaveBeenCalledWith({
        width: "20em",
        icon: "error",
        title: "ERROR",
        text: "ALL INPUTS ARE REQUIRED",
        background:
          "linear-gradient(to right, rgba(20, 20, 20), rgba(0, 0, 0))",
        color: "white",
        iconColor: "yellow",
        showConfirmButton: false,
        padding: "4em 0",
        timer: 2000,
      });
    });
  });
});
