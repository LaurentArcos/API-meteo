import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import MessageBar from '../MessageBar/MessageBar';

function MeteoResults({ meteo }) {
  return (
    <div>
      <MessageBar meteo={meteo} />
      <Card centered className="card">
        <Image
          src={meteo.current.weather_icons}
          wrapped
          ui={false}
          alt="Meteo image"
        />
        <Card.Content>
          <Card.Description className="city-name">
            {meteo.location.name}
          </Card.Description>
          <Card.Meta>({meteo.location.region}, {meteo.location.country})</Card.Meta>
          <Card.Description className="temperature">
            {meteo.current.temperature}°c
          </Card.Description>
          <Card.Description className="weather-description">
            {meteo.current.weather_descriptions}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}

MeteoResults.propTypes = {
  meteo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default MeteoResults;
