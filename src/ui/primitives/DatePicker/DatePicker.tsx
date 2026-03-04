import { clsx } from "clsx";
import { IconCalendar } from "icons";
import {
  Calendar,
  Description,
  Field,
  FieldError,
  IconButton,
  Label,
  SharedFieldProps,
} from "primitives";
import {
  DateInput as RACDateInput,
  DatePicker as RACDatePicker,
  DateSegment as RACDateSegment,
  Dialog as RACDialog,
  Group as RACGroup,
  Popover as RACPopover,
  type DatePickerProps as RACDatePickerProps,
  type DateValue,
} from "react-aria-components";
import "./datepicker.css";

/* -------------------------------------------------------------------------- */
/*  DatePickerField                                                           */
/* -------------------------------------------------------------------------- */

export type DatePickerFieldProps<T extends DateValue> = SharedFieldProps &
  RACDatePickerProps<T>;

/**
 * A date picker field with label, description, and error message support.
 * Combines a segmented date input with a Calendar popover.
 */
export function DatePickerField<T extends DateValue>({
  className,
  label,
  description,
  errorMessage,
  ...props
}: DatePickerFieldProps<T>) {
  const classNames = clsx(className, "datepicker-container");
  return (
    <DatePicker className={classNames} {...props}>
      <Field>
        {label && <Label>{label}</Label>}
        <RACGroup className="datepicker-group">
          <RACDateInput className="datepicker-input">
            {(segment) => (
              <RACDateSegment className="datepicker-segment" segment={segment} />
            )}
          </RACDateInput>
          <IconButton
            variant="subtle"
            size="small"
            aria-label="Open calendar"
          >
            <IconCalendar />
          </IconButton>
        </RACGroup>
        <RACPopover className="datepicker-popover">
          <RACDialog>
            <Calendar />
          </RACDialog>
        </RACPopover>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Field>
    </DatePicker>
  );
}

/* -------------------------------------------------------------------------- */
/*  DatePicker                                                                */
/* -------------------------------------------------------------------------- */

export type DatePickerProps<T extends DateValue> = RACDatePickerProps<T>;

/**
 * A date picker that combines a segmented date input with a Calendar popover.
 * Wraps react-aria-components `DatePicker`.
 */
export function DatePicker<T extends DateValue>({
  className,
  ...props
}: DatePickerProps<T>) {
  const classNames = clsx(className, "datepicker");
  return <RACDatePicker className={classNames} {...props} />;
}
