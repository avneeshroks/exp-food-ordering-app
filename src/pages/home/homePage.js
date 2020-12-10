import * as _ from 'lodash';
import { useEffect, useState } from "react";
import CardList from "../../components/cardList/cardList";
import Filter from "../../components/filter/filter";
import { fetchRestaurants } from './homePageApi';
import './homePageStyles.css';


function HomePage() {

    const [restaurantsFetched, setRestaurantsFetched] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchRestaurants(setRestaurantsFetched);
    }, [])  
    
    useEffect(() => {
        setRestaurants(restaurantsFetched)

        // filter based on what's changing

        const filtered = filterBasedOnSearch(restaurantsFetched, filters)

        setRestaurants(filtered);
    }, [restaurantsFetched, filters])

    return (
        <>
            <header className={'headerContainer'}>
                <h2>
                    Food Ordering App
                </h2>
            </header>
            { renderFilter(restaurants, setFilters) }
            { renderCardList(restaurants) }
        </>
    )
}

function filterBasedOnSearch(restaurantsFetched, filters) {
    console.log(filters)
    return restaurantsFetched.filter((restaurant) => {
        if(
            _.isEmpty(filters.filterText)
            && (
                _.isEmpty(filters.filterDropdown)
                || filters.filterDropdown === "0"
            )
        ) {
            return true
        }

        return restaurant.name.toLowerCase().includes(filters.filterText.toLowerCase())
    })
}

function renderCardList(restaurants) {
    const cardListProps = {
        cardListData : restaurants
    }

    return (
        <CardList {...cardListProps}></CardList>
    )
}

function renderFilter(restaurants, setFilters) {
    const filterProps = {
        cardListData : restaurants,
        setFilters,
    }

    return (
        <Filter {...filterProps}></Filter>
    )
}

export default HomePage;