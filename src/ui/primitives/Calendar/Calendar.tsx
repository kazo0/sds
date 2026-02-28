import clsx from "clsx";
import { IconChevronLeft, IconChevronRight } from "icons";
import { IconButton, Select, SelectField, SelectItem } from "primitives";
import type { ComponentProps, Key, ReactNode } from "react";
import {
  Calendar as RACCalendar,
  CalendarCell as RACCalendarCell,
  CalendarGrid as RACCalendarGrid,
  CalendarGridBody as RACCalendarGridBody,
  CalendarGridHeader as RACCalendarGridHeader,
  CalendarHeaderCell as RACCalendarHeaderCell,
  Heading as RACHeading,
  type CalendarProps as RACCalendarProps,
  type DateValue,
} from "react-aria-components";
import "./calendar.css";

/* -------------------------------------------------------------------------- */
/*  CalendarButton                                                            */
/* -------------------------------------------------------------------------- */

export interface CalendarButtonProps {
  /** The number/label displayed inside the day cell */
  number?: string;
  /** Visual state of the button */
  state?:
    | "Default"
    | "Hover"
    | "Active"
    | "Disabled"
    | "Range"
    | "Range Disabled"
    | "Hidden";
  className?: string;
}

/**
 * An individual day cell inside the calendar grid.
 * Wraps react-aria-components `CalendarCell`.
 */
export function CalendarButton({
  className,
  ...props
}: CalendarButtonProps & ComponentProps<typeof RACCalendarCell>) {
  const classNames = clsx(className, "calendar-cell");
  return <RACCalendarCell className={classNames} {...props} />;
}

/* -------------------------------------------------------------------------- */
/*  CalendarMonthField                                                        */
/* -------------------------------------------------------------------------- */

export interface CalendarMonthFieldProps {
  /** Currently selected month name */
  value?: string;
  /** Optional label above the field */
  label?: string;
  /** Whether to show the label */
  hasLabel?: boolean;
  /** Callback when month changes */
  onSelectionChange?: (key: Key | null) => void;
  className?: string;
}

/**
 * A select field for choosing the calendar month.
 */
export function CalendarMonthField({
  className,
  value = "September",
  label,
  hasLabel = false,
  onSelectionChange,
}: CalendarMonthFieldProps) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const classNames = clsx(className, "calendar-month-field");

  if (hasLabel && label) {
    return (
      <SelectField
        className={classNames}
        label={label}
        defaultSelectedKey={value}
        onSelectionChange={onSelectionChange}
      >
        {months.map((month) => (
          <SelectItem key={month} id={month}>
            {month}
          </SelectItem>
        ))}
      </SelectField>
    );
  }

  return (
    <Select
      className={classNames}
      defaultSelectedKey={value}
      onSelectionChange={onSelectionChange}
    >
      {months.map((month) => (
        <SelectItem key={month} id={month}>
          {month}
        </SelectItem>
      ))}
    </Select>
  );
}

/* -------------------------------------------------------------------------- */
/*  CalendarYearField                                                         */
/* -------------------------------------------------------------------------- */

export interface CalendarYearFieldProps {
  /** Currently selected year */
  value?: string;
  /** Callback when year changes */
  onSelectionChange?: (key: Key | null) => void;
  className?: string;
}

/**
 * A select field for choosing the calendar year.
 */
export function CalendarYearField({
  className,
  value = "2025",
  onSelectionChange,
}: CalendarYearFieldProps) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) =>
    String(currentYear - 5 + i),
  );
  const classNames = clsx(className, "calendar-year-field");

  return (
    <Select
      className={classNames}
      defaultSelectedKey={value}
      onSelectionChange={onSelectionChange}
    >
      {years.map((year) => (
        <SelectItem key={year} id={year}>
          {year}
        </SelectItem>
      ))}
    </Select>
  );
}

/* -------------------------------------------------------------------------- */
/*  CalendarSelectGroup                                                       */
/* -------------------------------------------------------------------------- */

export interface CalendarSelectGroupProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Groups the month and year select fields together.
 */
export function CalendarSelectGroup({
  className,
  children,
}: CalendarSelectGroupProps) {
  const classNames = clsx(className, "calendar-select-group");
  return <div className={classNames}>{children}</div>;
}

/* -------------------------------------------------------------------------- */
/*  Calendar                                                                  */
/* -------------------------------------------------------------------------- */

export type CalendarProps<T extends DateValue> = RACCalendarProps<T>;

/**
 * A full calendar widget with month/year navigation and a date grid.
 * Wraps react-aria-components `Calendar`.
 */
export function Calendar<T extends DateValue>({
  className,
  ...props
}: CalendarProps<T>) {
  const classNames = clsx(className, "calendar");
  return (
    <RACCalendar className={classNames} {...props}>
      <header className="calendar-header">
        <IconButton slot="previous" aria-label="Previous month" variant="subtle">
          <IconChevronLeft />
        </IconButton>
        <RACHeading className="calendar-heading" />
        <IconButton slot="next" aria-label="Next month" variant="subtle">
          <IconChevronRight />
        </IconButton>
      </header>
      <RACCalendarGrid className="calendar-grid">
        <RACCalendarGridHeader>
          {(day) => (
            <RACCalendarHeaderCell className="calendar-grid-header-cell">
              {day}
            </RACCalendarHeaderCell>
          )}
        </RACCalendarGridHeader>
        <RACCalendarGridBody>
          {(date) => <CalendarButton date={date} />}
        </RACCalendarGridBody>
      </RACCalendarGrid>
    </RACCalendar>
  );
}
