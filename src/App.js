import styled, { createGlobalStyle} from "styled-components";
import Header from "./Header/Hearder";
import Exhibit from "./Exhibit/Exhibit";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;


const AppWrapper = styled.div`

text-align: center;
`;
function App() {
  return (
    <>
     <GlobalStyle />
     <AppWrapper>
        <Header />
        <Exhibit/>
      </AppWrapper>
    </>
  );
}

export default App;
