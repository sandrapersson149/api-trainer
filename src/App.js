// import './App.css';
import Weather from './Weather'
import styled from 'styled-components';

const StyledDiv = styled.div`
h1{
  font-size: 55px;
  text-align: center;
}
`;

function App() {


  return (
    <StyledDiv>
      <h1>Weather - 7 days forecast</h1>
      <Weather />
    </StyledDiv>
  );
}

export default App;
