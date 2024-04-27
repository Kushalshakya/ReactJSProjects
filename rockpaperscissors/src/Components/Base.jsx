import React, { useEffect, useState } from 'react';

export default function Base() {
    return (
        <>
            <div id="base" className="base w-50 h-50 rounded overflow-hidden">
                <div className="base-container">
                    <img src="/src/images/Rock-gesture.png" className='left' />
                    <img src="/src/images/Rock-gesture.png" className='right' />
                </div>
            </div>
        </>
    );
}
