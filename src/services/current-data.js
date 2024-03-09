import { API_KEY } from "../data/constants";

const Current = async (inputValue) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=Metric&appid=${API_KEY}`);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log('Well, this didnt work', error);
        return error
    }
};

export default Current;