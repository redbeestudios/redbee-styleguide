import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/button/Button";
import MaterialDataTable from "../components/datatable/MaterialDataTable";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MaterialDataTable",
  component: MaterialDataTable,
} as ComponentMeta<typeof MaterialDataTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MaterialDataTable> = (args) => (
  <MaterialDataTable {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  clickableRows: true,
  columns: [
    {
      title: "Name",
      field: "name",
      defaultSort: "desc",
    },
    {
      title: "render",
      field: "render",
      render: (event, rowData) => (
        <Button
          size="md"
          id={"0"}
          icon={""}
          onClick={() => alert("RowData " + rowData.name)}
        >
          Ejemplo de columna
        </Button>
      ),
    },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
      title: "Birth City",
      field: "birthCity",
      lookup: { 1: "Linz", 2: "Vöcklabruck", 3: "Salzburg" },
    },
  ],
  data: [
    { name: "Max", surname: "Mustermann", birthYear: 1987, birthCity: 1 },
    { name: "Cindy", surname: "Musterfrau", birthYear: 1995, birthCity: 2 },
  ],
  pageSize: [5],
  actionsColumnIndex: -1,
  customAction: [
    {
      iconType: "button",
      icon: "search",
      iconAlign: "left",
      children: "Button",
      size: "sm",
      tooltip: "Save User",
      onClick: (event, rowData) => alert("You saved " + rowData.name),
      disabled: true,
    },
    {
      iconType: "icon",
      icon: "search",
      variant: "secondary",
      tooltip: "Delete User",
      onClick: (event, rowData) =>
        confirm("You want to delete " + rowData.name),
    },
  ],
};
