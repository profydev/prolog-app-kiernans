/* eslint-disable @next/next/no-img-element */
import styled, { css } from "styled-components";
import { TestimonialProps, Image } from "../types/home.types";
import { textFont, color, space, displayFont } from "@styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 26rem;
  width: 23.5rem;
  border-style: none;
  border-radius: 1rem;
  padding: ${space(10)} ${space(6)};
  gap: ${space(6)};

  &:nth-child(odd) {
    background-color: ${color("primary", 50)};
  }

  &:nth-child(even) {
    background-color: ${color("gray", 50)};
  }
`;

const Title = styled.div`
  ${textFont("sm", "semibold")};
  color: ${color("primary", 700)};
  text-align: center;
  width: 20.5rem;
`;

const Quote = styled.div`
  ${displayFont("xs", "medium")};
  color: ${color("primary", 900)};
  width: 20.5rem;
  text-align: center;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20.5rem;
`;

const Avatar = styled.img<Image>`
  ${({ width, height }) => {
    return css`
      width: ${width}px;
      height: ${height}px;
    `;
  }}
`;

const Username = styled.div`
  ${textFont("md", "medium")};
  color: ${color("primary", 900)};
`;

const UserRole = styled.div`
  ${textFont("sm", "regular")};
  color: ${color("primary", 700)};
`;

export const Testimonial = ({ testimonial }: TestimonialProps) => {
  const { title, text, userCompany, userImage, userName, userRole } =
    testimonial;

  return (
    <Container>
      <Title>{title}</Title>
      <Quote>{text}</Quote>
      <UserContainer>
        <Avatar
          src={userImage.src}
          alt={userName}
          width={userImage.width}
          height={userImage.height}
        />
        <Username>{userName}</Username>
        <UserRole>
          {userRole}, {userCompany}
        </UserRole>
      </UserContainer>
    </Container>
  );
};
