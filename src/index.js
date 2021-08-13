"use strict";
import { Restaurant } from "./services/wolt/restaurants"
import * as EventHandler from "./EventHandler"
import Queue from "queue"

let q = Queue();
//This promise will resolve when the network call succeeds
//Feel free to make a REST fetch using promises and assign it to networkPromise
const trackStatus = () => {
    const TrackedRestaurant = new Restaurant(process.env.WOLT_RESTAURANT)
    TrackedRestaurant.getIsAvailable().then((isAvailable) => {
        if (isAvailable)
            EventHandler.emitRestaurantAvailable(TrackedRestaurant);
        else
            EventHandler.emitRestaurantUnavailable(TrackedRestaurant);

        q.emit('success', isAvailable, q.length)
    })
}

q.autostart = true

q.on('success', function (result, job) {
    q.end()
    setTimeout(() => {
        q.push(trackStatus)
    }, 1000)
})

q.push(trackStatus)