import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { color, textFont } from "@styles/theme";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export enum CheckboxState {
  checked = "checked",
  unchecked = "unchecked",
  partialChecked = "partialChecked",
}

type CheckboxProps = ButtonHTMLAttributes<HTMLInputElement> & {
  children: React.ReactNode;
  size?: CheckboxSize;
  state?: CheckboxState;
  label: string;
};

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
`;

const Input = styled.input`
  --webkit-appearance: none;
  appearance: none;

  width: 1rem;
  height: 1rem;
  border-radius: 0.15rem;
  margin-right: 0.5rem;
  border: 0.15rem solid ${color("primary", 600)};
  outline: none;
  cursor: pointer;
`;

export const Checkbox = ({
  children,
  size = CheckboxSize.md,
  state = CheckboxState.checked,
  label = "Testing",
  ...checkboxProps
}: CheckboxProps) => {
  return (
    <>
      <Label>
        <Input type="checkbox" {...checkboxProps} />
        <span>{label}</span>
      </Label>
    </>
  );
};
