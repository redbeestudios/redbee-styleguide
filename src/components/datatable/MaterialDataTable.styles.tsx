import styled, {css} from "styled-components";
import theme from "../../assets/styles/theme";

interface MaterialDataTableProps {
    clickableRows?: boolean;
    headerClasses?: string;
}

export const MaterialDataTable = styled.div<MaterialDataTableProps>`
  .react-bootstrap-table {
    box-shadow: 0px 4px 11px rgba(194, 209, 217, 0.46);
    .MuiTableCell-footer{
      padding: 10px 45px 10px 10px !important
    }
    .Component-horizontalScrollContainer-12{
    
        tr:nth-of-type(odd) {
            background-color: #FBFBFC;
        }
        
        tr:nth-of-type(even) {
            background-color: ${theme.colors.neutral.bg.weak};
        }
    }
    .MuiTable-root.css-rqglhn-MuiTable-root {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
      margin-bottom: 0;
      
   

      tr {
        border: none;
      }

      td {
        padding: ${theme.spacing['spacing-7']};
        overflow-x: hidden !important;
      }

      thead {
       box-shadow: 0px 4px 11px rgba(194, 209, 217, 0.46);

        th {
          vertical-align: unset;
          font-family: 'Roboto';
          color: #343C46;
          font-size: 16px;
          font-weight: 500;
          line-height: 18px;
                
        }
      }
    }
  }

  .headerClasses {
    th {
      padding: ${theme.spacing['spacing-5']};
      background-color: ${theme.colors.neutral.bg.weak};
    }
  }

  .MuiTypography-root.MuiTypography-caption.css-1sn4lm3-MuiTypography-root {
     display: none;
  }

  tbody {
    tr {
      height: 48px;

      ${({clickableRows}) =>
    clickableRows
        ? `
        &:hover {
          cursor: pointer;
          background-color: ${theme.colors.neutral.bg.regular} !important;
          box-shadow: inset 0 -1px 0 ${theme.colors.neutral.border.strong};
        }
  
        &:active {
          background-color: ${theme.colors['secondary-1'].bg.weak} !important;
          box-shadow: inset 0 -1px 0 ${theme.colors['secondary-1'].border.regular};
        }`
        : `        
        &:hover {
           background-color: ${theme.colors.neutral.bg.regular} !important;
           box-shadow: inset 0 -1px 0 ${theme.colors.neutral.border.regular};
        }`}
    }

    td {
      vertical-align: middle;
      padding-left: ${theme.spacing['spacing-5']} !important;
      padding-right: ${theme.spacing['spacing-5']} !important;

      ${theme.textStyles['text-preset-10']()}
      &.react-bs-table-no-data {
        text-align: center;
      }
    }
  }
}

.react-bootstrap-table-pagination {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  padding: ${theme.spacing['spacing-6']};
  ${theme.textStyles['text-preset-10']()};

  .pagination__total {
    text-align: center;
    color: ${theme.colors.neutral.text.regular};
  }

  .pagination__list-of-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.neutral.text.strong};

    .pagination-list-of-buttons__button {
    @extend . pagination__total;
      font: inherit;
      cursor: pointer;
      background: none;
      color: inherit;
      border: none;
      outline: none;
      padding: 0px;
      height: 28px;
      width: 28px;
      margin-right: ${theme.spacing['spacing-4']};

      &:hover {
        background-color: ${theme.colors.neutral.bg.regular};
        border-radius: ${theme.borderRadius['border-radius-5']};

        svg {
          path {
            fill: ${theme.colors.primary.ic.strong};
          }
        }
      }

      &:active {
        svg {
          path {
            fill: ${theme.colors['secondary-1'].ic.strong};
          }
        }
      }

      &:first-child,
      &:nth-child(2),
      &:last-child,
      &:nth-last-child(2) {
        background-color: transparent;
      }
    }

    .page--active {
      color: ${theme.colors.neutral.text.inverted};
      background-color: ${theme.colors['secondary-1'].bg.regular};
      border-radius: ${theme.borderRadius['border-radius-5']};

      &:hover {
        color: ${theme.colors.neutral.text.inverted};
        background-color: ${theme.colors['secondary-1'].bg.strong};
      }
    }

    .page--active-pill {
    @extend . page--active;
      height: auto;
      width: auto;
    }
  }
}
`;
