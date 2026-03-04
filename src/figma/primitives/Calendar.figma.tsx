import figma from "@figma/code-connect";
import {
  CalendarButton,
  CalendarMonthField,
  CalendarSelectGroup,
  CalendarYearField,
} from "primitives";

/* -------------------------------------------------------------------------- */
/*  Calendar Button                                                           */
/* -------------------------------------------------------------------------- */

figma.connect(CalendarButton, "<FIGMA_CALENDAR_CALENDAR_BUTTON>", {
  props: {
    number: figma.string("Number"),
    state: figma.enum("State", {
      Default: "Default",
      Hover: "Hover",
      Active: "Active",
      Disabled: "Disabled",
      Range: "Range",
      "Range Disabled": "Range Disabled",
      Hidden: "Hidden",
    }),
  },
  example: ({ number }) => (
    <CalendarButton date={undefined!}>{number}</CalendarButton>
  ),
});

/* -------------------------------------------------------------------------- */
/*  Calendar Month Field                                                      */
/* -------------------------------------------------------------------------- */

figma.connect(CalendarMonthField, "<FIGMA_CALENDAR_CALENDAR_MONTH_FIELD>", {
  props: {
    value: figma.string("Value"),
    hasLabel: figma.boolean("Has Label"),
    label: figma.string("Label"),
  },
  example: ({ ...props }) => <CalendarMonthField {...props} />,
});

/* -------------------------------------------------------------------------- */
/*  Calendar Year Field                                                       */
/* -------------------------------------------------------------------------- */

figma.connect(CalendarYearField, "<FIGMA_CALENDAR_CALENDAR_YEAR_FIELD>", {
  props: {
    value: figma.string("Value"),
  },
  example: ({ ...props }) => <CalendarYearField {...props} />,
});

/* -------------------------------------------------------------------------- */
/*  Calendar Select Group                                                     */
/* -------------------------------------------------------------------------- */

figma.connect(
  CalendarSelectGroup,
  "<FIGMA_CALENDAR_CALENDAR_SELECT_GROUP>",
  {
    props: {
      children: figma.children(["Calendar Month Field", "Calendar Year Field"]),
    },
    example: ({ children }) => (
      <CalendarSelectGroup>{children}</CalendarSelectGroup>
    ),
  },
);
