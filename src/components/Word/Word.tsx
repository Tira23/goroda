import * as React from 'react';
import {FC} from 'react';

type Props = {
    str: string
    AI: boolean
};
const Word: FC<Props> = ({str, AI}) => {
    const rounded = AI ? 'rounded-bl-none bg-violet-50 text-regular' : 'rounded-br-none bg-violet-600 text-white'
    const justify = AI ? 'justify-start' : 'justify-end'
    const padding = AI ? 'px-4' : 'px-3'
    return (
        <div className={`flex ${justify} mb-2`}>
            <div className={`${padding} py-1.5 inline-block rounded-xl ${rounded}`}>
                <span>{str}</span>
            </div>
        </div>
    );
};

export default Word
