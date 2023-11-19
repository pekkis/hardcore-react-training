// Clock.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Clock from "./Clock";
import { DateTime } from "luxon";

const meta: Meta<typeof Clock> = {
  component: Clock
};

export default meta;
type Story = StoryObj<typeof Clock>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Clock
      name="Testikello"
      time={DateTime.fromISO("1978-03-21")}
      locale="fi-fi"
      zone="Europe/Helsinki"
    />
  )
};
