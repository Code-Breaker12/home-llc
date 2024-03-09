import { HOURLY_API_KEY } from "../data/constants";

const fetchHourlyWeatherData = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&units=Metric&appid=${HOURLY_API_KEY}`)
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log('Well, this shit didnt work', error);
        return error;
    }
};
export default fetchHourlyWeatherData;