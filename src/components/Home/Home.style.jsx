import styled from 'styled-components';
const StyledHomePage = styled.section`
  h1 {
    margin-left: 5%;
    font-family: 'Nunito', sans-serif;
    font-size: xx-large;
    margin-top: 5%;
  }
  .cardList {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 80%;
    margin: 5% 5%;
    border: solid 1px #0000001a;
    height: 30px;
    border-radius: 15px;
    padding-left: 20px;
    font-style: italic;
    color: #0000001a;
  }
`;
export default StyledHomePage;
