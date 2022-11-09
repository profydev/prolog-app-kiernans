import React, { InputHTMLAttributes, useState } from "react";
import styled, { css } from "styled-components";
import { color, space, textFont } from "@styles/theme";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: string;
  label?: string;
  hint?: string;
  error?: string;
};

const Container = styled.div`
  width: 22rem;
  padding: 0.625rem 0.875rem;
  gap: ${space(2)};
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input<InputProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${space(12)};
  width: ${space(64)};
  background-color: white;
  border: 1px solid ${color("gray", 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: ${space(2)};
  ${textFont("md", "regular")};
  color: ${color("gray", 900)};

  &:focus {
    ${({ error }) =>
      error
        ? css`
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px ${color("error", 100)};
            outline: 0 !important;
          `
        : css`
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px ${color("primary", 100)};
            border: 1px solid ${color("primary", 300)};
            outline: 0 !important;
          `};
  }

  &:disabled {
    background-color: ${color("gray", 50)};
    border: 1px solid ${color("gray", 300)};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    color: ${color("gray", 500)};

    ${({ error }) =>
      error &&
      css`
        background-color: white;
        border: 1px solid ${color("error", 300)};
      `}
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${color("error", 300)};
    `};

  ${({ icon }) =>
    icon
      ? css`
          padding: 0rem ${space(12)};
        `
      : css`
          padding: 0rem 1rem;
          width: 20rem;
        `};

  ${({ label }) =>
    !label &&
    css`
      margin-top: 1.8rem;
    `}
`;

const Label = styled.div`
  ${textFont("sm", "medium")};
  color: ${color("gray", 700)};
`;

const InputIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 6.4rem;
  left: 5rem;
`;

const Hint = styled.span`
  ${textFont("sm", "regular")};
  color: ${color("gray", 500)};
`;

const Error = styled.span`
  ${textFont("sm", "regular")};
  color: ${color("error", 500)};
`;

const ErrorIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 6.4rem;
  left: 24rem;
`;

export const Input = ({
  placeholder,
  icon,
  label,
  error,
  hint,
  ...inputProps
}: InputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Container>
      {label && <Label>{label}</Label>}
      {icon && <InputIcon src={icon} alt="Input Icon" />}
      <InputField
        type="text"
        placeholder={placeholder}
        error={error}
        icon={icon}
        label={label}
        value={inputValue}
        onChange={handleInputChange}
        {...inputProps}
      />
      {error && <ErrorIcon src="/icons/input-error.svg" alt="Input Error" />}
      {hint && !error && <Hint>{hint}</Hint>}
      {error && <Error>{error}</Error>}
    </Container>
  );
};
