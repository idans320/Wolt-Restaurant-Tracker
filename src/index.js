import { Restaurant } from "./services/wolt/restaurants"
import * as EventHandler from "./EventHandler"

async function main() {
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

    //This promise will resolve when 2 seconds have passed
    const timeOutPromise = new Promise(function (resolve, reject) {
        // 2 Second delay
        setTimeout(resolve, 60000, 'Timeout Done');
    });

    await trackStatus()

    await timeOutPromise;

    await main();
}

console.log("Listening to GDB status")

main();

