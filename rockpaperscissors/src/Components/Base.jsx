import React, { useEffect, useState } from 'react';
import Globals from './Globals';

export default function Base() {
    const [botInput, setBotInput] = useState(0);

    const imgURL = ['Rock', 'Paper', 'Scissors']
    useEffect(() => {
        setBotInput(() => {
            let getRandomBotInput = Math.floor(Math.random() * imgURL.length);
            console.log(botInput, "-----------", getRandomBotInput)
            return getRandomBotInput;
        })
    })
    return (
        <>
            <div id="base" className="base w-50 h-50 rounded overflow-hidden">
                <div className="base-container">
                    <img src="/src/images/Rock-gesture.png" alt="Rock-gesture" className='left' />
                    {
                        (
                            <img src={`/src/images/${imgURL[botInput]}-gesture.png`} alt={imgURL[botInput]} className='right' />
                        )
                    }
                </div>
            </div>
            <Globals botInput={imgURL[botInput]}/>
        </>
    );
}
