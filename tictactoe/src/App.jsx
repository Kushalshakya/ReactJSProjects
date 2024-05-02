import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CloseIcon from '@mui/icons-material/Close';

export default function App() {
    const [btnStatus, setBtnStatus] = useState("Empty");

    const btnEl = document.querySelectorAll('.app-container .box');
    useEffect(() => {
        btnEl.forEach((val) => {
            console.log(val)
        })
    }, [])

    return (
        <>
            <div id="App" className="app d-flex w-100 vh-100 align-items-center justify-content-center overflow-hidden">
                <div className="app-container d-flex flex-wrap">
                    <div className="box1 box border-top-0 border-start-0"></div>
                    <div className="box2 box border-top-0"></div>
                    <div className="box3 box border-top-0 border-end-0"></div>
                    <div className="box4 box border-start-0"></div>
                    <div className="box5 box"></div>
                    <div className="box6 box border-end-0"></div>
                    <div className="box7 box border-start-0 border-bottom-0"></div>
                    <div className="box8 box border-botom-0 border-bottom-0"></div>
                    <div className="box9 box border-end-0 border-bottom-0"></div>
                </div>
                <div className="icons">
                    <CloseIcon sx={{color: "#fff", fontSize : "50px"}}/>
                    <PanoramaFishEyeIcon sx={{color: "#fff",  fontSize : "40px"}}/>
                </div>
            </div>
        </>
    )
}
