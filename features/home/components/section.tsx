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
import {
  space,
  textFont,
  color,
  container,
  displayFont,
  breakpoint,
} from "@styles/theme";
import { Testimonial } from "./testimonial";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  text-align: center;
`;

const Container = styled.div<ContainerProps>`
  ${containerStyles}
  ${({ sectionType, background }) => {
    switch (sectionType) {
      case SectionType.hero:
        return css`
          gap: ${space(16)};
          padding: ${space(24)} 0px;
          ${background === "light-gray"
            ? css`
                background-color: ${color("gray", 50)};
              `
            : css`
                background-color: white;
              `};
        `;
      case SectionType.social:
        return css`
          justify-content: space-evenly;
          gap: ${space(12)};
          padding: ${space(12)} ${space(8)};
          ${background === "light-gray"
            ? css`
                background-color: ${color("gray", 50)};
              `
            : css`
                background-color: white;
              `};
        `;
      case SectionType.testimonials:
        return css`
          justify-content: space-around;
          padding: ${space(24)} 0px;
          gap: ${space(16)};
          ${background === "light-gray"
            ? css`
                background-color: ${color("gray", 50)};
              `
            : css`
                background-color: white;
              `};
        `;
    }
  }}
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${container("lg")};
  padding: 0px;
  gap: ${space(4)};
`;

const Title = styled.div<TitleProps>`
  ${({ sectionType }) => {
    switch (sectionType) {
      case SectionType.hero:
        return css`
          color: ${color("gray", 900)};
          ${displayFont("xxl", "semibold")};

          @media (max-width: ${breakpoint("desktop")}) {
            ${displayFont("md", "semibold")};
          }
        `;
      case SectionType.social:
        return css`
          color: ${color("gray", 500)};
          ${textFont("lg", "medium")};
        `;
      case SectionType.testimonials:
        return css`
          color: ${color("gray", 900)};
          ${displayFont("xxl", "semibold")};

          @media (max-width: ${breakpoint("desktop")}) {
            ${displayFont("md", "semibold")};
          }
        `;
    }
  }}
`;

const Subtitle = styled.div`
  color: ${color("gray", 500)};
  ${textFont("xl", "regular")};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${container("xl")};
`;

const Companies = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${space(24)};
  max-width: ${container("xl")};

  @media (max-width: ${breakpoint("desktop")}) {
    flex-wrap: wrap;
    gap: ${space(8)};
  }
`;

const Logo = styled.img`
  width: 9rem;
`;

const Testimonials = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;

  @media (max-width: ${breakpoint("desktop")}) {
    display: flex;
    flex-direction: column;
  }
`;

const ContactButton = styled.button`
  position: relative;
  bottom: ${space(6)};
  left: 49rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }

  @media (max-width: ${breakpoint("desktop")}) {
    position: relative;
    bottom: 9rem;
    left: 9rem;
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
      <Container sectionType={sectionType} background={theme}>
        <Heading>
          <Title sectionType={sectionType}>{title}</Title>
        </Heading>
        <Companies>
          {companies?.map((company) => (
            <Logo key={company.name} src={company.logo} alt={company.name} />
          ))}
        </Companies>
      </Container>
    );
  }

  if (sectionType === "testimonials") {
    return (
      <Container sectionType={sectionType} background={theme}>
        <Heading>
          <Title sectionType={sectionType}>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Heading>
        <Testimonials>
          {testimonials?.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </Testimonials>
        <ContactButton onClick={openModal}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/message.svg" alt="Contact" />
        </ContactButton>
      </Container>
    );
  }

  return (
    <Container sectionType={sectionType} background={theme}>
      <Heading>
        <Title sectionType={sectionType}>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Heading>
      <Content>
        <img src={image?.src} alt="Macbook Pro 16 Mockup" />
      </Content>
    </Container>
  );
};
