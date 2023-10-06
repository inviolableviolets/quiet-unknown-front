import { Sighting } from "../models/sighting";
import { SightingRepository } from "./sighting.repository";

describe("Given the SightingRepository class", () => {
  const mockToken = "testtoken";

  let sightingRepository: SightingRepository;

  beforeEach(() => {
    sightingRepository = new SightingRepository("http://test.com/", mockToken);
  });
  describe("When calling the getAll method", () => {
    test("Then it should fetch data from the API and return the response", async () => {
      const mockData = [{}];
      const expectedUrl = "http://test.com/sighting";

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockData),
      });

      const response = await sightingRepository.getAll();

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
      expect(response).toEqual(mockData);
    });

    test("Then it should throw an error if the fetch is not successful", async () => {
      const expectedUrl = "http://test.com/sighting";
      const mockErrorMessage = "No data found";
      const error = new Error("Error: 400. No data found");

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: mockErrorMessage,
      });

      await expect(sightingRepository.getAll()).rejects.toThrow(error);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
    });
  });

  describe("When calling the create method", () => {
    test("Then it should fecth data from the API and return the response", async () => {
      const sightingData = {} as unknown as FormData;
      const expectedUrl = "http://test.com/sighting/form";

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(sightingData),
      });

      const response = await sightingRepository.create(sightingData);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "POST",
        body: sightingData,
        headers: { Authorization: "Bearer " + mockToken },
      });
      expect(response).toEqual(sightingData);
    });
  });

  describe("When calling the update method", () => {
    test("Then it should fetch data from the API and return the response", async () => {
      const sightingData = { id: "1" } as unknown as Partial<Sighting>;
      const expectedUrl = `http://test.com/sighting/${sightingData.id}`;

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(sightingData),
      });

      const response = await sightingRepository.update(sightingData);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "PATCH",
        body: JSON.stringify(sightingData),
        headers: {
          // "Content-Type": "application/json",
          Authorization: "Bearer " + mockToken,
        },
      });
      expect(response).toEqual(sightingData);
    });
  });

  describe("When calling the delete method", () => {
    test("Then it should send a DELETE request to the API and return the response status", async () => {
      const sightingId = "1";
      const expectedUrl = `http://test.com/sighting/${sightingId}`;

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
      });

      const response = await sightingRepository.delete(sightingId);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "DELETE",
        headers: {
          // "Content-Type": "application/json",
          Authorization: "Bearer " + mockToken,
        },
      });
      expect(response).toEqual(true);
    });
  });
});
