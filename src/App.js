import styled from "styled-components";
import "./App.css";
import Subscription from "./Subscription";
import bg from "./images/bg.png";
import { device } from "./device";

const Div = styled.div`
  background-image: url(${bg});
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  padding: 1rem;
  box-sizing: border-box;
  @media ${device.mobileL} {
    display: flex;
    height: 100%
  }
  @media ${device.tablet} {
    height: 100vh;
  }
`;

function App() {
  return (
    <Div className="App">
      <Subscription />
    </Div>
  );
}

export default App;
