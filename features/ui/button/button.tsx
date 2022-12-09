import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { breakpoint, color, space, textFont } from "@styles/theme";

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
  none = "none",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: ButtonIcon;
  image?: string;
};

type ImageProps = {
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

const Container = styled.button<{
  size: ButtonSize;
  color: ButtonColor;
  icon: ButtonIcon;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: ${space(2)};
  gap: ${space(3)};
  ${textFont("sm", "regular")}

  @media (max-width: ${breakpoint("desktop")}) {
    padding: 0;
  }

  ${({ size, icon }) => {
    switch (size) {
      case ButtonSize.sm:
        return css`
          height: 2.25rem;
          min-width: ${icon === ButtonIcon.only ? "fit-content" : "8.56rem"};
        `;
      case ButtonSize.md:
        return css`
          height: 2.5rem;
          min-width: ${icon === ButtonIcon.only ? "fit-content" : "8.81rem"};
        `;
      case ButtonSize.lg:
        return css`
          height: 2.75rem;
          min-width: ${icon === ButtonIcon.only ? "fit-content" : "9.75rem"};
          ${textFont("md", "regular")}
        `;
      case ButtonSize.xl:
        return css`
          height: 3rem;
          min-width: ${icon === ButtonIcon.only ? "fit-content" : "10rem"};
          ${textFont("md", "regular")}
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

const Image = styled.img<ImageProps>`
  width: ${space(4)};
  height: ${space(4)};

  ${(props) => {
    switch (props.color) {
      case ButtonColor.primary:
        return css`
          filter: brightness(0) saturate(100%) invert(100%) sepia(6%)
            saturate(0%) hue-rotate(332deg) brightness(104%) contrast(102%);
        `;
      case ButtonColor.secondary:
        return css`
          filter: brightness(0) saturate(100%) invert(20%) sepia(60%)
            saturate(3142%) hue-rotate(248deg) brightness(101%) contrast(83%);

          &:disabled {
            filter: brightness(0) saturate(100%) invert(71%) sepia(48%)
              saturate(682%) hue-rotate(203deg) brightness(108%) contrast(97%);
          }
        `;
      case ButtonColor.gray:
        return css`
          filter: brightness(0) saturate(100%) invert(23%) sepia(8%)
            saturate(2046%) hue-rotate(179deg) brightness(93%) contrast(89%);

          &:disabled {
            filter: brightness(0) saturate(100%) invert(94%) sepia(10%)
              saturate(202%) hue-rotate(182deg) brightness(91%) contrast(89%);
          }
        `;
      case ButtonColor.empty:
        return css`
          filter: brightness(0) saturate(100%) invert(30%) sepia(78%)
            saturate(1610%) hue-rotate(239deg) brightness(79%) contrast(97%);
          &:disabled {
            filter: brightness(0) saturate(100%) invert(84%) sepia(4%)
              saturate(451%) hue-rotate(178deg) brightness(106%) contrast(85%);
          }
        `;
      case ButtonColor.emptyGray:
        return css`
          filter: brightness(0) saturate(100%) invert(44%) sepia(15%)
            saturate(544%) hue-rotate(183deg) brightness(95%) contrast(90%);

          &:disabled {
            filter: brightness(0) saturate(100%) invert(85%) sepia(15%)
              saturate(110%) hue-rotate(178deg) brightness(101%) contrast(87%);
          }
        `;
      case ButtonColor.error:
        return css`
          filter: brightness(0) saturate(100%) invert(100%) sepia(6%)
            saturate(0%) hue-rotate(332deg) brightness(104%) contrast(102%);
        `;
    }
  }}
`;

export function Button({
  children,
  size = ButtonSize.md,
  color = ButtonColor.primary,
  icon = ButtonIcon.leading,
  image = "/icons/alert.svg",
  ...buttonProps
}: ButtonProps) {
  return (
    <Container size={size} color={color} icon={icon} {...buttonProps}>
      {icon === ButtonIcon.leading && (
        <>
          <Image src={image} alt="Button Icon" color={color} />
          {children}
        </>
      )}
      {icon === ButtonIcon.only && (
        <Image src={image} alt="Button Icon" color={color} />
      )}
      {icon === ButtonIcon.none && children}
      {icon === ButtonIcon.trailing && (
        <>
          {children}
          <Image src={image} alt="Button Icon" color={color} />
        </>
      )}
    </Container>
  );
}
