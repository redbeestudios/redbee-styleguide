import { css } from 'styled-components';
import theme from '../../assets/styles/theme';


export const getAlign = (align) => {
    switch (align) {
        case 'center':
            return css`
        text-align: center;
      `;
        case 'right':
            return css`
        text-align: right;
      `;
        case 'left':
            return css`
        text-align: left;
      `;
    }
};


export const getVariant = (variant, modifier) => {
    switch (variant) {
        case 'neutral-1':
            return css`
        color: ${theme.colors['neutral'].text[modifier]};
      `;
        default:
            return css`
        color: ${theme.colors[variant]?.text[modifier]};
      `;
    }
};
const types = {
    span: {
        1: theme.textStyles['text-preset-8'],
        2: theme.textStyles['text-preset-9'],
        4: theme.textStyles['text-preset-10'],
        5: theme.textStyles['text-preset-11'],
    },
    label: {
        1: theme.textStyles['text-preset-8'],
        2: theme.textStyles['text-preset-9'],
        4: theme.textStyles['text-preset-10'],
        5: theme.textStyles['text-preset-11'],
    },
    h: {
        1: theme.textStyles['text-preset-1'],
        2: theme.textStyles['text-preset-2'],
        3: theme.textStyles['text-preset-3'],
        4: theme.textStyles['text-preset-4'],
        5: theme.textStyles['text-preset-5'],
        6: theme.textStyles['text-preset-6'],
    },
};


export const getType = (component, type) => {

    return css`
    ${types[component][type]};
  `;
};

const weight = {
    h: {
        regular: css`
      font-weight: normal;
    `,
        bold: css`
      font-weight: 500;
    `,
    },
    label: {
        regular: css`
      font-weight: normal;
    `,
        bold: css`
      font-weight: 700;
    `,
    },
    span: {
        regular: css`
      font-weight: normal;
    `,
        bold: css`
      font-weight: 700;
    `,
    },
};

export const getWeight = (component, type) => {
    return css`
    ${weight[component][type]};
  `;
};

const fonts = {
    h: {
        primary: css`
      font-family: Rubik, serif;
    `,
        secondary: css`
      font-family: Roboto, serif;
    `,
    },
    span: {
        primary: css`
      font-family: Roboto, serif;
    `,
        secondary: css`
      font-family: Rubik, serif;
    `,
    },
};

export const getFont = (component, type) => {
    return css`
    ${fonts[component][type]};
  `;
};
