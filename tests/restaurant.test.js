import {Restaurant} from "../src/services/wolt/restaurants";
import fs from 'fs'
import {JSDOM} from "jsdom"
import path from "path"

const GDBRestaurant = new Restaurant("gdb");

GDBRestaurant.getHtml = async () => {
	
	const html = await fs.promises.readFile(path.join(__dirname,"res/GDB.html"))
	const dom = new JSDOM(html)
	return dom
} 

const lilush = new Restaurant("lilush");

lilush.getHtml = async () => {
	
	const html = await fs.promises.readFile(path.join(__dirname,"res/lilush.html"))
	return html
} 


GDBRestaurant.getHtml = async () => {
	
	const html = await fs.promises.readFile(path.join(__dirname,"res/GDB.html"))
	return html
} 


test('correct status unavailable', async () => {
	  const status = await GDBRestaurant.getIsAvailable()
	expect(status).toBe(false)
});

test('correct status available', async () => {
	const status = await lilush.getIsAvailable()
  expect(status).toBe(true)
});