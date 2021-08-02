import { WOLT_URL_RESTAURANT } from "./constants";
import got from "got";
import { JSDOM } from "jsdom";

export class Restaurant {
  constructor(name) {
    this.name = name;
    this.url = `${WOLT_URL_RESTAURANT}/${this.name}`
  }
  async getHtml() {
    const html = await got.get(this.url);
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