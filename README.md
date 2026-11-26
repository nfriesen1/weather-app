# Weather App

A React app for checking the weather in any city. Start typing a city name, pick it from the autocomplete list, and the app shows current conditions plus a 5-day forecast.

I built it while learning React and working with third-party APIs: running requests in parallel, handling async state, and turning raw API responses into a usable UI.

## Features

- **City search with autocomplete**, powered by the [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities). It only suggests cities with 10,000+ residents and loads more results as you scroll.
- **Current conditions** from [OpenWeather](https://openweathermap.org/api): temperature, "feels like", humidity, pressure and a weather icon.
- **5-day forecast** in 3-hour steps, with temperatures converted from Kelvin to °F.
- Current weather and the forecast are fetched **in parallel** with `Promise.all`.

## Tech stack

React 18 (Create React App), Material UI, `react-select-async-paginate`, the OpenWeather API, and the GeoDB Cities API (through RapidAPI).

## Running it locally

1. Get two free API keys:
   - an OpenWeather API key from https://openweathermap.org/api
   - a RapidAPI key with a subscription to GeoDB Cities: https://rapidapi.com/wirefreethought/api/geodb-cities
2. Put both keys in `src/api.js`.
3. Install and start:
   ```bash
   npm install
   npm start        # http://localhost:3000
   ```

> The keys are read in the browser, so anyone using a deployed build can see them. That's fine for a learning project. A production version would send these requests through a small server-side proxy.

## Project structure

```
src/
  api.js                       API endpoints and keys
  App.js                       fetches weather for the selected city
  components/
    Search/                    city autocomplete (GeoDB)
    CurrentWeather/            current conditions card
    Forecast/                  forecast grid
public/icons/                  weather icons, keyed by OpenWeather icon code
```
