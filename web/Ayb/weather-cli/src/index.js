import dotenv from 'dotenv';
import { getWeather} from "./services/weatherService.js";
import { handleError } from "./utils/errorHandler.js"

dotenv.config()

async function main() {
    try{
        const city = process.argv[2];

        if (!city) {
            console.error("Please provide a valid city name.");
            process.exit(1);
        }

        if(!process.env.API){
            console.error("API Key missing in .env file.");
            process.exit(1);
        }

        const weather = await getWeather(city);

        console.log(`City : ${weather.city}`);
        console.log(`Temperature: ${weather.temperature}`);
        console.log(`Description: ${weather.description}`);
        console.log(`Humidity: ${weather.humidity}`);
    } catch (error){
        handleError(error);
    }
}

main();