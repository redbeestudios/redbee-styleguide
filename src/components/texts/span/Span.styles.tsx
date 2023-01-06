import React from "react";
import styled, { css } from "styled-components";
import { getFont, getType, getWeight, getVariant } from "../Utils";

export interface SpanProps {
  font: "primary" | "secondary";
  type: "1" | "2" | "3" | "4" | "5" | "6";
  variant:
    | string
    | "primary"
    | "secondary-1"
    | "secondary-2"
    | "secondary-3"
    | "neutral"
    | "neutral-1"
    | "danger"
    | "warning"
    | "info"
    | "success";
  weight: "regular" | "bold";
  modifier: "regular" | "strong" | "weak" | "inverted";
  children?: any;
}

export const Span = styled.span<SpanProps>`
  ${({ type }) => getType("span", type)}

  ${({ variant, modifier }) => getVariant(variant, modifier)}

  ${({ weight }) => getWeight("span", weight)}

  ${({ font }) => getFont("span", font)}
`;
