import type { Meta, StoryObj } from "@storybook/react";

import Clock from "./Clock";

const meta: Meta<typeof Clock> = {
  component: Clock
};

export default meta;
type Story = StoryObj<typeof Clock>;

export const Default: Story = {
  render: () => (
    <Clock currentTime={10000000} zone="Europe/Helsinki" locale="fi-fi" />
  )
};

export const Seoul: Story = {
  render: () => <Clock currentTime={1055000} zone="Asia/Seoul" locale="ko-kr" />
};
