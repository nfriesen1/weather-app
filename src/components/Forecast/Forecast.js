import { Grid, Box, Typography, ListItem } from "@mui/material"
import "./Forecast.css"

const Forecast = ({ forecast }) => {

    const forecastList = forecast.list
    console.log(forecast)

    function getTime(dateStr) {
        var date = new Date(dateStr);
        console.log(date)
        var options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        var timeString = date.toLocaleString('en-US', options);
        console.log(timeString)
        return timeString
    }

    function getDate(dateStr) {
        var date = new Date(dateStr);
        return date
    }


    const convertToFarenheight = (tempInKelvin) => {
        const farenheight = (tempInKelvin - 273.15) * 9 / 5 + 32;
        return Math.round(farenheight);
    }

    return (
        <Grid>
            {forecastList.map((day) => (
                <Grid item className="forecast" marginRight="20px">
                    <Typography variant="subtitle1">{getDate(day.dt_txt).toString().split(' ')[0]}, {getTime(day.dt_txt)}</Typography>
                    <Typography variant="h5">{convertToFarenheight(day.main.temp)}</Typography>
                    <Typography variant="subtitle2">{day.weather[0].main}</Typography>
                    <img alt="weather" className="weather-icon" src={`icons/${day.weather[0].icon}.png`} />
                </Grid  >
            ))}
        </Grid>
    )
}

export default Forecast;