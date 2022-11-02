import React, { ButtonHTMLAttributes } from "react";
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

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

          &:hover {
            background-color: ${color("primary", 700)};
            border: 1px solid ${color("primary", 700)};
          }
          &:focus {
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px ${color("primary", 100)};
          }
          &:disabled {
            background-color: ${color("primary", 200)};
            border: 1px solid ${color("primary", 200)};
          }
        `;
      case ButtonColor.secondary:
        return css`
          background-color: ${color("primary", 50)};
          color: ${color("primary", 700)};
          border: 1px solid ${color("primary", 50)};
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

          &:hover {
            background-color: ${color("primary", 100)};
            border: 1px solid ${color("primary", 100)};
          }
          &:focus {
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px ${color("primary", 100)};
          }
          &:disabled {
            background-color: ${color("primary", 25)};
            border: 1px solid ${color("primary", 25)};
            color: ${color("primary", 300)};
          }
        `;
      case ButtonColor.gray:
        return css`
          background-color: white;
          color: ${color("gray", 700)};
          border: 1px solid ${color("gray", 300)};
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

          &:hover {
            background-color: ${color("gray", 50)};
            border: 1px solid ${color("gray", 300)};
            color: ${color("gray", 800)};
          }
          &:focus {
            border: 1px solid ${color("gray", 300)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px ${color("gray", 100)};
          }
          &:disabled {
            background-color: white;
            border: 1px solid ${color("gray", 200)};
            color: ${color("gray", 300)};
          }
        `;
      case ButtonColor.empty:
        return css`
          background-color: transparent;
          color: ${color("primary", 700)};
          border: none;

          &:hover {
            background-color: ${color("primary", 50)};
          }
          &:disabled {
            color: ${color("gray", 300)};
          }
        `;
      case ButtonColor.emptyGray:
        return css`
          background-color: transparent;
          color: ${color("gray", 500)};
          border: none;

          &:hover {
            background-color: ${color("gray", 50)};
            color: ${color("gray", 600)};
          }
          &:disabled {
            color: ${color("gray", 300)};
          }
        `;
      case ButtonColor.error:
        return css`
          background-color: ${color("error", 600)};
          color: white;
          border: 1px solid ${color("error", 600)};
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

          &:hover {
            background-color: ${color("error", 700)};
            border: 1px solid ${color("error", 700)};
          }
          &:focus {
            border: 1px solid ${color("error", 600)};
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
              0px 0px 0px 4px ${color("error", 100)};
          }
          &:disabled {
            background-color: ${color("error", 200)};
            border: 1px solid ${color("error", 200)};
          }
        `;
    }
  }}
`;

export function Button({
  children,
  size = ButtonSize.md,
  color = ButtonColor.primary,
  ...buttonProps
}: ButtonProps) {
  return (
    <Container size={size} color={color} {...buttonProps}>
      {children}
    </Container>
  );
}
