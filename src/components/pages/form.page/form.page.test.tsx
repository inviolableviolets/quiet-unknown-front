import { render, screen } from "@testing-library/react";
import FormPage from "./form.page";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../../store/store";
import { Provider } from "react-redux";

jest.mock("../../../config.ts", () => ({
  url: "",
}));
describe("Given a FormPage component", () => {
  describe("When it is intantiated", () => {
    render(
      <Router>
        <Provider store={store}>
          <FormPage></FormPage>
        </Provider>
      </Router>
    );

    test("Then it should be in the document", () => {
      const element = screen.getAllByRole("heading");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
