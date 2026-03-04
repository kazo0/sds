import figma from "@figma/code-connect";
import { DatePickerField } from "primitives";

figma.connect(DatePickerField, "<FIGMA_INPUTS_DATEPICKER_FIELD>", {
  props: {
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    isDisabled: figma.enum("State", { Disabled: true }),
    errorMessage: figma.enum("State", { Error: figma.string("Error") }),
    calendar: figma.children("Calendar"),
  },
  example: ({ calendar, ...props }) => <DatePickerField {...props} />,
});
