import { Sighting } from "../models/sighting";
import { SightingRepository } from "../services/sighting.repository";
import { store } from "../store/store";
import { ApiResponse, GetSightingPayload } from "../types/api.response";
import {
  createSightingAsync,
  deleteSightingAsync,
  editSightingAsync,
  getSightingAsync,
} from "./sightings.slice";

describe("Given the users slice reducer", () => {
  describe("When it is instantiated", () => {
    const mockSighting = {
      id: "1",
      title: "Big Oumuamua",
    } as unknown as FormData;
    const mockUpdatedSighting = {
      id: "1",
      title: "Little Oumuamua",
    } as unknown as Sighting;
    const mockId = "1" as Sighting["id"];
    const mockApiAnswer = {
      items: [{ id: "1", title: "Flying Goofy", region: "Europe" }],
      next: null,
      previous: null,
      count: 0,
    } as unknown as ApiResponse;

    const mockRepo: SightingRepository = {
      getAll: jest.fn().mockResolvedValue(mockApiAnswer),
      create: jest.fn().mockResolvedValue(mockSighting),
      update: jest.fn().mockResolvedValue(mockUpdatedSighting),
      delete: jest.fn().mockResolvedValue(true),
    } as unknown as SightingRepository;

    const mockPayload = {
      repo: mockRepo,
      url: "http://test.com/",
    } as unknown as GetSightingPayload;

    test("Then it should dispatch the getSightingAsync", () => {
      store.dispatch(getSightingAsync(mockPayload));
      expect(mockRepo.getAll).toHaveBeenCalled();
    });

    test("Then it should dispatch the createSightingAsync", () => {
      store.dispatch(
        createSightingAsync({ repo: mockRepo, sighting: mockSighting })
      );
      expect(mockRepo.create).toHaveBeenCalled();
    });

    test("Then it should dispatch the editSightingAsync", () => {
      store.dispatch(
        editSightingAsync({ repo: mockRepo, data: mockUpdatedSighting })
      );
      expect(mockRepo.update).toHaveBeenCalled();
    });

    test("Then it should dispatch the deleteSightingAsync", () => {
      store.dispatch(deleteSightingAsync({ repo: mockRepo, id: mockId }));
      expect(mockRepo.delete).toHaveBeenCalled();
    });

    test("Then it should not dispatch the deleteSightingAsync", () => {
      mockRepo.delete = jest.fn().mockResolvedValue(false);
      store.dispatch(deleteSightingAsync({ repo: mockRepo, id: "2" }));
      expect(mockRepo.delete).toHaveBeenCalled();
    });
  });
});
