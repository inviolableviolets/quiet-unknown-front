import { MemoryRouter as Router } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "../store/store";
import userEvent from "@testing-library/user-event";
import { act, render, screen } from "@testing-library/react";
import { useSightings } from "./use.sightings";
import { Sighting } from "../models/sighting";

jest.mock("../config", () => ({
  url: "",
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

const mockRegion = "Asia";
const mockId = "1";
const mockData = {} as unknown as Partial<Sighting>;
const mockUrl = "test";

const mockSighting = {
  title: "test",
  year: 1234,
  region: "Asia",
  description: "asdfghjklñqwertyuiop",
  image: {},
} as unknown as FormData;

function TestComponent() {
  const {
    handleLoadSightings,
    handleCreateSighting,
    handleEditSighting,
    handleDeleteSighting,
    handlePaging,
    loadFiltered,
  } = useSightings();

  return (
    <>
      <button onClick={() => handleCreateSighting(mockSighting)}></button>
      <button onClick={() => handleLoadSightings()}></button>
      <button onClick={() => handleEditSighting(mockData)}></button>
      <button onClick={() => handleDeleteSighting(mockId)}></button>
      <button onClick={() => handlePaging(mockUrl)}></button>
      <button onClick={() => loadFiltered(mockRegion)}></button>
    </>
  );
}

describe("Given the useUsers custom hook", () => {
  let elements: HTMLElement[];
  beforeEach(async () => {
    await act(() =>
      render(
        <Router>
          <Provider store={store}>
            <TestComponent></TestComponent>
          </Provider>
        </Router>
      )
    );
    elements = screen.getAllByRole("button");
  });
  describe("When is rendered", () => {
    test("Then the handleCreateSighting function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[0]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });

    test("Then the handleLoadSightings function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[1]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });

    test("Then the handleUpdateSighting function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[2]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });

    test("Then the handleDeleteSighting function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[3]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });

    test("Then the handlePaging function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[4]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });

    test("Then the handleLoadFiltered function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[5]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });
  });
});
