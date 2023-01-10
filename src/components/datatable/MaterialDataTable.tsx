import React from 'react';
import * as S from './MaterialDataTable.styles';
import Icon from '../icon/Icon';
import MaterialTable, { Action, Column } from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import Button from '../button/Button';
import { actions } from '@storybook/addon-actions';

// https://material-table.com/#/docs/all-props
const defaultProps = {
  clickableRows: false,
  pageSize: [5],
  actionsColumnIndex: -1,
  actionHeader: 'Acciones',
  emptyDataSourceMessage: 'No se encontraron resultados',
};

type customAction = {
  iconType: 'button' | 'icon';
  icon?: string;
  iconAlign?: 'center' | 'left' | 'right' | 'none';
  children?: any;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  tooltip: string;
  onClick: (event, rowData) => {};
};
type MaterialDataTableProps = {
  id: string;
  clickableRows: boolean;
  columns: Column<any>[];
  data: any[];
  pageSize?: number[];
  actionsColumnIndex?: number;
  actionHeader?: string;
  emptyDataSourceMessage?: string;
  customAction?: customAction[];
} & typeof defaultProps;

const MaterialDataTable = (props: MaterialDataTableProps) => {
  const {
    id,
    clickableRows,
    columns,
    data,
    pageSize,
    actionsColumnIndex,
    actionHeader,
    emptyDataSourceMessage,
  } = props;

  const renderIcon = (value: customAction) => {
    return (
      <Icon
        cursor={value.disabled ? 'not-allowed' : 'pointer'}
        variant={value.variant === 'primary' ? 'neutral' : 'primary'}
        name={value.icon}
        disabled={value.disabled}
      />
    );
  };

  const renderButton = (value: customAction) => {
    return (
      <Button
        size={value.size}
        icon={value.icon}
        iconAlign={value.iconAlign}
        disabled={value.disabled}
        id={'0'}
      >
        {value.children}
      </Button>
    );
  };

  const renderActionIcon = (value: customAction) => {
    switch (value.iconType) {
      case 'button':
        return renderButton(value);
      case 'icon':
        return renderIcon(value);
    }
  };

  const renderAction = (): any[] => {
    return props.customAction.map((val, index) => {
      return {
        icon: () => renderActionIcon(val),
        tooltip: val.tooltip,
        onClick: val.onClick,
        disabled: val.disabled,
      };
    });
  };

  const defaultMaterialTheme = createTheme();

  return (
    <S.MaterialDataTable
      id={id}
      clickableRows={clickableRows}
      headerClasses={'headerClasses'}
    >
      <div className={'react-bootstrap-table headerClasses'}>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            columns={columns}
            data={data}
            localization={{
              header: {
                actions: actionHeader,
              },
              pagination: {
                labelRowsPerPage: '',
                labelRowsSelect: '',
              },
              body: {
                emptyDataSourceMessage: emptyDataSourceMessage,
              },
            }}
            options={{
              toolbar: false,
              pageSizeOptions: pageSize,
              actionsColumnIndex: actionsColumnIndex,
              // columnsButton: true
            }}
            actions={renderAction()}
          />
        </ThemeProvider>
      </div>
    </S.MaterialDataTable>
  );
};

MaterialDataTable.defaultProps = defaultProps;

export default MaterialDataTable;
