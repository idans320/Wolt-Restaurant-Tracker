import { Restaurant } from "./services/wolt/restaurants"
import * as EventHandler from "./EventHandler"

const TrackedRestaurant = new Restaurant(process.env.WOLT_RESTAURANT)

const trackStatus = async () => {
	try {
		const isAvailable = await TrackedRestaurant.getIsAvailable()

		if (isAvailable) {
			EventHandler.emitRestaurantAvailable(TrackedRestaurant)
		} else {
			EventHandler.emitRestaurantUnavailable(TrackedRestaurant)
		}
	} catch (error) {
		console.error('Track status failed:', error)
	}

	setTimeout(trackStatus, 1000)
}

// Start the loop
trackStatus()
