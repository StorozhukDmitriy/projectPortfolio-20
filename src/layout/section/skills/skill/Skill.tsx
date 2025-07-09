import {Icon} from '../../../../components/icon/Icon';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {S} from './Skill_Styles';
import React from 'react';

type SkillPropsType = {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    img6: string;
    href1?: string;
    href2?: string;
    href3?: string;
    href4?: string;
    href5?: string;
    href6?: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>

            <a href={props.href1} target={'_blank'}>
                <Icon iconId={props.img1}/>
            </a>
            <a href={props.href2} target={'_blank'}>
                <Icon iconId={props.img2}/>
            </a>
            <a href={props.href3} target={'_blank'}>
                <Icon iconId={props.img3}/>
            </a>
            <a href={props.href4} target={'_blank'}>
                <Icon iconId={props.img4}/>
            </a>
            <a href={props.href5} target={'_blank'}>
                <Icon iconId={props.img5}/>
            </a>
            <a href={props.href6} target={'_blank'}>
                <Icon iconId={props.img6}/>
            </a>
            {/*<Icon iconId={props.img2}/>*/}
            {/*<Icon iconId={props.img3}/>*/}
            {/*<Icon iconId={props.img4}/>*/}
            {/*<Icon iconId={props.img5}/>*/}
            {/*<Icon iconId={props.img6}/>*/}
        </S.StyledSkill>
    );
};
