import React from 'react';
import Title from "../Title/Title";
import TimeStrip from "../TimeStrip/TimeStrip";
import {Link} from "react-router-dom";

const Welcome = () => {

    return (
        <>
            <Title/>
            <TimeStrip className="bg-zinc-100 "/>
            <div className={`text-zinc-700 gap-6 m-6 flex justify-between flex-col max-w-xl prose-sm`}>
                <span className={`flex items-center`}>Цель: Назвать как можно больше реальных городов.</span>
                <ul className={`my-0 list-disc`}>
                    <li>Запрещается повторение городов.</li>
                    <li>Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы пропускаем эту букву и
                        игрок должен назвать город на букву стоящую перед ъ или ь знаком.
                    </li>
                    <li>Каждому игроку дается 2 минуты на размышления, если спустя это время игрок не вводит слово
                        он считается проигравшим
                    </li>
                </ul>
                <Link to={'/'}
                      className={`hover:bg-purple-500 transition delay-100 hover:shadow-130 ease-in-out rounded bg-violet-600 w-32 mx-auto h-10 text-white`}
                >
                    <button className={`w-32 h-10`}>
                        Начать
                    </button>
                </Link>

            </div>
        </>
    );
};

export default Welcome
