import styled, { css } from "styled-components";
import * as S from "../span/Span.styles";
import { getAlign } from "../Utils";

interface PStylesProps {
  align: "center" | "right" | "left";
}

export const P = styled(S.Span)<PStylesProps>`
  ${({ align }) => getAlign(align)}
`;
