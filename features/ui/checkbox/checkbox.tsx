import React, { InputHTMLAttributes, useState } from "react";
import styled, { css } from "styled-components";
import { color, textFont } from "@styles/theme";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export enum CheckboxState {
  unchecked = 0,
  partialChecked = 1,
  checked = 2,
}

type InputProps = {
  checkboxSize?: CheckboxSize;
  partiallyChecked?: boolean;
};

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> &
  InputProps & {
    label: string;
  };

const Label = styled.label<{ size: CheckboxSize; disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  color: ${color("gray", 700)};

  ${(props) => {
    switch (props.size) {
      case CheckboxSize.sm:
        return css`
          ${textFont("sm", "medium")};
        `;
      case CheckboxSize.md:
        return css`
          ${textFont("md", "medium")};
        `;
    }
  }}

  ${(props) =>
    props.disabled &&
    css`
      color: ${color("gray", 300)};
    `}
`;

const Input = styled.input<InputProps>`
  --webkit-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  border: 1px solid ${color("primary", 600)};
  outline: none;
  cursor: pointer;

  &:focus {
    background-color: white;
    box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
  }

  &:disabled {
    background-color: ${color("gray", 100)};
    border: 1px solid ${color("gray", 200)};
  }

  ${({ checked }) =>
    checked &&
    css`
      background: url("/icons/checkmark.svg");
      background-color: ${color("primary", 50)};
      background-repeat: no-repeat;
      background-position: center;
    `}

  ${({ partiallyChecked }) =>
    partiallyChecked &&
    css`
      background: url("/icons/partial-check.svg");
      background-color: ${color("primary", 50)};
      background-repeat: no-repeat;
      background-position: center;
    `}

  ${({ checkboxSize }) => {
    switch (checkboxSize) {
      case CheckboxSize.sm:
        return css`
          width: 1rem;
          height: 1rem;
          background-size: 0.6rem;
        `;
      case CheckboxSize.md:
        return css`
          width: 1.25rem;
          height: 1.25rem;
          background-size: 0.8rem;
        `;
    }
  }}
`;

export const Checkbox = ({
  checkboxSize = CheckboxSize.md,
  label = "Label",
  disabled = false,
  ...checkboxProps
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPartiallyChecked, setIsPartiallyChecked] = useState(false);
  const [checkCount, setCheckCount] = useState(0);

  const handleInputChange = () => {
    setCheckCount((prevCount) => prevCount + 1);
    if (checkCount % 3 === CheckboxState.unchecked) {
      setIsChecked(false);
      setIsPartiallyChecked(false);
    } else if (checkCount % 3 === CheckboxState.partialChecked) {
      setIsPartiallyChecked(true);
      setIsChecked(false);
    } else {
      setIsChecked(true);
      setIsPartiallyChecked(false);
    }
  };

  return (
    <>
      <Label size={checkboxSize} disabled={disabled}>
        <Input
          type="checkbox"
          checkboxSize={checkboxSize}
          onChange={handleInputChange}
          checked={isChecked}
          partiallyChecked={isPartiallyChecked}
          disabled={disabled}
          {...checkboxProps}
        />
        <span>{label}</span>
      </Label>
    </>
  );
};
