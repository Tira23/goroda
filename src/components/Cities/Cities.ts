import {useReducer} from "react";
import {bigCities} from "../../constants";

const reducer = (state: string[], action: string) => {
    return state.filter(item => item !== action)
}
const Cities = (): [string[], (str: string) => void] => {
    const [currentCities, filterCurrentCities] = useReducer(reducer, bigCities.map(item => item.city));
    return [currentCities, filterCurrentCities]
}
export default Cities
