import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

export enum SelectState {
  empty = "empty",
  filled = "filled",
  focused = "focused",
  disabled = "disabled",
  open = "open",
}

export type SelectProps = SelectInputProps & {
  placeholder?: string;
  icon?: string;
  label?: string;
  hint?: string;
  options?: string[];
};

export type SelectInputProps = {
  error?: string;
  showMenu?: boolean;
  disabled?: boolean;
};

type SelectOptionProps = {
  option: string;
  icon?: string;
  setSelectedValue: (option: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  padding: 0.625rem 0.875rem;
  gap: ${space(2)};
  // Make text unselectable
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Label = styled.div`
  ${textFont("sm", "medium")};
  color: ${color("gray", 700)};
`;

const SelectInput = styled.div<SelectInputProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${space(12)};
  background-color: white;
  border: 1px solid ${color("gray", 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: ${space(2)};
  ${textFont("md", "regular")};
  color: ${color("gray", 900)};
  padding: 0rem 1rem;

  ${({ error, showMenu }) =>
    showMenu &&
    (error
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
        `)};

  ${({ error, disabled }) =>
    !disabled &&
    error &&
    css`
      border: 1px solid ${color("error", 300)};
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${color("gray", 50)};
      border: 1px solid ${color("gray", 500)};
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      color: ${color("gray", 500)};
    `};
`;

const SelectContent = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SelectIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

const SelectedValue = styled.div``;

const SelectArrow = styled.img<{ showMenu: boolean }>`
  ${({ showMenu }) => showMenu && "transform: rotate(180deg)"};
`;

const Hint = styled.span`
  ${textFont("sm", "regular")};
  color: ${color("gray", 500)};
`;

const Error = styled.span`
  ${textFont("sm", "regular")};
  color: ${color("error", 500)};
`;

const SelectOptions = styled.div`
  background-color: white;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  border-radius: ${space(2)};
  position: absolute;
  top: 8.85rem;
  width: 22rem;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  &:hover,
  &:focus {
    background-color: ${color("primary", 25)};
  }
`;

const OptionContent = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const OptionText = styled.span`
  ${textFont("md", "regular")};
  color: ${color("gray", 900)};
`;

const SelectCheckmark = styled.img``;

const SelectOption = ({
  option,
  icon,
  setSelectedValue,
}: SelectOptionProps) => {
  const [showCheck, setShowCheck] = useState(false);

  const handleOptionClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSelectedValue(option);
    setShowCheck(!showCheck);
  };

  return (
    <Option onClick={handleOptionClick}>
      <OptionContent>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {icon && <SelectIcon src={icon} alt="Option Icon" />}
        <OptionText>{option}</OptionText>
      </OptionContent>
      {showCheck && (
        <SelectCheckmark
          src="/icons/select-checkmark.svg"
          alt="Select Checkmark"
        />
      )}
    </Option>
  );
};

export const Select = ({
  placeholder,
  icon,
  label,
  error,
  hint,
  options,
  disabled,
}: SelectProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const handler = () => {
      setShowMenu(false);
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue;
    }
    return placeholder;
  };

  const onOptionClick = (option: string) => {
    setSelectedValue(option);
  };

  const handleInputClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!disabled) {
      setShowMenu(!showMenu);
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <SelectInput
        onClick={handleInputClick}
        error={error}
        showMenu={showMenu}
        disabled={disabled}
      >
        <SelectContent>
          {icon && <SelectIcon src={icon} />}
          <SelectedValue>{getDisplay()}</SelectedValue>
        </SelectContent>
        <SelectArrow src="/icons/select-arrow.svg" showMenu={showMenu} />
      </SelectInput>
      {hint && !error && !showMenu && <Hint>{hint}</Hint>}
      {error && !showMenu && !disabled && <Error>{error}</Error>}
      {showMenu && (
        <SelectOptions>
          {options &&
            options.length > 0 &&
            options.map((option: string, index) => (
              <SelectOption
                setSelectedValue={onOptionClick}
                key={index}
                option={option}
                icon={icon}
              />
            ))}
        </SelectOptions>
      )}
    </Container>
  );
};
