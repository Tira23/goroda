import {useReducer} from "react";
import {cities} from "../../constants";


const reducer = (state: string[], action: string) => {
    return state.filter(item => item !== action)
}
const Cities = (): [string[], (str: string) => void] => {
    const [currentCities, filterCurrentCities] = useReducer(reducer, cities);
    return [currentCities, filterCurrentCities]
}
export default Cities
