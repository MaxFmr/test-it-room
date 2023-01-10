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
  .searchBar {
    overflow: hidden;

    width: 80%;
    margin: 5% 5%;
    border: solid 1px #0000001a;
    height: 40px;
    border-radius: 20px;
    padding-left: 20px;
    color: #0000001a;
    display: flex;
    justify-content: space-between;
    background-color: white;
    input {
      width: 80%;
      border: none;
      font-style: italic;
      :focus-visible {
        outline: none;
        border-radius: none;
      }
    }
    button {
      height: 100%;
      border: none;
      overflow: hidden;
      background-color: green;
      color: white;
      width: 50px;
      font-weight: bolder;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
export default StyledHomePage;
