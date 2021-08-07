"use strict";
import { Restaurant } from "./services/wolt/restaurants"
import * as EventHandler from "./EventHandler"
import Queue from "queue"

const q = Queue();
//This promise will resolve when the network call succeeds
//Feel free to make a REST fetch using promises and assign it to networkPromise
const trackStatus = async () => {
    const TrackedRestaurant = new Restaurant(process.env.WOLT_RESTAURANT)
    const isAvailable = await TrackedRestaurant.getIsAvailable()
    if (isAvailable)
        EventHandler.emitRestaurantAvailable(TrackedRestaurant)
    else
        EventHandler.emitRestaurantUnavailable(TrackedRestaurant)
}

q.autostart = true

setInterval(() => {
    q.push(trackStatus)
}, 30000)


