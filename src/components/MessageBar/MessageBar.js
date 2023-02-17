import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

function MessageBar({ search, meteo }) {
  return (
    <Message>
      There is the weather in {meteo.location.name} ({meteo.location.country}) "
    </Message>
  );
}

MessageBar.propTypes = {
  meteo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  search: PropTypes.string.isRequired,
};

export default MessageBar;
