import { AppRoutes } from "./app.routes";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Given the AppRoutes component", () => {
  describe("When it is instantiated with the Home route", () => {
    const homeMockComponent = jest.fn().mockReturnValue(<h1>Home</h1>);
    jest.mock("../home/home", () => homeMockComponent);

    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={[""]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Home");
    });

    test("Then it should be in the document", () => {
      expect(homeMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with the Login route", () => {
    const loginMockComponent = jest.fn().mockReturnValue(<h1>Login</h1>);
    jest.mock("../pages/login.page/login.page", () => loginMockComponent);

    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/login"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Login");
    });

    test("Then it should be in the document", () => {
      expect(loginMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with the Form route", () => {
    const formMockComponent = jest.fn().mockReturnValue(<h1>Form</h1>);
    jest.mock("../pages/form.page/form.page", () => formMockComponent);

    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/form"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Form");
    });

    test("Then it should be in the document", () => {
      expect(formMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with the Submissions route", () => {
    const submissionsMockComponent = jest
      .fn()
      .mockReturnValue(<h1>Submissions</h1>);
    jest.mock(
      "../pages/submissions.page/submissions.page",
      () => submissionsMockComponent
    );

    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/submissions"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Submissions");
    });

    test("Then it should be in the document", () => {
      expect(submissionsMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with the Details route", () => {
    const detailsMockComponent = jest.fn().mockReturnValue(<h1>Details</h1>);
    jest.mock("../pages/details.page/details.page", () => detailsMockComponent);

    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/details/:id"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Details");
    });

    test("Then it should be in the document", () => {
      expect(detailsMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with the Modify route", () => {
    const modifyMockComponent = jest.fn().mockReturnValue(<h1>Edit</h1>);
    jest.mock("../pages/modify.page/modify.page", () => modifyMockComponent);

    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/edit/:id"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Edit");
    });

    test("Then it should be in the document", () => {
      expect(modifyMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
