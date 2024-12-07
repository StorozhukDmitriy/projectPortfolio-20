import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        
    }
    body {
        
        background-color: #f9faff;;
        font-family:"Nunito", sans-serif;
        font-weight:400 ;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0 auto;
    }
    section{
        margin: 144px auto;
        text-align: center;

    }
    h2 {
        font-family:"Playfair Display", sans-serif; 
        font-weight: 700;
        font-size: 48px;
        line-height: 72px;
    }
    button {
        line-height: 27px;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: #25282b;
    }
`;
