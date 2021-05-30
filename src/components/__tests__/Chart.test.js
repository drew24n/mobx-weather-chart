import { renderWithRedux } from '../../helpers/testExtension';
import Chart from '../Chart';
import { store } from '../../store/store';
import { setWeatherData } from '../../store/weather/weather.actions';

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
    store.dispatch(setWeatherData(weatherData));
    renderWithRedux(<Chart />);
    expect(document.querySelector('.recharts-responsive-container')).toBeInTheDocument();
  });
});
