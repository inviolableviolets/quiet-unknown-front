import { SightingCard } from "./sighting.card";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given the component SightingCard", () => {
  describe("When it is instantiated", () => {
    render(
      <Router>
        <SightingCard
          item={{
            id: "1",
            description: "",
            title: "",
            region: "Africa",
            image: {
              mimetype: "mimetype",
              size: 2,
              url: "as",
              urlOriginal: "as",
            },
            year: 1234,
            owner: {
              id: "string",
              userName: "string",
              email: "string",
              password: "string",
              isLogged: false,
            },
          }}
        ></SightingCard>
      </Router>
    );
    test("Then it should should be in the document", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
});
