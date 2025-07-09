import Typewriter from 'typewriter-effect';
import bgImg from '../../../assets/images/myPhoto.png';
import smImg from '../../../assets/images/Small.png';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Button} from '../../../components/Button';
import {Theme} from '../../../styles/Theme';
import {S} from './Main_Styles';
import React from 'react';
import {styled} from 'styled-components';

export const Main: React.FC = () => {
    return (
        <S.StyledMain id="start">
            <S.StyledMainContainer>
                <FlexWrapper align="center" justify="space-between" >
                    <S.MainTextBlock>
                        <S.MainTitle>
                            <p>"Front-end Developer"</p>
                            <Typewriter
                                options={{
                                    strings: 'Front-end Developer',
                                    autoStart: true,
                                    loop: false,
                                    delay: 60,
                                }}
                            />
                        </S.MainTitle>
                        <S.MainName>Привет,<br/> меня зовут Дмитрий</S.MainName>
                        <S.MainText>
                            Я Front-end разработчик, тут ты можешь ознакомится с моим проектами.
                        </S.MainText>
                        <ButtonWrapper>
                            <Button
                                radius="8px"
                                border="2px solid #25282b"
                                color={Theme.color.primaryBg}
                            >
                                <a href="#Projects">Projects</a>
                            </Button>
                            <Button
                                radius="8px"
                                border="2px solid #25282b"
                                color={Theme.color.primaryBg}
                            >
                                <a href="https://github.com/StorozhukDmitriy" target={"_blank"}>GitHub</a>
                            </Button>
                            <Button
                                radius="8px"
                                border="2px solid #25282b"
                                color={Theme.color.primaryBg}
                            >
                                <a href="https://t.me/DmitriiStorozhuk" target={"_blank"}>Telegram</a>
                            </Button>
                        </ButtonWrapper>
                    </S.MainTextBlock>
                    <S.MainImageBlock>
                            <img src={bgImg} alt=""/>
                    </S.MainImageBlock>
                </FlexWrapper>
            </S.StyledMainContainer>
        </S.StyledMain>
    );
};

const ButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`