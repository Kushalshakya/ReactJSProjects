import React, { useState, useEffect, useRef } from 'react'
import Button from '@mui/material/Button'
import './StopWatch.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CloseIcon from '@mui/icons-material/Close';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function StopWatch() {

    const [isTimerRunning, setTimerRunning] = useState(false)
    const [time, setTime] = useState(0)
    const intervalRef = useRef(null)
    const timerRef = useRef(0)

    useEffect(() => {
        if (isTimerRunning) {
            intervalRef.current =  setInterval(() => {
                setTime(Date.now() - timerRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalRef.current)
        }

    }, [isTimerRunning])

    function startTimer() {
        setTimerRunning(true)
        timerRef.current = Date.now() - time;
    }

    function stopTimer() {
        setTimerRunning(false)
    }

    function resetTimer() {
        setTimerRunning(false);
        setTime(0);
    }

    function timerDisplay() {
        let hours = Math.floor(time / (1000 * 60 * 60));
        let minutes = Math.floor(time / (1000 * 60) % 60);
        let seconds = Math.floor(time / (1000) % 60);

        hours = String(hours).padStart(2, '0')
        minutes = String(minutes).padStart(2, '0')
        seconds = String(seconds).padStart(2, '0')

        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div id="stopwatch" className="stopwatch w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="stopwatch-container">
                <div className="timerDisplay p-3 text-center text-white rounded">{timerDisplay()}</div>
                <div className="buttons d-flex gap-2 py-3">
                    <Button onClick={startTimer} variant={'contained'} color="success" startIcon={<AccessAlarmIcon />}>Start</Button>
                    <Button onClick={stopTimer} variant={'contained'} color="error" startIcon={<CloseIcon />}>Stop</Button>
                    <Button onClick={resetTimer} variant={'contained'} startIcon={<RestartAltIcon />}>Reset</Button>
                </div>
            </div>
        </div>
    )
}
