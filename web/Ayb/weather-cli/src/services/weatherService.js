import axios from "axios";

export async function getWeather(city){
    const API = process.env.API;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;

    try {
        const response = await axios.get(url);

        return {
            city: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity
        };
    } catch (error){
        throw error;
    }
}
