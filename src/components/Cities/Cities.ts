import {useEffect, useReducer} from "react";
import {cities} from "../../constants";


const reducer = (state: string[], action: string) => {
    return state.filter(item => item !== action)
}
const Cities = (): [string[], (str: string) => void] => {
    const curCities = cities
    const [currentCities, filterCurrentCities] = useReducer(reducer, curCities);
    useEffect(() => {
        console.log(curCities);
    }, [curCities]);
    return [currentCities, filterCurrentCities]
}
export default Cities
