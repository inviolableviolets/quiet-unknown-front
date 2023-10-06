import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { SightingRepository } from "../services/sighting.repository";
import { useCallback, useMemo } from "react";
import {
  createSightingAsync,
  editSightingAsync,
  getSightingAsync,
  deleteSightingAsync,
} from "../redux/sightings.slice";
import { Sighting } from "../models/sighting";
import { url } from "../config";

export function useSightings() {
  const { sightings } = useSelector((state: RootState) => state.sightings);
  const { token } = useSelector((state: RootState) => state.users);

  const dispatch: AppDispatch = useDispatch();

  const repo: SightingRepository = useMemo(
    () => new SightingRepository(url, token as string),
    [token]
  );

  const handleLoadSightings = useCallback(async () => {
    await dispatch(getSightingAsync({ repo, url: url + "sighting" }));
  }, [repo, dispatch]);

  const handleCreateSighting = async (sighting: FormData) => {
    await dispatch(createSightingAsync({ repo, sighting }));
  };

  const handlePaging = async (url: string) => {
    await dispatch(getSightingAsync({ repo, url }));
  };

  const loadFiltered = async (region: string) => {
    await dispatch(getSightingAsync({ repo, url, region }));
  };

  const handleEditSighting = async (data: Partial<Sighting>) => {
    await dispatch(editSightingAsync({ repo, data }));
  };

  const handleDeleteSighting = async (id: Sighting["id"]) => {
    await dispatch(deleteSightingAsync({ repo, id }));
  };

  return {
    sightings,
    handleLoadSightings,
    handlePaging,
    handleCreateSighting: handleCreateSighting,
    loadFiltered,
    handleEditSighting,
    handleDeleteSighting,
  };
}
