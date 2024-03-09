import { API_KEY } from "../data/constants";

const GetWeatherData = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=Metric&appid=${API_KEY}`);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log('Well, this shit didnt work', error);
        return error
    }
};

export default GetWeatherData;