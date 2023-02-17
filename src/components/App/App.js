import { useState } from 'react';
import axios from 'axios';

import './styles.scss';

import Header from '../Header/Header';
import SearchBar from '../Searchbar/Searchbar';
import MessageBar from '../MessageBar/MessageBar';
import MeteoResults from '../MeteoResults/MeteoResults';

function App() {
  const [meteoDatas, setMeteoDatas] = useState([]);
  const [search, setSearch] = useState('');
  const [contentReady, setContentReady] = useState(false);

  const fetchResults = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=bf75cdb5782058e8584739c6a01d87ec&query=${search}`)
      .then((response) => {
        setMeteoDatas(
          response.data,
        );
        setContentReady(
          true,
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Erreur !', error);
      });
  };

  return (
    <div className="app">
      <Header />
      <SearchBar
        search={search}
        setSearch={setSearch}
        fetchResults={fetchResults}
      />
      {contentReady && <MeteoResults meteo={meteoDatas} search={search}/>}
    </div>
  );
}

export default App;
