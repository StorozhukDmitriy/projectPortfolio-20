import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";
import { Font } from "./Font";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${Theme.color.primaryBg};
        font-family:${Font.fontfamily};
        font-weight:400 ;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${Theme.color.font};
    }
    a{
        text-decoration: none;
        font-family: ${Font.secondfamily};
        font-weight: 500;
        font-size: 18px;
        line-height: 27px; 
        color: ${Theme.color.font};
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
    section{
        max-width: 1440px;
        width: 100%;
        margin: 144px auto;
        text-align: center;

        @media ${Theme.media.tablet} {
            margin: 80px auto;
        }

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
