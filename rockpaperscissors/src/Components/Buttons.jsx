import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';

export default function Buttons() {
    const buttonImages = ['Rock', 'Hand', 'Paper'];
    useEffect(() => {
        const buttonEl = document.querySelectorAll('#button Button');
        buttonEl.forEach((btnClick) => {
            if (!btnClick.hasEventListener) {
                btnClick.addEventListener('click', () => {
                    let result = btnClick.querySelector('img');
                    if (result) {
                        console.log(result.getAttribute('data-value'));
                    }
                })
            }
            btnClick.hasEventListener = true;
        })
    }, [])


    const [wordIndex, setWordIndex] = useState(-1);
    const words = ['Rock', 'Paper', 'Scissors'];
    useEffect(() => {
        if (wordIndex === -1) return;

        const interval = setInterval(() => {
            setWordIndex(prevIndex => {
                let nextIndex = (prevIndex + 1) % words.length;
                if (nextIndex === 0) {
                    clearInterval(interval);
                }
                return nextIndex;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [wordIndex, words]);

    const startCounter = () => {
        if (wordIndex === -1) {
            setWordIndex(0);
        }
    };

    return (
        <>
            {wordIndex !== -1 && (
                <>
                    {words.map((word, index) => (
                        <div key={index} className={`counter position-absolute ${index === wordIndex ? 'fadeInOut' : ''}`}>
                            {word}
                        </div>
                    ))}
                </>
            )}

            <div id="button" className="buttons py-3">
                {
                    buttonImages.map((images, index) => (
                        <Button sx={{ borderRadius: '50%' }} key={index} >
                            <img src={`src/images/${images}.png`} width="100" data-value={images} />
                        </Button>
                    ))
                }
            </div>
            <button onClick={startCounter} className='btn play-btn bg-white px-4 fs-5'>Play</button>
        </>
    )
}
