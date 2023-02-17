import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import MessageBar from '../MessageBar/MessageBar';

function MeteoResults({ meteo, search }) {
  return (
    <div>
      <MessageBar search={search} />
      <Card centered className="card">
        <Image
          src={meteo.current.weather_icons}
          wrapped
          ui={false}
          alt="Meteo image"
        />
        <Card.Content>
          <Card.Header>
            {meteo.location.name}
          </Card.Header>
          <Card.Meta>{meteo.weather_descriptions}</Card.Meta>
          <Card.Description>
            {meteo.current.temperature}°c
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
  search: PropTypes.string.isRequired,
};

export default MeteoResults;
