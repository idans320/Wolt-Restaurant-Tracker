import { WOLT_URL_RESTAURANT_SITE, WOLT_URL_VENUES_API } from "./constants";
import fetch from "node-fetch"

export class Restaurant {
  constructor(name) {
    this.name = name;
    this.apiUrl = `${WOLT_URL_VENUES_API}/${this.name}`
    this.website = `${WOLT_URL_RESTAURANT_SITE}/${this.name}`
  }
  async getData() {
    const data = await fetch(this.apiUrl);
    const json = await data.json()
    return json.results[0]
  }
  async getIsAvailable() {
    const resturantData = await this.getData();
    const isAvaliable = !!resturantData.online
    return isAvaliable;
  }
}