import {Restaurant} from "../src/services/wolt/restaurants";
import {emitRestaurantAvailable, emitRestaurantUnavailable, getStatus} from "../src/EventHandler"
import {RESTAURANT_AVAILABLE, RESTAURANT_UNAVAILABLE} from "../src/EventHandler/constants"

const GDBRestaurant = new Restaurant("gdb");

test('test emit available restaurant ', async () => {
    emitRestaurantAvailable(GDBRestaurant)
    expect(getStatus()).toBe(RESTAURANT_AVAILABLE)
});


test('test emit unavailable restaurant ', async () => {
    emitRestaurantUnavailable(GDBRestaurant)
    expect(getStatus()).toBe(RESTAURANT_UNAVAILABLE)
});

