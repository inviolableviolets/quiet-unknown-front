import { Sighting } from "../models/sighting";
import { ApiResponse } from "../types/api.response";

export class SightingRepository {
  constructor(public url: string, public token: string) {
    this.url += "sighting";
  }

  async getAll(url = this.url, region?: string): Promise<ApiResponse> {
    let urlToSend = "";
    !region ? (urlToSend = url) : (urlToSend = `${url}sighting?${region}`);
    const response = await fetch(urlToSend);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    const answer = (await response.json()) as ApiResponse;
    return answer;
  }

  async create(item: FormData): Promise<Sighting> {
    const response = await fetch(this.url + "/form", {
      method: "POST",
      body: item,
      headers: { Authorization: "Bearer " + this.token },
    });
    return response.json() as Promise<Sighting>;
  }

  async update(data: Partial<Sighting>): Promise<Sighting> {
    const response = await fetch(this.url + "/" + data.id, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        // "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      },
    });
    return response.json() as Promise<Sighting>;
  }

  async delete(id: Sighting["id"]): Promise<boolean> {
    const response = await fetch(this.url + "/" + id, {
      method: "DELETE",
      headers: {
        // "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      },
    });
    return response.ok;
  }
}
