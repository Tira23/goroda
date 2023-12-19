import {useCallback, useEffect, useState} from "react";

const Timer = (): [number, () => void, (bool: boolean) => void] => {

    const [time, setTime] = useState(120);
    const [start, setStart] = useState(false);
    const reset = () => {
        setTime(() => 120)
    }
    const startTheGame = (bool: boolean) => {
        setStart(bool)
    }

    const customTimer = useCallback(() => {
        setTime(prev => prev - 0.01)
    }, []);
    useEffect(() => {
        if (!start) {
            return
        }
        let timer: NodeJS.Timer;
        timer = setInterval(customTimer, 10)

        return () => {
            clearInterval(timer)
        }
    }, [start])

    return [time, reset, startTheGame]
}

export default Timer
