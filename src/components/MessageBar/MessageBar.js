import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

function MessageBar({ meteo }) {
  return (
    <Message>
      Currently the weather in {meteo.location.name} ({meteo.location.country}) is :
    </Message>
  );
}

MessageBar.propTypes = {
  meteo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default MessageBar;
