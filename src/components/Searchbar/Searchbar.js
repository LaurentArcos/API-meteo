/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import PropTypes from 'prop-types';
import { Form, Input, Segment } from 'semantic-ui-react';

function SearchBar({ search, setSearch, fetchResults }) {
  return (
    <Segment>
      <Form
        onSubmit={() => {
          fetchResults();
        }}
      >
        <Form.Field>
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            icon="search"
            iconPosition="left"
            placeholder="Search a city and find out what's the weather like there !"
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
};

export default SearchBar;
