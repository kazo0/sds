import type { Meta, StoryObj } from "@storybook/react";
import {
  Calendar,
  CalendarMonthField,
  CalendarSelectGroup,
  CalendarYearField,
} from "primitives";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: "SDS Primitives/Calendar",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryCalendar: StoryObj<typeof Calendar> = {
  name: "Calendar",
  args: {},
  render: () => <Calendar />,
};

export const StoryCalendarMonthField: StoryObj<typeof CalendarMonthField> = {
  name: "Calendar Month Field",
  args: {
    value: "September",
    hasLabel: false,
  },
  argTypes: {
    hasLabel: { control: { type: "boolean" } },
    label: { control: { type: "text" } },
  },
  render: (args) => <CalendarMonthField {...args} />,
};

export const StoryCalendarMonthFieldLabeled: StoryObj<
  typeof CalendarMonthField
> = {
  name: "Calendar Month Field (Labeled)",
  args: {
    value: "September",
    hasLabel: true,
    label: "Month",
  },
  render: (args) => <CalendarMonthField {...args} />,
};

export const StoryCalendarYearField: StoryObj<typeof CalendarYearField> = {
  name: "Calendar Year Field",
  args: {
    value: "2025",
  },
  render: (args) => <CalendarYearField {...args} />,
};

export const StoryCalendarSelectGroup: StoryObj<typeof CalendarSelectGroup> = {
  name: "Calendar Select Group",
  args: {},
  render: () => (
    <CalendarSelectGroup>
      <CalendarMonthField value="September" />
      <CalendarYearField value="2025" />
    </CalendarSelectGroup>
  ),
};
