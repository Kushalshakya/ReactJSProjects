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

    return (
        <>
            <Base botInput={botInput}/>
            <Buttons />
            <PointsTable />
        </>
    )
}
