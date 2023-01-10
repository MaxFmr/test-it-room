import styled from 'styled-components';
const StyledCard = styled.section`
  border: solid 0.5px #0000001a;
  height: 300px;
  width: 200px;
  font-family: 'Nunito', sans-serif;
  box-shadow: 0px 2px 5px #0000001a;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 10px;
  .logo {
    display: flex;
    border-bottom: solid 0.3px #0000001a;
    justify-content: center;
    align-items: center;
    height: 25%;
  }
  h2 {
    margin-top: 20px;
    text-align: center;
    font-weight: bolder;
    margin-left: 5px;
    margin-right: 5px;
  }
  p {
    font-size: smaller;
    margin: 20px 10px;
  }
`;
export default StyledCard;
