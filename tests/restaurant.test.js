import { Restaurant } from "../src/services/wolt/restaurants";
import fs from 'fs'
import { JSDOM } from "jsdom"
import path from "path"

const GDBRestaurant_online = new Restaurant("gdb");

const GDBRestaurant_offline = new Restaurant("gdb");


GDBRestaurant_online.getData = async () => {

	const json = await fs.promises.readFile(path.join(__dirname, "res/gdb_online.json"))
	return (JSON.parse(json)).results[0]
}

GDBRestaurant_offline.getData = async () => {

	const json = await fs.promises.readFile(path.join(__dirname, "res/gdb_offline.json"))
	return (JSON.parse(json)).results[0]
}

test('correct status unavailable', async () => {
	const status = await GDBRestaurant_offline.getIsAvailable()
	expect(status).toBe(false)
});

test('correct status available', async () => {
	const status = await GDBRestaurant_online.getIsAvailable()
	expect(status).toBe(true)
});