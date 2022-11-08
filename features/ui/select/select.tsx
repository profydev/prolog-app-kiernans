import React, { SelectHTMLAttributes, useRef } from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

export enum SelectState {
  empty = "empty",
  filled = "filled",
  focused = "focused",
  disabled = "disabled",
  open = "open",
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  OptionsProps & {
    icon?: string;
    label: string;
    hint?: string;
    state?: SelectState;
    options?: string[] | undefined;
  };

export type OptionsProps = {
  error?: string;
};

type SelectOptionProps = {
  option: string;
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0.625rem 0.875rem;
  gap: ${space(2)};
`;

const LabelText = styled.span`
  ${textFont("sm", "medium")};
  color: ${color("gray", 700)};
`;

const Options = styled.select<OptionsProps>`
  width: 20rem;
  height: ${space(12)};
  background-color: white;
  border: 1px solid ${color("gray", 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: ${space(2)};
  ${textFont("md", "regular")};
  color: ${color("gray", 900)};

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${color("error", 300)};
    `};
`;

const Hint = styled.span`
  ${textFont("sm", "regular")};
  color: ${color("gray", 500)};
`;

const Error = styled.span`
  ${textFont("sm", "regular")};
  color: ${color("error", 500)};
`;

const SelectOption = ({ option }: SelectOptionProps) => {
  return <option>{option}</option>;
};

export const Select = ({
  icon,
  label,
  error,
  hint,
  state,
  options,
  ...selectProps
}: SelectProps) => {
  const optionsRef = useRef<HTMLSelectElement>(null);
  if (optionsRef.current && optionsRef.current.validationMessage) {
    error = optionsRef.current.validationMessage;
  }
  return (
    <form>
      <Label>
        <LabelText>{label}</LabelText>
        {options && options.length > 0 && (
          <Options ref={optionsRef} error={error} {...selectProps}>
            {options.map((option: string, index) => (
              <SelectOption key={index} option={option} />
            ))}
          </Options>
        )}
        {hint && !error && <Hint>{hint}</Hint>}
        {error && <Error>{error}</Error>}
      </Label>
    </form>
  );
};
