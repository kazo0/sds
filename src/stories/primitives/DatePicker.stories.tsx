import type { Meta, StoryObj } from "@storybook/react";
import { DatePickerField } from "primitives";

const meta: Meta<typeof DatePickerField> = {
  component: DatePickerField,
  title: "SDS Primitives/DatePicker",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof DatePickerField>;

export const StoryDatePickerField: Story = {
  name: "DatePicker Field",
  args: {
    label: "Date",
    description: "Select a date",
    isDisabled: false,
    isRequired: false,
  },
  render: (args) => <DatePickerField {...args} />,
};

export const StoryDatePickerFieldDisabled: Story = {
  name: "DatePicker Field (Disabled)",
  args: {
    label: "Date",
    isDisabled: true,
  },
  render: (args) => <DatePickerField {...args} />,
};

export const StoryDatePickerFieldError: Story = {
  name: "DatePicker Field (Error)",
  args: {
    label: "Date",
    isRequired: true,
    isInvalid: true,
    errorMessage: "Please select a valid date",
  },
  render: (args) => <DatePickerField {...args} />,
};
