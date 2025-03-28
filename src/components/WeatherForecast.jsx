import styled from 'styled-components';

const ForecastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px; 
  padding: 20px; 
`;

const DayCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  margin: 10px;
  flex: 1 1 calc(20% - 20px); 
  min-width: 150px; 
  box-sizing: border-box; 
  transition: transform 0.3s ease; 
  
  &:hover {
    transform: translateY(-5px); 
  }
`;

const DateText = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
`;

const TempText = styled.p`
  margin: 5px 0 0 0;
  font-size: 1.1rem; 
`;


const WeatherForecast = ({ forecast }) => {
  return (
    <ForecastContainer>
      {forecast.map((day, index) => (
        <DayCard key={index}>
          <DateText>{day.date}</DateText>
          <TempText>Min: {day.mintemp}°C</TempText>
          <TempText>Max: {day.maxtemp}°C</TempText>
        </DayCard>
      ))}
    </ForecastContainer>
  );
};

export default WeatherForecast;
