import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./header";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { store } from "../../store/store";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

jest.mock("../../hooks/use.users", () => ({
  useUsers: () => ({ handleLogoutUser: jest.fn() }),
}));

describe("Given a Header component", () => {
  describe("When user is authenticated", () => {
    beforeEach(() => {
      (useSelector as jest.Mock).mockImplementation((selector) =>
        selector({
          users: { token: "fakeToken" },
        })
      );

      render(
        <Router>
          <Provider store={store}>
            <Header />
          </Provider>
        </Router>
      );
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("banner");
      expect(element).toBeInTheDocument();
    });

    test("Then LOGOUT and SUBMISSIONS should be in the document", () => {
      expect(screen.getByText("LOGOUT")).toBeInTheDocument();
      expect(screen.getByText("SUBMISSIONS")).toBeInTheDocument();
    });

    test("When menu button is clicked, menu should toggle", () => {
      const button = screen.getByRole("button");

      fireEvent.click(button);
      fireEvent.click(button);
    });
  });

  describe("When user is not authenticated", () => {
    beforeEach(() => {
      (useSelector as jest.Mock).mockImplementation((selector) =>
        selector({
          users: { token: null },
        })
      );

      render(
        <Router>
          <Provider store={store}>
            <Header />
          </Provider>
        </Router>
      );
    });

    test("Then LOGIN should be in the document", () => {
      expect(screen.getByText("LOGIN")).toBeInTheDocument();
    });

    test("When LOGIN is clicked, navigation should be triggered", () => {
      const loginLink = screen.getByText("LOGIN");
      fireEvent.click(loginLink);
    });
  });
});
