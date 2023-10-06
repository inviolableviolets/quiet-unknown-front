import { render, screen } from "@testing-library/react";
import SubmissionsPage from "./submissions.page";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../../store/store";
import { Provider } from "react-redux";

jest.mock("../../../config.ts", () => ({
  url: "",
}));
describe("Given a SubmissionsPage component", () => {
  describe("When it is intantiated", () => {
    render(
      <Router>
        <Provider store={store}>
          <SubmissionsPage></SubmissionsPage>
        </Provider>
      </Router>
    );

    test("Then it should be in the document", () => {
      const element = screen.getAllByRole("heading");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
