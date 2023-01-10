import styled, { css } from 'styled-components';

export interface FlexProps {
  column?: boolean;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  ${(prop) =>
    prop.column &&
    css`
      flex-direction: column;
    `}
`;

export default Flex;
