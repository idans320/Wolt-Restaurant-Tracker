import { WOLT_URL_RESTAURANT } from "./constants";
import { request } from 'undici'
import { parse } from 'node-html-parser';

export class Restaurant {
  constructor(name) {
    this.name = name;
    this.url = `${WOLT_URL_RESTAURANT}/${this.name}`
  }
  async getHtml() {
    const { body } = await request(this.url);
    body.setEncoding('utf8')
    for await (const data of body) {
      return data
    }
  }
  async getIsAvailable() {
    const html = await this.getHtml();
    const dom = parse(html)
    const isAvaliable = !!dom.querySelector('span[data-localization-key="order.empty"]');
    return isAvaliable;
  }
}