import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { SidebarNavigation } from "@features/ui";
import { color, displayFont, textFont, space, breakpoint } from "@styles/theme";
import Link from "next/link";
import { version } from "../../../package.json";

type PageContainerProps = {
  children: React.ReactNode;
  title: string;
  info: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${color("gray", 900)};

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const ContentContainer = styled.div`
  min-height: calc(
    100vh - 2 * ${space(8)} - ${({ theme }) => theme.size.headerHeight}
  );
  margin-top: ${({ theme }) => theme.size.headerHeight};
  padding: ${space(8, 3)};
  background: white;

  @media (min-width: ${breakpoint("desktop")}) {
    min-height: calc(100vh - ${space(3)} - 2 * ${space(8)});
    margin-top: ${space(3)};
    padding: ${space(8)};
    border-top-left-radius: ${space(10)};
  }
`;

const Title = styled.h1`
  margin: ${space(0, 0, 1)};
  color: ${color("gray", 900)};
  ${displayFont("sm", "medium")}
`;

const Info = styled.div`
  margin-bottom: ${space(8)};
  color: ${color("gray", 500)};
  ${textFont("md", "regular")}
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 100%;
  height: 60px;

  background: ${color("gray", 50)};
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 32px;
  gap: ${space(8)};

  width: 100%;
  height: 33px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  width: 94%;
  height: 33px;
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
  width: 23px;
  height: 33px;
`;

export function PageContainer({ children, title, info }: PageContainerProps) {
  return (
    <Container>
      <Head>
        <title>ProLog - {title}</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarNavigation />
      <Main>
        <ContentContainer>
          <Title>{title}</Title>
          <Info>{info}</Info>
          {children}
        </ContentContainer>
        <Footer>
          <FooterContainer>
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
          </FooterContainer>
        </Footer>
      </Main>
    </Container>
  );
}
