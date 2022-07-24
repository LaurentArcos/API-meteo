import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

function MessageBar({ search }) {
  return (
    <Message>
      Voici la météo pour "{search}"
    </Message>
  );
}

MessageBar.propTypes = {
  search: PropTypes.string.isRequired,
};

export default MessageBar;
