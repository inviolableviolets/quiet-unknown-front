import { render, screen } from "@testing-library/react";
import { AreciboMessage } from "./arecibo.message";
import "@testing-library/jest-dom";

describe("Given a ComeBack component", () => {
  describe("When it is intantiated", () => {
    render(<AreciboMessage></AreciboMessage>);
    test("Then it should be in the document", () => {
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
