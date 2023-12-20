import React, {FC, memo} from 'react';

interface IProps {
    time?: number
    isAiThink: boolean
}

const Header: FC<IProps> = memo(({time = 0, isAiThink}) => {
    const minute = Math.floor(Math.round(time) / 60)
    const second = Math.round(time) % 60

    return (
        <>
            <div className={`flex justify-between w-576 tablet:w-full px-4 py-4-17`}>
                {isAiThink ? <div>Подождите, я думаю...</div> : <div>Сейчас ваша очередь</div>}
                <div>{minute}:{(second / 10) >= 1 ? second : '0' + second}</div>
            </div>
        </>
    );
});

export default Header
