import EventEmitter from "events"
import {RESTAURANT_AVAILABLE, RESTAURANT_UNAVAILABLE} from "./constants"
import {sendMessage} from "../telegram"

const current_status =  { status : null }

const EventHandler = new EventEmitter();

EventHandler.on(RESTAURANT_AVAILABLE, (restaurant) => {
    if ( !current_status.status || current_status.status === RESTAURANT_UNAVAILABLE ){
        const message = `${restaurant.name} is now available :)\n ${restaurant.url}`
        sendMessage(message)
        current_status.status = RESTAURANT_AVAILABLE
    }
});

EventHandler.on(RESTAURANT_UNAVAILABLE, (restaurant) => {
    if ( !current_status.status || current_status.status === RESTAURANT_AVAILABLE ){
        const message = `${restaurant.name} is now unavailable :(`
        sendMessage(message)
        current_status.status = RESTAURANT_UNAVAILABLE
    }
});


export const emitRestaurantAvailable = (restaurant) => { 
    EventHandler.emit(RESTAURANT_AVAILABLE, restaurant)
}

export const emitRestaurantUnavailable = (restaurant) => { 
    EventHandler.emit(RESTAURANT_UNAVAILABLE, restaurant)
}

export const getStatus = () => current_status.status