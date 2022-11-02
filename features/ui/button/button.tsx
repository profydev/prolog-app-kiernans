import React from "react";
import styled, { css } from "styled-components";
import { color } from "@styles/theme";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
}

export enum ButtonIcon {
  leading = "leading",
  trailing = "trailing",
  only = "only",
}

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
};

export const DefaultButton = styled.button`
  cursor: pointer;

  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

const Container = styled.button<{ size: ButtonSize; color: ButtonColor }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  border-radius: 8px;

  ${(props) => {
    switch (props.size) {
      case ButtonSize.sm:
        return css`
          height: 2.25rem;
          width: 6.56rem;
        `;
      case ButtonSize.md:
        return css`
          height: 2.5rem;
          width: 6.81rem;
        `;
      case ButtonSize.lg:
        return css`
          height: 2.75rem;
          width: 7.75rem;
        `;
      case ButtonSize.xl:
        return css`
          height: 3rem;
          width: 8rem;
        `;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case ButtonColor.primary:
        return css`
          background-color: ${color("primary", 600)};
          color: white;
          border: 1px solid ${color("primary", 600)};

          $:hover {
            background-color: ${color("primary", 700)};
            border: 1px solid ${color("primary", 700)};
          }
          $:focus {
            border: 4px solid ${color("primary", 100)};
          }
          $:disabled {
            background-color: ${color("primary", 200)};
            border: 1px solid ${color("primary", 200)};
          }
        `;
      case ButtonColor.secondary:
        return css`
          background-color: ${color("primary", 50)};
          color: ${color("primary", 700)};
        `;
      case ButtonColor.gray:
        return css`
          background-color: ${color("gray", 300)};
          color: ${color("gray", 700)};
        `;
      case ButtonColor.empty:
        return css`
          background-color: none;
          color: ${color("primary", 700)};
        `;
      case ButtonColor.emptyGray:
        return css`
          background-color: none;
          color: ${color("gray", 500)};
        `;
      case ButtonColor.error:
        return css`
          background-color: ${color("error", 600)};
          color: white;
        `;
    }
  }}
`;

export function Button({
  children,
  size = ButtonSize.md,
  color = ButtonColor.primary,
}: ButtonProps) {
  return (
    <Container size={size} color={color}>
      {children}
    </Container>
  );
}
