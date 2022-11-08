import React, { InputHTMLAttributes, useState } from "react";
import styled, { css } from "styled-components";
import { color, textFont } from "@styles/theme";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export enum CheckboxState {
  checked = 0,
  partialChecked = 1,
  unchecked = 2,
}

type InputProps = {
  checkboxSize?: CheckboxSize;
  partiallyChecked?: boolean;
};

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> &
  InputProps & {
    label: string;
  };

const Label = styled.label<{ size: CheckboxSize }>`
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
`;

const Input = styled.input<InputProps>`
  --webkit-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  border: 1px solid ${color("primary", 600)};
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.checked &&
    css`
      background: url("/icons/checkmark.svg");
      background-color: ${color("primary", 50)};
      background-repeat: no-repeat;
      background-position: center;
    `}

  ${(props) =>
    props.partiallyChecked &&
    css`
      background: url("/icons/partial-check.svg");
      background-color: ${color("primary", 50)};
      background-repeat: no-repeat;
      background-position: center;
    `}

  ${(props) => {
    switch (props.checkboxSize) {
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
      <Label size={checkboxSize}>
        <Input
          type="checkbox"
          checkboxSize={checkboxSize}
          onChange={handleInputChange}
          checked={isChecked}
          partiallyChecked={isPartiallyChecked}
          {...checkboxProps}
        />
        <span>{label}</span>
      </Label>
    </>
  );
};
