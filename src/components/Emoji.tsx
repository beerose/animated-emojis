import styled from '@emotion/styled';

import { colors } from './colors';

export const Emoji = styled.div`
  width: 120px;
  height: 120px;
  background: ${colors.base};
  border-radius: 50%;
  position: relative;
`;

export interface EmojiProps {
  size?: number;
  animate?: boolean;
}
