/** @jsx jsx */
import styled from '@emotion/styled';
import { keyframes, css, jsx } from '@emotion/core';

import { Emoji, EmojiProps } from './Emoji';
import { colors } from './colors';

const eyesAnimation = keyframes`
	50% {transform: scaleY(1.1); }
`;

const gradientAnimation = keyframes`
	0%, 100% {
		background-position: 100% 100%;
	}
	50% {
		background-position: 0% 0%;
	}
`;

const eyebrowAnimation = keyframes`
	50% { transform: translateY(-3px); }
`;

const mouthAnimation = keyframes`
	50% { transform: scaleY(1.3) }
`;

const Mouth = styled.div`
  position: absolute;
  box-sizing: border-box;

  width: 30px;
  height: 15px;
  left: calc(50% - 15px);
  top: calc(50% + 20px);

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: ${colors.black};
  border: 5px solid ${colors.black};

  animation: ${mouthAnimation} 2.5s ease-in-out infinite;
`;

const Eye = styled.div`
  position: absolute;
  top: calc(50% - 10px);

  width: 12px;
  height: 17px;

  background: ${colors.black};
  border-radius: 50%;

  animation: ${eyesAnimation} 2.5s linear infinite;
`;

const leftEyeStyles = css`
  left: calc(50% - 30px);
`;

const rightEyeStyles = css`
  right: calc(50% - 30px);
`;

const FearStyled = styled(Emoji)<{ scale: number; animate: boolean }>`
  background: linear-gradient(to bottom, ${colors.blue}, ${colors.base});
  background-size: 200% 200%;
  background-position: 100% 100%;

  transform: scale(${props => props.scale});

  ${({ animate }) =>
    animate
      ? css`
          animation: ${gradientAnimation} 2.5s linear infinite;
        `
      : css`
          * {
            animation: none !important;
          }
        `};
`;

const Eyebrow = styled.div`
  position: absolute;
  box-sizing: border-box;

  width: 34px;
  height: 30px;
  top: calc(50% - 25px);

  border-radius: 50%;
  border: 4px solid ${colors.black};
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;

  animation: ${eyebrowAnimation} 2.5s ease-in-out infinite;
`;

const leftEyebrow = css`
  left: calc(50% - 42px);
`;

const rightEyebrow = css`
  right: calc(50% - 42px);
`;

export interface FearProps extends EmojiProps {}
export const Fear: React.FC<FearProps> = ({ size = 3, animate = true }) => (
  <FearStyled animate={animate} scale={size / 10}>
    <Eyebrow css={leftEyebrow} />
    <Eyebrow css={rightEyebrow} />
    <Eye css={leftEyeStyles} />
    <Eye css={rightEyeStyles} />
    <Mouth />
  </FearStyled>
);
