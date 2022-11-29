/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled, { css } from "styled-components";
import {
  ContainerProps,
  Content,
  SectionProps,
  SectionType,
  TitleProps,
} from "../types/project.types";
import { space, textFont, color, container, displayFont } from "@styles/theme";

const Container = styled.div<ContainerProps>`
  ${({ sectionType }) => {
    switch (sectionType) {
      case SectionType.hero:
        return css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 53.75rem;
          gap: ${space(16)};
          padding: ${space(24)}, 0px;
        `;
      case SectionType.social:
        return css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid red;
          width: 100%;
          height: ${space(64)};
          padding: ${space(24)}, 0px;
        `;
      case SectionType.testimonials:
        return css`
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid green;
          width: 100%;
          height: 50rem;
          padding: ${space(24)}, 0px;
        `;
    }
  }}
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: ${container("lg")};
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

const Companies = styled.div`
  display: flex;
  min-width: ${container("lg")};
`;

const ContactButton = styled.button`
  position: relative;
  top: 21rem;
  left: 19rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

export const Section = ({ content, openModal }: SectionProps) => {
  const {
    image,
    subtitle,
    theme,
    title,
    sectionType,
    companies,
    testimonials,
  } = content;

  if (sectionType === "social-proof") {
    return (
      <Container sectionType={sectionType}>
        <Heading>
          <Title sectionType={sectionType}>{title}</Title>
        </Heading>
        <Companies>
          {companies?.slice(0, 5).map((company) => (
            <img key={company.name} src={company.logo} alt={company.name} />
          ))}
        </Companies>
      </Container>
    );
  }

  if (sectionType === "testimonials") {
    return (
      <Container sectionType={sectionType}>
        <Heading>
          <Title sectionType={sectionType}>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Heading>
        <ContactButton onClick={openModal}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/message.svg" alt="Contact" />
        </ContactButton>
      </Container>
    );
  }

  return (
    <Container sectionType={sectionType}>
      <Heading>
        <Title sectionType={sectionType}>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Heading>
      <Content>
        <img src={image?.src} alt="Mackbook Pro 16 Mockup" />
      </Content>
    </Container>
  );
};
