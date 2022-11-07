import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: 'Manrope', sans-serif;
    }

    body {
        width: 100%;
        height: 100%;
        overflow: scroll;
        background: white;
    }
`;

export default GlobalStyles;
