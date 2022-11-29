import React from "react";
import styled, { css } from "styled-components";
import { Content } from "../types/project.types";
import { space, textFont, color, container, displayFont } from "@styles/theme";

type SectionProps = {
  content: Content;
};

type TitleProps = {
  sectionType?: string;
};

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: ${container("lg")};
  min-height: ${space(40)};
  padding: 0px;
  gap: ${space(4)};
`;

const Title = styled.div<TitleProps>`
  ${({ sectionType }) =>
    sectionType === "social-proof"
      ? css`
          color: ${color("gray", 500)};
          ${textFont("lg", "medium")};
        `
      : css`
          color: ${color("gray", 900)};
          ${displayFont("xxl", "semibold")};
        `}
`;

const Subtitle = styled.div`
  color: ${color("gray", 500)};
  ${textFont("xl", "regular")};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: ${container("xl")};
`;

export const Section = ({ content }: SectionProps) => {
  const { image, subtitle, theme, title, sectionType } = content;

  if (sectionType === "social-proof") {
    return (
      <>
        <Title sectionType={sectionType}>{title}</Title>
      </>
    );
  }

  if (sectionType === "testimonials") {
    return (
      <>
        <Heading>
          <Title sectionType={sectionType}>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Heading>
      </>
    );
  }

  return (
    <>
      <Heading>
        <Title sectionType={sectionType}>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Heading>
      <Content>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src={image?.src} alt="Mackbook Pro 16 Mockup" />
      </Content>
    </>
  );
};
