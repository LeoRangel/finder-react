import React from "react";

import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args}>Botão</Button>;

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => {},
  isDisable: false,
  isTransparent: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  onClick: () => {},
  isDisable: false,
  isTransparent: true,
};
