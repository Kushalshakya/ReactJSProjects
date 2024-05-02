import React from 'react';

export default function Base(props) {
    const imgURL = ['Rock', 'Paper', 'Scissors'];
    return (
        <>
        {imgURL[props.botInput]}
        
            <div id="base" className="base w-50 h-50 rounded overflow-hidden">
                <div className="base-container">
                    <img src="/src/images/Rock-gesture.png" alt="Rock-gesture" className='left' />
                    {
                        (
                            <img src={`/src/images/${imgURL[props.botInput]}-gesture.png`} alt={imgURL[props.botInput]} className='right' />
                        )
                    }
                </div>
            </div>
        </>
    );
}