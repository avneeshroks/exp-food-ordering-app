import axios from 'axios';

export const fetchRestaurants = async (setRestaurants) => {
    try {
        // fetch the list of the restaurants and save it in state

        let restaurants = await axios.get('http://localhost:8081/restaurants')
        setRestaurants(restaurants.data);
    } catch (error) {
        console.log(`Error fetching restaurants`)
    }
}