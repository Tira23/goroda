import React, {FC, useEffect, useState} from 'react';

interface IProps {
    className?: string
    time?: number
}


const TimeStrip: FC<IProps> = ({className, time = 120}) => {
    const [percentageProgress, setPercentageProgress] = useState(0);
    useEffect(() => {
        setPercentageProgress(+((time / 120) * 100).toFixed(2))
    }, [time])
    return (
        <div
            className={`h-3px ${className}`}
            style={{width: `${percentageProgress}%`}}
        >
        </div>
    );
};

export default TimeStrip;
