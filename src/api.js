export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
// Keys come from .env (git-ignored) — see .env.example
export const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
export const getApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
