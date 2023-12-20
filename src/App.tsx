import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import './App.css'
import Game from "./components/Game/Game";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome/>,
    },
    {
        path: "/game",
        element: <Game/>,
    },

]);

function App() {
    return (
        <React.StrictMode>
            <div
                className={`overflow-hidden leading-normal font-normal font-["Helvetica_Neue"] bg-gray-200 w-screen h-screen flex flex-center justify-center items-center`}>
                <div className={`rounded-2xl shadow-130 bg-white max-w-xl tablet:w-full`}>
                    <RouterProvider router={router}/>
                </div>
            </div>
        </React.StrictMode>
    );
}

export default App;
