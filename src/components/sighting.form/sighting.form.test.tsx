import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { MemoryRouter as Router } from "react-router-dom";
import SightingForm from "./sighting.form";
import "@testing-library/jest-dom";
import { useSightings } from "../../hooks/use.sightings";

jest.mock("../../hooks/use.sightings", () => ({
  useSightings: jest.fn().mockReturnValue({
    handleCreateSighting: jest.fn(),
  }),
}));

describe("Given SightingForm component", () => {
  describe("When rendered", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <SightingForm></SightingForm>
          </Router>
        </Provider>
      );
    });
    test("Then it should have a submit button", () => {
      const submitButton = screen.getByRole("button");
      expect(submitButton).toBeInTheDocument();
    });

    test("Then the handleCreateSighting should be called", async () => {
      const form = screen.getByRole("form");
      await fireEvent.submit(form);
      expect(useSightings().handleCreateSighting).toHaveBeenCalled();
    });
  });
});
