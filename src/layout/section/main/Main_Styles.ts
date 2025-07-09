import { styled } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";
import { Font } from "../../../styles/Font";
import { FontStyles } from "../../../styles/Common";

const StyledMain = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding-top: 200px;
  @media screen and (max-width: 1345px) {
    padding: 200px 15px 0;
  }
  @media screen and (max-width: 900px) {
    padding-top: 100px;
    ${FlexWrapper} {
      flex-wrap: wrap-reverse;
      align-items: flex-start;
      justify-content: flex-start;
    }
    div{
      margin: 0 auto 30px;
      justify-content: center;
    }
  }
  @media screen and (max-width: 600px) {
    padding-top: 30px;
  }
`;

const StyledMainContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  min-height: 100%;
`;

const MainTextBlock = styled.div`
    max-width: 508px;
    width: 100%;
    min-height: 408px;
    text-align: start;
    position: relative;
    z-index: 10;
  
    button:hover {
        background-color: ${Theme.color.accent};
        border: 2px solid transparent;
        transition: 0.3s;
    }

    @media screen and (max-width: 425px) {
        display: flex;
        flex-direction: column;
      button{
        margin: 10px 0 10px 0;
      }
    }

`;
const MainTitle = styled.h1`
  ${FontStyles({
    family: Font.fontfamily,
    weight: 700,
    color: Theme.color.accent,
  })}
  margin-bottom: 12px;
  font-size: 20px;
  text-transform: uppercase;
  p {
    display: none;
  }
`;
const MainName = styled.span`
  font-size: 44px;
  ${FontStyles({
    family: Font.secondfamily,
    weight: 700,
    color: Theme.color.nameInMain,
    lineHeight: 1.2,
  })};
  @media ${Theme.media.mobile} {
    font-size: 42px;
  }
`;

const MainText = styled.p`
  margin: 32px 0;
  font-family: ${Font.fontfamily};
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: ${Theme.color.textInMain};
`;

const MainImageBlock = styled.div`
  max-width: 720px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;

  img {
    max-width: 300px;
    top: 0;
    right: 0;
  }
`;

export const S = {
  StyledMain,
  StyledMainContainer,
  MainTextBlock,
  MainTitle,
  MainName,
  MainText,
  MainImageBlock,
};
