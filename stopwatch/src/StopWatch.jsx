import React from 'react'
import Button from '@mui/material/Button'
import './StopWatch.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CloseIcon from '@mui/icons-material/Close';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function StopWatch() {
    function startTimer(){

    }

    function stopTimer(){

    }

    function resetTimer(){

    }

    return (
        <div id="stopwatch" className="stopwatch w-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="stopwatch-container">
                <div className="timerDisplay p-3 text-center text-white rounded">00:00:00</div>
                <div className="buttons d-flex gap-2 py-3">
                    <Button onClick={startTimer} variant={'contained'} color="success" startIcon={<AccessAlarmIcon />}>Start</Button>
                    <Button onClick={stopTimer} variant={'contained'} color="error" startIcon={<CloseIcon />}>Stop</Button>
                    <Button onClick={resetTimer} variant={'contained'} startIcon={<RestartAltIcon />}>Reset</Button>
                </div>
            </div>
        </div>
    )
}
