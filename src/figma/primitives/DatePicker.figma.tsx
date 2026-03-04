import figma from "@figma/code-connect";
import { DatePicker, DatePickerField } from "primitives";

/* -------------------------------------------------------------------------- */
/*  DatePicker (without label)                                                */
/* -------------------------------------------------------------------------- */

figma.connect(DatePicker, "<FIGMA_INPUTS_DATEPICKER_FIELD>", {
  variant: { "Has Label": false },
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    value: figma.string("Value"),
  },
  example: ({ ...props }) => <DatePicker {...props} />,
});

/* -------------------------------------------------------------------------- */
/*  DatePickerField (with label)                                              */
/* -------------------------------------------------------------------------- */

figma.connect(DatePickerField, "<FIGMA_INPUTS_DATEPICKER_FIELD>", {
  variant: { "Has Label": true },
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    errorMessage: figma.enum("State", { Error: figma.string("Error") }),
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    value: figma.string("Value"),
  },
  example: ({ ...props }) => <DatePickerField {...props} />,
});
