import { render } from '@testing-library/react';
import Chart from '../Chart';
import weather from '../../store/weather';

const weatherData = {
  city: {
    name: 'Kyiv',
  },
  cod: '200',
  list: [
    {
      dt_txt: '2021-05-30 15:00:00',
      main: {
        temp: 15.47,
      },
    },
  ],
};

describe('Chart', () => {
  it('should render without crash', () => {
    weather.setWeather(weatherData);
    render(<Chart />);
    expect(document.querySelector('.recharts-responsive-container')).toBeInTheDocument();
  });
});
