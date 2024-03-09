import React, { useEffect, useState } from 'react'
import "./styles.css";
import { CrossIcon, BurgerMenuIcon, SearchIcon, Cloudy, LocationIcon } from '../../components/icons';
import Button from '../../components/button';
import HeadStaticIcons from '../../components/head';
import TinyBitmap from "./tiny-bitmap.png"
import Cloud from '../../components/cloud';
import AdditionalInfo from '../../components/aditional-info';
import Current from '../../services/current-data';
import { cloudData } from '../../data/cloud-data';
import { formattedDate } from '../../data/date';
import GetWeatherData from '../../services/get-weather-data';
import FetchAddress from '../../services/fetch-address';
import fetchHourlyWeatherData from '../../services/fetch-hourly-data';

const HomePage = () => {
    const [displayHomePage, setDisplayHomePage] = useState(true);
    const [displayWidgetPage, setDisplayWidgetPage] = useState(false);
    const [displayInputField, setDisplayInputField] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [country, setCountry] = useState('');
    const [mapWeatherData, setMapWeatherData] = useState('');


    const onClickCancel = () => {
        setDisplayHomePage(false);
        setDisplayWidgetPage(true);
    }
    const onClickBurgerMenu = () => {
        setDisplayWidgetPage(false);
        setDisplayHomePage(true);
    }
    const onClickSearchBar = () => {
        setDisplayInputField(true)
    }
    const handleInputChange = async (e) => {
        setInputValue(e.target.value);
        const data = await Current(inputValue);
        // console.log('Homepage data', data);
        const mappedData = cloudData(data);
        // console.log(mappedData);
    }

    const fetchWeatherData = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                try {
                    const addressData = await FetchAddress(latitude, longitude);
                    // console.log(addressData, '++++++++ADDRESS DATA++++++++');
    
                    if (addressData && addressData.status === 'OK') {
                        const country = addressData.results[0].address_components.find(component => component.types.includes('country')).long_name;
                        setCountry(country);
                        // console.log(`Country: ${country}`);
    
                        const weatherData = await GetWeatherData(latitude, longitude, country);
                        // console.log(weatherData, 'WEATHER DATA')
                        const mappedWeatherData = cloudData(weatherData);
                        setMapWeatherData(mappedWeatherData)
                        const hourlyWeatherData = await fetchHourlyWeatherData(latitude, longitude);
                        
                        // console.log(hourlyWeatherData, '-------- HOURLY WEATHER DATA---------');
                    } else {
                        console.error('Error fetching address:', addressData);
                    }
                } catch (error) {
                    console.error('Error fetching address:', error);
                }
            }, (error) => {
                console.error("Error getting geolocation:", error);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };
    
    useEffect(() => { 
        fetchWeatherData();
    }, []);
    
    return (
        <>
            {displayHomePage && <div className='homepage-container'>
                <div className='homepage-container-image'>
                    <HeadStaticIcons />
                    <div className='flex w-90 justify-between pr-16 pl-8 mt-6 place-items-center'>
                        <CrossIcon onClick={onClickCancel} />
                        <Button />
                    </div>
                    <div className="font-abhaya font-bold text-5xl text-left text-white mt-24 ml-8 tracking-wide">
                    <LocationIcon className="mr-4"/>
                        {country}
                        {/* New York,<span className="block">United States</span> */}
                    </div>
                </div>
            </div>}
            {displayWidgetPage && <div className='homepage-container bg-white'>
                <div className='h-100' style={{ height: "100%" }}>
                    <HeadStaticIcons black />
                    <div className='flex w-90 justify-between pr-10 pl-8 mt-6 place-items-center'>
                        <BurgerMenuIcon onClick={onClickBurgerMenu} />
                        {displayInputField && <input type='text' onChange={handleInputChange} value={inputValue} placeHolder='Search your location' />
                        }
                        <SearchIcon onClick={onClickSearchBar} />
                    </div>
                    <section className='flex place-items-center justify-between mt-4'>
                        <div>
                            <p class="font-abhaya font-bold text-xl text-left mt-6 ml-8 tracking-wide text-slate-950">
                                {country}
                                {/* New York,<span class="block">United States</span> */}
                            </p>
                            <p class="font-abhaya font-bold text-left ml-8 tracking-wide text-15px text-slate-400">
                                {formattedDate}
                            </p>
                            <div className='ml-8 mt-4'>
                                <Cloudy />
                            </div>
                        </div>
                        <div>
                            <img src={TinyBitmap} alt="tiny-bitmap" className='mr-10' />
                        </div>
                    </section>
                    <section className='w-90 bg-teal-900 h-24 mt-8 mr-10 ml-8 border-teal-500 rounded-xl'>
                        <Cloud />
                    </section>
                    <section className='ml-8 mr-10 mt-10'>
                        <AdditionalInfo mapWeatherData={mapWeatherData}/>
                    </section>
                </div>
            </div>}
        </>
    )
}

export default HomePage;