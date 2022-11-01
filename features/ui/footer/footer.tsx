import styled from "styled-components";
import { color, textFont, space, breakpoint } from "@styles/theme";
import Link from "next/link";

type FooterProps = {
  version: string;
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 60px;
  background: ${color("gray", 50)};

  @media (max-width: ${breakpoint("desktop")}) {
    padding: ${space(3)};
    height: 177px;
  }
`;

const FooterInnerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 32px;
  gap: ${space(8)};
  width: 100%;
  height: 33px;

  @media (max-width: ${breakpoint("desktop")}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    height: 177px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 94%;
  height: 33px;

  @media (max-width: ${breakpoint("desktop")}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${space(6)};
    gap: ${space(6)};
    width: 100%;
    height: 177px;
  }
`;

const FooterText = styled.div`
  font-family: Inter;
  ${textFont("md", "regular")};
  color: ${color("gray", 400)};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  gap: ${space(6)};
  width: 28.5%;
  height: 24px;

  @media (max-width: ${breakpoint("desktop")}) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 74%;
  }
`;

const FooterLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: ${space(2)};
  width: 39px;
  height: 24px;
`;

const FooterAnchor = styled.a`
  text-decoration: none;
  font-family: Inter;
  ${textFont("md", "medium")}
  color: ${color("gray", 500)};
`;

const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 14%;
  height: 33px;
`;

const Logo = styled.img`
  width: 23px;
  height: 33px;

  @media (max-width: ${breakpoint("desktop")}) {
    width: 33px;
  }
`;

export const Footer = ({ version }: FooterProps) => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterContent>
          <FooterText>Version: {version}</FooterText>
          <FooterLinks>
            <FooterLink href="#" passHref>
              <FooterAnchor>Docs</FooterAnchor>
            </FooterLink>
            <FooterLink href="#" passHref>
              <FooterAnchor>API</FooterAnchor>
            </FooterLink>
            <FooterLink href="#" passHref>
              <FooterAnchor>Help</FooterAnchor>
            </FooterLink>
            <FooterLink href="#" passHref>
              <FooterAnchor>Community</FooterAnchor>
            </FooterLink>
          </FooterLinks>
          <LogoWrap>
            <Logo src="/icons/logo-small.svg" alt="Small Logo" />
          </LogoWrap>
        </FooterContent>
      </FooterInnerContainer>
    </FooterContainer>
  );
};
