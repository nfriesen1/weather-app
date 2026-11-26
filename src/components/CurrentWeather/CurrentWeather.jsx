import "./CurrentWeather.css"
import { Grid, ListItem, Typography } from "@mui/material";

const CurrentWeather = ({ currentWeather }) => {

    const convertToFarenheight = (tempInKelvin) => {
        const farenheight = (tempInKelvin - 273.15) * 9/5 + 32;
        return Math.round(farenheight);    
    }

    const convertToMph = (metersPerSecond) => {
        return Math.round(2.2369*metersPerSecond)
    }

    return (
        <Grid className="weather">
            <Grid className="top">
                <Grid>
                    <Typography marginTop="10px" variant="h6" className="city">{currentWeather.city}</Typography>
                    <Typography variant="h3" className="temperature">{convertToFarenheight(currentWeather.main.temp)}°F</Typography>
                    <Typography variant="subtitle1" className="weather-description">{currentWeather.weather[0].main}</Typography>

                </Grid>
                <img alt="weather" className="weather-icon" src={`icons/${currentWeather.weather[0].icon}.png`} />
            </Grid>
                <Grid className="details">
                    <Grid className="parameter-row">
                        <Typography className="paremeters-title">Details:</Typography>
                    </Grid>
                    <Grid className="parameter-row">
                        <ListItem className="parameter-label">Feels like: {convertToFarenheight(currentWeather.main.feels_like)}°F</ListItem>
                    </Grid>
                    <Grid className="parameter-row"> 
                        <ListItem className="parameter-label">Wind: {convertToMph(currentWeather.wind.speed)} mph </ListItem>
                    </Grid>
                    <Grid className="parameter-row"> 
                        <ListItem className="parameter-label">Humidity: {currentWeather.main.humidity}%</ListItem>
                    </Grid>
                    <Grid className="parameter-row"> 
                        <ListItem className="parameter-label">Pressure: {currentWeather.main.pressure} hPA</ListItem>
                    </Grid>
                </Grid>
        </Grid>
    );
};

export default CurrentWeather;
