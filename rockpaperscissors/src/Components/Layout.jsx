import React, {useEffect, useState} from 'react'
import Buttons from './Buttons'
import Base from './Base'
import PointsTable from './PointsTable'

export default function Layout() {
    const [botInput, setBotInput] = useState(0);
    useEffect(() => {
        setBotInput(() => {
            let getRandomBotInput = Math.floor(Math.random() * 3);
            return getRandomBotInput;
        })
    })
    function startCounter() {
        // User must have time for selection which is 3second
        // After 3s the bot output and the user output should be sended as a props to the Base Component
    }


    
    return (
        <>
            <Base botInput={botInput}/>
            <Buttons />
            <button onClick={startCounter} className='btn play-btn bg-white px-4 fs-5'>Play</button>
            <PointsTable />
        </>
    )
}
