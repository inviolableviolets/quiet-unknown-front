import { render, screen } from "@testing-library/react";
import DetailsPage from "./details.page";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../../store/store";
import { Provider } from "react-redux";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ id: "1" }),
}));

jest.mock("../../../hooks/use.sightings", () => ({
  useSightings: jest.fn().mockReturnValue({
    sightings: [
      {
        id: "1",
        title: "Viriato",
        image: { url: "viriato.jpg" },
        owner: { userName: "adsaa" },
        description: "abcd",
        year: 1234,
      },
      {
        id: "2",
        title: "Oumuamua",
        image: { url: "oumuamua.jpg" },
        owner: { userName: "asd" },
        description: "abcde",
        year: 2345,
      },
    ],
  }),
}));

describe("Given a DetailsPage component", () => {
  describe("When it is intantiated", () => {
    render(
      <Router>
        <Provider store={store}>
          <DetailsPage></DetailsPage>
        </Provider>
      </Router>
    );

    test("Then it should be in the document", () => {
      const element = screen.getAllByRole("heading");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
