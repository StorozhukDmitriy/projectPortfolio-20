import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";
import { Font } from "./Font";
import { FontStyles } from "./Common";

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
    a {
        ${FontStyles({
          family: Font.secondfamily,
          weight: 500,
          color: Theme.color.font,
          lineHeight: 1.5,
        })}
        text-decoration: none;
        font-size: 18px;
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
    li {
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
        ${FontStyles({
          family: Font.thirdfamily,
          weight: 700,
          lineHeight: 1.5,
        })}
        font-size: 48px;
        
    }
    button {
        ${FontStyles({
          family: Font.secondfamily,
          weight: 500,
          color: Theme.color.font,
          lineHeight: 1.5,
        })}
        font-size: 18px; 
    }
`;
