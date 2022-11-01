import styled from "styled-components";
import { color, textFont, space } from "@styles/theme";
import Link from "next/link";

type FooterProps = {
  version: string;
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: ${space(8)};

  width: 100%;
  height: 177px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${space(6)};
  gap: ${space(6)};

  width: 100%;
  height: 177px;
`;

const FooterText = styled.div`
  font-family: Inter;
  ${textFont("md", "regular")};
  color: ${color("gray", 400)};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: ${space(6)};
  width: 74%;
  height: 24px;
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
  align-items: flex-end;
  padding: 0px;
  width: 14%;
  height: 33px;
`;

const Logo = styled.img`
  width: 33px;
  height: 33px;
`;

export const MobileFooter = ({ version }: FooterProps) => {
  return (
    <FooterContainer>
      <FooterContent>
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
        <FooterText>Version: {version}</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};
