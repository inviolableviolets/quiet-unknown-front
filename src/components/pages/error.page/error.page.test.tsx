import { render, screen } from "@testing-library/react";
import ErrorPage from "./error.page";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../../store/store";
import { Provider } from "react-redux";

describe("Given the ErrorPage component", () => {
  describe("When it is intantiated", () => {
    render(
      <Router>
        <Provider store={store}>
          <ErrorPage></ErrorPage>
        </Provider>
      </Router>
    );

    test("Then it should be in the document", () => {
      const element = screen.getAllByRole("heading");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
