import React, {FC} from 'react';

interface IProps {
    youWinner?: boolean
    quantity?: number
    lastCity?: string
}

const GameOver: FC<IProps> = (props) => {
    const {youWinner, quantity, lastCity} = props
    return (
        <div className={`w-576 p-10 text-xl`}>
            <div className={`flex flex-col gap-8 items-center`}>
                <div className={`flex flex-col items-center`}>
                    {youWinner ?
                        <>
                            <span>Поздравляем тебя с победой!</span>
                            <span>Твой противник не вспомнил нужный город!</span>
                        </>
                        :
                        <>
                            <span>К сожалению твое время вышло!</span>
                            <span>Твой противник победил!</span>
                        </>
                    }
                </div>
                <div>
                    <span className={`${youWinner ? 'text-green-600' : 'text-red-600'}`}>00:00</span>
                </div>
                <div className={`flex flex-col items-center`}>
                    <span>Всего было перечислено городов: {quantity}</span>
                    <span>Очень не плохой результат!</span>
                </div>
                <div className={`flex flex-col gap-1.5 items-center`}>
                    <span>Последний город названный победителем</span>
                    <h2 className={`text-2xl`}><b>{lastCity}</b></h2>
                </div>
                <div>
                    <button className={`bg-violet-600 py-2 px-4 text-base`}> Начать новую игру</button>
                </div>
            </div>
        </div>
    );
}

export default GameOver;
