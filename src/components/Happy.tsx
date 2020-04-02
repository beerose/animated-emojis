/** @jsx jsx */
import styled from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Emoji, EmojiProps } from './Emoji';
import { colors } from './colors';

const getFaceAnimation = (scale: number) => keyframes`
	25% {transform: rotate(-12deg) scale(${scale});}
  50% {transform: rotate(12deg) scale(${scale});}
	75% {transform: rotate(-12deg) scale(${scale});}
`;

const HappyStyled = styled(Emoji)<{ animate: boolean; scale: number }>`
  transform: scale(${props => props.scale});

  position: relative;

  ${({ animate, scale }) =>
    animate
      ? css`
          animation: ${getFaceAnimation(scale)} 0.8s ease-in infinite;
        `
      : ''}
`;

const Blush = styled.div`
  width: 6px;
  height: 6px;
  background: transparent;
  border-radius: 50%;
  bottom: 44px;
  left: 58px;
  box-shadow: -35px 0px 25px 10px ${colors.angry},
    35px 0px 25px 10px ${colors.angry};

  position: absolute;
`;

const Eyebrow = styled.div`
  width: 26px;
  height: 13px;
  background: transparent;

  border: 5px solid black;
  border-radius: 60px 60px 0 0;
  border-bottom: 0;

  box-sizing: border-box;

  position: absolute;
  bottom: 70px;
  left: calc(50% - 13px);
`;

const leftEyebrowStyles = css`
  margin-left: -21px;
`;

const rightEyebrowStyles = css`
  margin-left: 21px;
`;

const Mouth = styled.div`
  position: absolute;

  width: 60px;
  height: 80px;
  left: calc(50% - 30px);
  top: 15px;
  border-radius: 50%;
  background: transparent;
  border: 5px solid ${colors.black};
  box-sizing: border-box;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  z-index: 1;
`;

export interface HappyProps extends EmojiProps {}
export const Happy: React.FC<HappyProps> = ({ animate = true, size = 3 }) => (
  <HappyStyled animate={animate} scale={size / 10}>
    <Eyebrow css={leftEyebrowStyles} />
    <Eyebrow css={rightEyebrowStyles} />
    <Mouth />
    <Blush />
  </HappyStyled>
);
