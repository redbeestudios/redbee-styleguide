import styled, { css } from "styled-components";
import { getType, getWeight, getVariant } from "../Utils";

export interface LabelStylesProps {
  type?: "1" | "2" | "3" | "4" | "5";
  variant?: "neutral" | "neutral-1" | "danger";
  weight?: "regular" | "bold";
  modifier?: "regular" | "strong" | "weak" | "inverted";
}
export const Label = styled.label<LabelStylesProps>`
  ${({ type }) => getType("label", type)}

  ${({ variant, modifier }) => getVariant(variant, modifier)}

  ${({ weight }) => getWeight("label", weight)}
`;
