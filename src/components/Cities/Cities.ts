import {useReducer} from "react";
import {bigCities} from "../../constants";


const Cities = (): [string[], (str: string) => void] => {
    const reducer = (state: string[], action: string) => {
        return state.filter(item => item !== action)
    }
    const [currentCities, filterCurrentCities] = useReducer(reducer, bigCities.map(item => item.city));
    console.log('render');
    return [currentCities, filterCurrentCities]
}
export default Cities
