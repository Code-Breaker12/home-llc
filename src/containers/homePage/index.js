import React from 'react'
import "./styles.css";
import { CrossIcon, TimeStyle, WifiIcon, NetworkIcon, BatteryIcon } from '../../components/icons';
import Button from '../../components/button';

const HomePage = () => {
    return (
        <>
            <div className='homepage-container'>
                <div className='homepage-container-image'>
                    <div className="head">
                        <div><TimeStyle /></div>
                        <div className="head-right">
                            <span><NetworkIcon /></span>
                            <span><WifiIcon /></span>
                            <span><BatteryIcon /></span>
                        </div>
                    </div> 
                    <div className='flex w-90 justify-between pr-16 pl-8 mt-6 place-items-center'>
                    <CrossIcon />
                    <Button/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;