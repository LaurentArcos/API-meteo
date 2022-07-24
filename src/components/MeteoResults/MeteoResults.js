import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

function MeteoResults({ meteo }) {
  return (
    <Card.Group itemsPerRow={3}>
      {meteo.map((meteoData) => (
        <Card key={meteoData.location.timezone_id}>
          <Image
            src={meteoData.current.weather_icons}
            wrapped
            ui={false}
            alt="Meteo image"
          />
          <Card.Content>
            <Card.Header>
              {meteoData.location.name}
            </Card.Header>
            <Card.Meta>{meteoData.weather_descriptions}</Card.Meta>
            <Card.Description>
              {meteoData.current.temperature}
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}

MeteoResults.propTypes = {
  meteo: PropTypes.arrayOf.isRequired,
};

export default MeteoResults;
