import { WOLT_URL_RESTAURANT } from "./constants";
import got from "got";
import { parse } from 'node-html-parser';

export class Restaurant {
  constructor(name) {
    this.name = name;
    this.url = `${WOLT_URL_RESTAURANT}/${this.name}`
  }
  async getHtml() {
    const html = await got.get(this.url);
    return html.body
  }
  async getIsAvailable() {
    const html = await this.getHtml();
    const dom = parse(html)
    const isAvaliable = !!dom.querySelector('span[data-localization-key="order.empty"]');
    return isAvaliable;
  }
}