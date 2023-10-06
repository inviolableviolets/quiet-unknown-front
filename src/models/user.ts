import { Sighting } from "./sighting";

export type User = {
  id: string;
  userName: string;
  email: string;
  password: string;
  isLogged: boolean;
  submissions?: Sighting[];
};
