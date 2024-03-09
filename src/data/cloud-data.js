// import { CloudIconOne, CloudIconTwo, CloudIconThree, CloudIconFour, CloudIconFive } from "../components/icons"
export const cloudData = (data) => {
    // console.log(data, data?.wind, 'DATA TO MAP');
    const additionalInfoData = {
        humidity: data?.main?.humidity,
        groundLevel: data?.main?.grnd_level,
        pressure: data?.main?.pressure,
        seaLevel: data?.main?.sea_level,
        temprature: data?.main?.temp,
        tempMax: data?.main?.temp_max,
        tempMin: data?.main?.temp_min
    };
    // const weatherKind = {
    //     title: data?.weather?.[0]?.main,
    //     description: data?.weather?.[0]?.description,
    //     icon: data?.weather?.[0]?.icon
    // };
    const windData = {
        speed: data?.wind?.speed || '',
        deg: data?.wind?.deg || '',
        gust: data?.wind?.gust || ''
    };
    // const tempratureData = [
    //     {
    //         id: 1,
    //         time: '12:00',
    //         icon: <CloudIconOne />,
    //         date: '24',
    //     },
    //     {
    //         id: 2,
    //         time: '12:00',
    //         icon: <CloudIconTwo />,
    //         date: '24',
    //     },
    //     {
    //         id: 3,
    //         time: '12:00',
    //         icon: <CloudIconThree />,
    //         date: '24',
    //     },
    //     {
    //         id: 4,
    //         time: '12:00',
    //         icon: <CloudIconFour />,
    //         date: '24',
    //     },
    //     {
    //         id: 5,
    //         time: '12:00',
    //         icon: <CloudIconFive />,
    //         date: '24',
    //     },
    // ];
    // const additionalInfo = [
    //     {
    //         id: 1,
    //         heading: 'Precipitation',
    //         percentage: `${additionalInfoData?.groundLevel}+'%'` || '',
    //     },
    //     {
    //         id: 2,
    //         heading: 'Humidity',
    //         percentage: `${additionalInfoData?.humidity}+'%'` || '',
    //     },
    //     {
    //         id: 3,
    //         heading: 'Windy',
    //         percentage: `${windData?.speed}+'km/hr'` || '',
    //     }
    // ]
    return { 
        additionalInfo: [
                {
                    id: 1,
                    heading: 'Precipitation',
                    percentage: `${additionalInfoData?.groundLevel+'%'}` || '',
                },
                {
                    id: 2,
                    heading: 'Humidity',
                    percentage: `${additionalInfoData?.humidity+'%'}` || '',
                },
                {
                    id: 3,
                    heading: 'Windy',
                    percentage: `${windData?.speed+'km/hr'}` || '',
                }
            ]
        };
}