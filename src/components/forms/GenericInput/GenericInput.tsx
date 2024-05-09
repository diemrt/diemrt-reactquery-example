/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { ErrorMessage } from "@hookform/error-message";
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type InputType =
  | "text"
  | "number"
  | "password"
  | "email"
  | "hidden"
  | "time";
type InputProps = {
  id?: string;
  name: string;
  placeholder?: string;
  type: InputType;
  className?: string;
  maxLength?: number;
};
type CustomInputProps<TFieldValues extends FieldValues> = {
  id?: string;
  name: Path<TFieldValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFieldValues>;
  errors?: Partial<DeepMap<TFieldValues, FieldError | any>>;
  readOnly?: boolean;
  disabled?: boolean;
  label: string;
  step?: string;
} & Omit<InputProps, "name">;

const GenericInput = <TFieldValues extends Record<string, unknown>>({
  name,
  id,
  errors,
  register,
  rules,
  label,
  ...rest
}: CustomInputProps<TFieldValues>) => {
  const Input: FC<InputProps> = React.forwardRef(
    (props: InputProps, ref: React.Ref<HTMLInputElement>) => (
      <input ref={ref} {...props} />
    )
  );
  return (
    <>
      <label
        htmlFor={id ?? name}
        className="block text-sm dark:text-white"
      >
        {label}{rules?.required && "*"}
      </label>
      <div className="relative">
        <Input
          name={name}
          id={id ?? name}
          placeholder={rest.placeholder ?? label}
          {...rest}
          {...(register && register(name, rules))}
        />
        {errors?.lenght && (
          <>
            <div className="absolute inset-y-0 end-0 pointer-events-none pe-3">
              <svg
                className="size-5 text-red-500"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
            <ErrorMessage
              errors={errors}
              name={name as any}
              render={({ message }) => (
                <p className="text-xs text-red-600 mt-2" id={name}>
                  {message}
                </p>
              )}
            />
          </>
        )}
      </div>
    </>
  );
};

export default GenericInput;
