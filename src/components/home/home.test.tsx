import { render, screen } from "@testing-library/react";
import Home from "./home";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../store/store";
import { Provider } from "react-redux";

jest.mock("../../config.ts", () => ({
  url: "",
}));
describe("Given a Home component", () => {
  describe("When it is intantiated", () => {
    render(
      <Router>
        <Provider store={store}>
          <Home></Home>
        </Provider>
      </Router>
    );

    test("Then it should be in the document", () => {
      const element = screen.getAllByRole("banner");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
