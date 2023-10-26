// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input
};

export default meta;
type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Input variant="primary" />
};

export const Secondary: Story = {
  render: () => <Input variant="secondary" />
};
