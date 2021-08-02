import { WOLT_URL_RESTAURANT } from "./constants";
import got from "got";
import { JSDOM } from "jsdom";

export class Restaurant {
  constructor(name) {
    this.name = name;
  }
  async getHtml() {
    const html = await got.get(`${WOLT_URL_RESTAURANT}/${this.name}`);
    const dom = new JSDOM(html.data);
    return dom;
  }
  async getIsAvailable() {
    const html = await this.getHtml();
    const isAvaliable = !!html.window.document.querySelector(
      'span[data-localization-key="order.empty"]'
    );
    return isAvaliable;
  }
}