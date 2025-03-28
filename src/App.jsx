import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';  // Verifique o caminho correto
import { theme } from './styles/theme';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';

const CurrentWeatherData = {
  location: 'São Miguel do Oeste',
  temperature: 18,
};

const forecastData = [
  { date: '28/03', mintemp: 18, maxtemp: 26 },
  { date: '29/03', mintemp: 16, maxtemp: 28 },
  { date: '30/03', mintemp: 14, maxtemp: 27 },
  { date: '31/03', mintemp: 19, maxtemp: 25 },
  { date: '01/04', mintemp: 12, maxtemp: 26 },
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
        <CurrentWeather 
          location={CurrentWeatherData.location} 
          temperature={CurrentWeatherData.temperature} 
        />
        <WeatherForecast forecast={forecastData} />
      </div>
    </ThemeProvider>
  );
};

export default App;
