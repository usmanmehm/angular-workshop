export interface WeatherResponse {
    weather: {
        monday: WeatherForecast;
        tuesday: WeatherForecast;
        wednesday: WeatherForecast;
        thursday: WeatherForecast;
        friday: WeatherForecast;
    }
}

export interface WeatherForecast {
    temperature: string;
    forecast: string;
    humidity: string;
}