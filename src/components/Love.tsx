import * as React from 'react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/core';

import { Emoji, EmojiProps } from './Emoji';
import { colors } from './colors';

const animation = keyframes`
	25% {transform: scale(1.1);}
	75% {transform: scale(0.6);}
`;

const LoveStyled = styled(Emoji)<{ scale: number; animate: boolean }>`
  background: ${colors.love};
  display: flex;
  justify-content: center;
  align-items: center;

  transform: scale(${props => props.scale});

  ${({ animate }) =>
    animate
      ? css`
          > div {
            animation: ${animation} 0.8s linear infinite alternate;
          }
        `
      : ''}
`;

const HeartWrapper = styled.div`
  margin-top: 10px;
`;

const Heart = styled.div`
  width: 40px;
  height: 64px;
  background: ${colors.white};
  border-radius: 20px 20px 0 0;
  padding-right: 1px;
`;

const LeftHeartSide = styled(Heart)`
  transform: translate(20px) rotate(-45deg);
  position: absolute;
  transform-origin: 0 100%;
`;

const RightHeartSide = styled(Heart)`
  transform: translate(-20px) rotate(45deg);
  transform-origin: 100% 100%;
`;

export interface LoveProps extends EmojiProps {}
export const Love: React.FC<LoveProps> = ({ size = 3, animate = true }) => (
  <LoveStyled scale={size / 10} animate={animate}>
    <HeartWrapper>
      <LeftHeartSide />
      <RightHeartSide />
    </HeartWrapper>
  </LoveStyled>
);
