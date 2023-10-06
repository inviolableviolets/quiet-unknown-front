import { User } from "../models/user";
import { ApiLoginResponse } from "../types/api.response";

export class UserRepository {
  constructor(public url: string) {
    this.url += "user";
  }

  async register(item: Partial<User>): Promise<User> {
    const url = this.url + "/register";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    return response.json() as Promise<User>;
  }

  async login(item: Partial<User>): Promise<ApiLoginResponse> {
    const url = this.url + "/login";
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Login error");
    return response.json();
  }
}
