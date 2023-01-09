import axios from 'axios';
import { useState, useEffect } from 'react';
import StyledHomePage from './Home.style';

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(process.env.REACT_APP_FAKESTORE_URL);
      console.log(response);
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <StyledHomePage>
      {!data ? (
        <span>Loading...</span>
      ) : (
        data.map((product) => {
          return (
            <div key={product.id}>
              <span>{product.title}</span>
            </div>
          );
        })
      )}
    </StyledHomePage>
  );
};
export default Home;
