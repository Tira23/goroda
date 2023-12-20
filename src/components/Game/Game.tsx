import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';
import Header from "../Header/Header";
import icon from '../../static/Icon.svg'
import Word from "../Word/Word";
import TimeStrip from "../TimeStrip/TimeStrip";
import GameOver from "../GameOver/GameOver";
import {IWord} from "../../Types";
import Timer from "../Timer/Timer";
import Cities from "../Cities/Cities";
import charForFind from "../CharForFind/CharForFind";

const Game = () => {

    const [time, reset, startTheGame] = Timer()
    const [cities, filterCities] = Cities()
    const [placeholder, setPlaceholder] = useState(`Напишите любой город, например: Где вы живете?`);
    const [isStarted, setIsStarted] = useState(false);
    const [isAiThink, toggleIsAiThink] = useReducer(state => !state, false);
    const [wordArray, setWordArray] = useReducer((prev: IWord[], currentWord: IWord) => ([...prev, currentWord]), [] as IWord[]);
    const input = useRef<HTMLInputElement>(null);

    const window = useRef<HTMLDivElement>(null);
    const aiThinkStyle = isAiThink ? 'bg-zinc-400' : 'bg-violet-600 cursor-pointer hover:bg-purple-500 transition delay-50 hover:shadow-130 ease-in-out '

    const send = useCallback((word = input.current?.value) => {
        if (!word) {
            return
        }

        const [curWord, currentLastChar] = charForFind(word)

        setPlaceholder(`напишите город на ${currentLastChar}`)
        const wordRepeat = wordArray.find(item => item.name === curWord)

        if (wordRepeat) {
            const [, prevLastChar] = charForFind(wordArray.at(-1)!.name)
            input.current!.value = ''
            setPlaceholder(`Такой город уже был, вам на ${prevLastChar}`)
            return
        }
        if (wordArray.length && !isAiThink) {
            const [, prevLastChar] = charForFind(wordArray.at(-1)!.name)
            const findCity = cities.find(item => item.toLowerCase() === curWord.toLowerCase())
            if (!findCity) {
                input.current!.value = ''
                setPlaceholder(`А точно такой город доступен? Вам на ${prevLastChar}`)
                return
            }
        }
        const currentWord = {
            name: curWord,
            AI: isAiThink,
            id: Date.now()
        }
        filterCities(currentWord.name)
        reset()
        startTheGame(true)
        toggleIsAiThink()
        setIsStarted(true)
        setWordArray(currentWord)
        if (input.current?.value) {
            input.current.value = ''
        }


    },[isAiThink])

    const listen = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            send()
        }
    }
    useEffect(() => {
        window.current?.scroll({
            top: window.current.scrollHeight
        })
    }, [window.current?.scrollHeight]);

    useEffect(() => {
        if (isAiThink) {

            const [, currentLastChar] = charForFind(wordArray.at(-1)!.name)
            setTimeout(() => {
                const currentWord = cities.find(item => item[0] === currentLastChar)
                if (currentWord) {
                    send(currentWord)
                }
            }, 252500 - cities.length * 100)

        } else {
            input.current?.focus()
            input.current?.addEventListener('keypress', listen)
        }
        return () => {
            input.current?.removeEventListener('keypress', listen)
        }
    }, [isAiThink])


    return (
        <>
            {time < 0 ? <GameOver/> : <>
                <Header time={time} isAiThink={isAiThink}/>
                <div className={`relative `}>
                    <TimeStrip className="bg-zinc-100 w-full"/>
                    <TimeStrip className={`absolute bg-violet-300  left-0 top-0`} time={time}/>
                </div>
                <div ref={window}
                     className={`custom-scroll w-full h-80 py-5 px-4 overflow-auto scroll-p-5`}>
                    {isStarted
                        ? wordArray.map(({name, AI, id}) => <Word str={name} key={id} AI={AI}/>)
                        : <div className={`w-full h-full flex justify-center items-center text-zinc-400`}>
                            <span>Первый участник вспоминает города...</span>
                        </div>
                    }
                </div>
                {isStarted && <div className={`flex justify-center text-zinc-400`}>
                    <span>всего перечислено городов: {wordArray.length} </span>
                </div>}
                <div className={`h-12 p-2 pl-3 gap-4 m-4 flex justify-between  items-center bg-gray-100 rounded-md`}>
                    <input
                        placeholder={placeholder}
                        className={`w-full placeholder:zinc-400 text-zinc-700 border-none outline-none bg-gray-100`}
                        ref={input}
                    />
                    <button
                        onClick={() => send()}
                        className={`rounded ${aiThinkStyle} p-1`}
                        disabled={isAiThink}
                    >
                        <img src={icon} alt='отправить'/>
                    </button>
                </div>
            </>}
        </>
    );
};

export default Game
