import {useEffect, useReducer} from "react";
import {CitiesGet, cities} from "../../constants";


const reducer = (state: string[], action: string) => {
    return state.filter(item => item !== action)
}
const Cities = (): [string[], (str: string) => void] => {
    const curCities = CitiesGet() || cities
    const [currentCities, filterCurrentCities] = useReducer(reducer, curCities);
    useEffect(() => {
        console.log(curCities);
    }, [curCities]);
    return [currentCities, filterCurrentCities]
}
export default Cities
