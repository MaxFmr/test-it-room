import styled from 'styled-components';
const StyledHeader = styled.header`
  width: 100vw;
  height: 120px;
  border-bottom: solid 0.5px #841918;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    border: none;
    background: none;
    color: #841918;
    font-weight: bolder;
    :hover {
      cursor: pointer;
    }
  }
`;
export default StyledHeader;
