type colorProps = {
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
  align: "center";
  modifier: "regular" | "strong" | "weak" | "inverted";
  buttonVariant: "startOrEnd" | "selected" | "inrange" | "disabled" | "normal";
};

const getColor = (
  isSelected,
  isSelectedStartOrEnd,
  isWithinHoverRange,
  isDisabled,
  range
): colorProps => {
  if (isSelectedStartOrEnd) {
    return {
      type: "4",
      variant: "neutral",
      modifier: "inverted",
      align: "center",
      weight: "regular",
      buttonVariant: "startOrEnd",
    };
  } else if (isSelected) {
    return {
      type: "4",
      variant: "neutral",
      modifier: "strong",
      align: "center",
      weight: "regular",
      buttonVariant: "selected",
    };
  } else if (isWithinHoverRange && range) {
    return {
      type: "4",
      variant: "neutral",
      modifier: "strong",
      align: "center",
      weight: "regular",
      buttonVariant: "inrange",
    };
  } else if (isDisabled) {
    return {
      type: "4",
      variant: "neutral",
      modifier: "regular",
      align: "center",
      weight: "regular",
      buttonVariant: "disabled",
    };
  } else {
    return {
      type: "4",
      variant: "neutral",
      modifier: "strong",
      align: "center",
      weight: "regular",
      buttonVariant: "normal",
    };
  }
};

export { getColor };
