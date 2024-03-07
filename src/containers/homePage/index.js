import React, { useState } from 'react'
import "./styles.css";
import { CrossIcon, BurgerMenuIcon, SearchIcon} from '../../components/icons';
import Button from '../../components/button';
import HeadStaticIcons from '../../components/head';

const HomePage = () => {
    const [displayHomePage, setDisplayHomePage] = useState(true);
    const [displayWidgetPage, setDisplayWidgetPage] = useState(false);

    const onClickCancel = () => {
    setDisplayHomePage(false);
    setDisplayWidgetPage(true);
    }
    return (
        <>
            {displayHomePage && <div className='homepage-container'>
                <div className='homepage-container-image'>
                <HeadStaticIcons/>
                    <div className='flex w-90 justify-between pr-16 pl-8 mt-6 place-items-center'>
                        <CrossIcon onClick={onClickCancel}/>
                        <Button />
                    </div>
                    <div class="font-abhaya font-bold text-5xl text-left text-white mt-24 ml-8 tracking-wide">
                    New York,<span class="block">United States</span>
                    </div>
                </div>
            </div>}
            {displayWidgetPage && <div className='homepage-container bg-slate-100'>
                <div className='border-2 border-red-400 h-100' style={{height:"100%"}}>
                <HeadStaticIcons/>
                    <div className='flex w-90 justify-between pr-16 pl-8 mt-6 place-items-center'>
                        <BurgerMenuIcon onClick={onClickCancel}/>
                        <SearchIcon/>
                    </div>
                    <div class="font-abhaya font-bold text-5xl text-left text-white mt-24 ml-8 tracking-wide">
                    New York,<span class="block">United States</span>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default HomePage;