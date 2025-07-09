import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Skill} from './skill/Skill';
import {S} from './Skills_Styled';
import React from 'react';
import {styled} from 'styled-components';

const SkillData = [
    {
        img1: 'webstorm',
        href1: 'https://www.jetbrains.com/webstorm/',
        img2: 'js',
        href2: 'https://ru.wikipedia.org/wiki/JavaScript',
        img3: 'css3',
        href3: 'https://ru.wikipedia.org/wiki/CSS',
        img4: 'html5',
        href4: 'https://ru.wikipedia.org/wiki/HTML',
        img5: 'cib',
        href5: 'https://ru.wikipedia.org/wiki/JavaScript',
        img6: 'redux',
        href6: 'https://redux.js.org/',
    },
    {
        img1: 'github',
        href1: 'https://ru.wikipedia.org/wiki/GitHub',
        img2: 'git',
        href2: 'https://ru.wikipedia.org/wiki/Git',
        img3: 'react',
        href3: 'https://ru.legacy.reactjs.org/',
        img4: 'sass',
        href4: 'https://sass-lang.com/',
        img5: 'bootstrap',
        href5: 'https://getbootstrap.com/',
        img6: 'tailwind',
        href6: 'https://tailwindcss.com/',
    },
    {
        img1: 'storyBook',
        href1: 'https://storybook.js.org/',
        img2: 'styledComponent',
        href2: 'https://styled-components.com/',
        img3: 'swagger',
        href3: 'https://swagger.io/',
        img4: 'docker',
        href4: 'https://www.docker.com/',
        img5: 'nextJs',
        href5: 'https://nextjs.org/',
        img6: 'materialUi',
        href6: 'https://mui.com/',

    }
];

export const Skills: React.FC = () => {
    return (
        <S.StyledSkills id="Skills">
            <FlexWrapper wrap="wrap" justify="center">
                <SectionTitle>Skills</SectionTitle>
                {SkillData.map((el) => {
                    return (
                        <Skill
                            img1={el.img1}
                            href1={el.href1}
                            img2={el.img2}
                            href2={el.href2}
                            img3={el.img3}
                            href3={el.href3}
                            img4={el.img4}
                            href4={el.href4}
                            img5={el.img5}
                            href5={el.href5}
                            img6={el.img6}
                            href6={el.href6}
                        />
                    );
                })}
            </FlexWrapper>
        </S.StyledSkills>
    );
};

