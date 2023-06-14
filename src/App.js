import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background-color: #2f3640;
    color: #f5f6fa;
    button {
            background-color: black;
            color: white;
        }
}`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Outlet />
        </>
    );
}

export default App;
