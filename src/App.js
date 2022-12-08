import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import MoonIcon from './components/MoonIcon';
import SunIcon from './components/SunIcon';
import Switch from './components/Switch';

const StyledApp = styled.div`
 min-height: 100vh;
 text-aligh: center;
 padding-top: 10rem;
 padding-left: 5rem;
 padding-right: 5rem;
 background-color: ${(props) => props.theme.body};
`;

const Name = styled.h1`
 margin:1rem;
 color: ${(props) => props.theme.title};
`;

const Info = styled.p`
 margin:1rem;
 color: ${(props) => props.theme.title};
`;

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#333",
  icon: "black"
}

const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6",
  icon: "yellow"
}



function App() {

  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const [mode, setMode] = useState('Light');
  

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    isDarkTheme ? setMode("Light") : setMode("Dark");
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <StyledApp>
      <SunIcon />
      <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
      <MoonIcon />
      <Name>Currently we are using {mode} mode</Name>
      <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic autem ea facere fuga, maiores nisi quo fugit obcaecati at voluptatum nobis non repellendus ipsum dicta earum doloremque iusto suscipit?</Info>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
