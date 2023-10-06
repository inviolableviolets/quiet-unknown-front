import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Submissions } from "./submissions";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";

jest.mock("../../config.ts", () => ({
  url: "",
}));
describe("Given a Submissions component", () => {
  describe("When it is instantiated", () => {
    render(
      <Router>
        <Provider store={store}>
          <Submissions></Submissions>
        </Provider>
      </Router>
    );

    test("Then it should be in the document", () => {
      const element = screen.getByRole("list");

      expect(element).toBeInTheDocument();
    });
  });
});
