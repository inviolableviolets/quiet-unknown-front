import { Sighting } from "../models/sighting";
import { User } from "../models/user";
import { SightingRepository } from "../services/sighting.repository";

export type ApiResponse = {
  items: Sighting[];
  next: string | null;
  previous: string | null;
  count: number;
};

export type ApiLoginResponse = {
  token: string;
  user: User;
};

export type GetSightingPayload = {
  repo: SightingRepository;
  url: string;
  region?: string;
};
