import { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.scss';

import Header from '../Header/Header';
import SearchBar from '../Searchbar/Searchbar';
import MessageBar from '../MessageBar/MessageBar';
import MeteoResults from '../MeteoResults/MeteoResults';

function App() {
  const [meteoDatas, setMeteoDatas] = useState([]);
  const [search, setSearch] = useState('');

  const fetchResults = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=bf75cdb5782058e8584739c6a01d87ec&query=${search}`)
      .then((response) => {
        setMeteoDatas(
          response.data.location,
          response.data.current,
          response.data.weather_descriptions,
        );
      })
      .catch((error) => {
        console.log('Erreur !', error);
      });
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="app">
      <Header />
      <SearchBar
        search={search}
        setSearch={setSearch}
        fetchResults={fetchResults}
      />
      <MessageBar search={search} />
      <MeteoResults meteo={meteoDatas} />
    </div>
  );
}

export default App;
