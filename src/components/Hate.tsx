/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, keyframes, css } from '@emotion/core';

import { Emoji, EmojiProps } from './Emoji';

const faceAnimation = keyframes`
  35%, 60% {transform: translateX(0) translateY(10px) scale(0.9);}
  40%, 50% {transform: translateX(-5px) translateY(10px) scale(0.9);}
  45%, 55% {transform: translateX(5px) translateY(10px) scale(0.9);}
`;

const mouthAnimation = keyframes`
  25%, 70% {height: 8px; bottom: 25px;}
`;

const HateStyled = styled(Emoji)<{ animate: boolean; scale: number }>`
  background: linear-gradient(
    var(--emoji-color-angry) -10%,
    var(--emoji-color-base)
  );
  background-size: 100%;

  transform: scale(${props => props.scale});

  ${({ animate }) =>
    !animate
      ? css`
          * {
            animation: none !important;
          }
        `
      : ''}
`;

const Face = styled.div`
  position: relative;

  animation: ${faceAnimation} 1.5s ease-in infinite;
`;

const Mouth = styled.div`
  width: 36px;
  height: 16px;
  left: calc(50% - 18px);
  top: 95px;
  background: var(--emoji-color-black);
  border-radius: 50%;

  position: absolute;

  /* animation: ${mouthAnimation} 1.5s linear infinite; */
`;

const Eyebrow = styled.div`
  position: absolute;

  width: 50px;
  height: 20px;
  box-sizing: border-box;

  border-radius: 50%;
  border: 5px solid var(--emoji-color-black);
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;

  top: 52px;
  left: calc(50% - 25px);
`;

const leftEyebrowStyles = css`
  margin-left: -25px;
  transform: rotate(15deg);
`;

const rightEyebrowStyles = css`
  margin-left: 25px;
  transform: rotate(-15deg);
`;

const Eye = styled.div`
  width: 12px;
  height: 12px;
  left: calc(50% - 6px);
  top: 70px;
  border-radius: 50%;
  background: black;

  position: absolute;
`;

const leftEyeStyles = css`
  margin-left: -25px;
`;

const rightEyeStyles = css`
  margin-left: 25px;
`;

export interface HateProps extends EmojiProps {}
export const Hate: React.FC<HateProps> = ({ size = 3, animate = true }) => (
  <HateStyled scale={size / 10} animate={animate}>
    <Face>
      <Eyebrow css={leftEyebrowStyles} />
      <Eyebrow css={rightEyebrowStyles} />
      <Eye css={leftEyeStyles} />
      <Eye css={rightEyeStyles} />
      <Mouth />
    </Face>
  </HateStyled>
);
