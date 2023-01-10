import axios from 'axios';
import { useState, useEffect } from 'react';
import StyledHomePage from './Home.style';
import Card from '../Card/Card';

const Home = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(process.env.REACT_APP_FAKESTORE_URL);
      console.log(response);
      setData(response.data);
    };

    fetchData();
  }, []);

  const searchTitle = async (title) => {
    const response = await axios.get(
      `${process.env.REACT_APP_FAKESTORE_URL}?title=${search}`
    );
    console.log(response);
    setData(response.data);
  };

  return (
    <StyledHomePage>
      <h1>Ma super page de recherche</h1>
      <div className='searchBar'>
        <input
          type='text'
          placeholder='Rechercher un titre'
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={() => searchTitle(search)}>OK</button>
      </div>

      <div className='cardList'>
        {!data ? (
          <span>Loading...</span>
        ) : (
          data.map((post) => {
            return <Card key={post.id} post={post} />;
          })
        )}
      </div>
    </StyledHomePage>
  );
};
export default Home;
