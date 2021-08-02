import {Restaurant} from  "./services/wolt/restaurants"
import * as EventHandler from "./EventHandler"

const TrackedRestaurant = new Restaurant(process.env.WOLT_RESTAURANT)

setInterval(async () => { 
    const isAvailable = await TrackedRestaurant.getIsAvailable()
    if (isAvailable)
        EventHandler.emitRestaurantAvailable(TrackedRestaurant)
    else
        EventHandler.emitRestaurantUnavailable(TrackedRestaurant)
},5000)

console.log("Listening to GDB status")