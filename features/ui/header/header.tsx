/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Routes } from "@config/routes";
import Link from "next/link";
import { breakpoint, color, space, textFont, zIndex } from "@styles/theme";
import { useRouter } from "next/router";
import { NavigationContext } from "../sidebar-navigation";
import { HeaderItemLink } from "./header-item-link";
import useViewChecker from "./use-view-checker";

const menuItems = [
  { text: "Home", href: Routes.home },
  { text: "Products", href: Routes.products },
  { text: "Documentation", href: Routes.documentation },
  { text: "Pricing", href: Routes.pricing },
];

const containerStyles = css`
  width: 100%;
`;

const FixedContainer = styled.div`
  ${containerStyles}
  position: fixed;
`;

const HeaderContainer = styled.div`
  ${containerStyles}
  height: ${({ theme }) => theme.size.headerHeight};
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const LinksContainer = styled.div<{ isMobileMenuOpen: boolean }>`
  ${({ isMobileMenuOpen }) =>
    !isMobileMenuOpen
      ? css`
          display: flex;
          width: 420px;
          justify-content: space-around;
        `
      : css`
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: ${space(8)};
          padding: ${space(16)} ${space(12)};
        `}
`;

const DashboardButton = styled.button`
  border-radius: 8px;
  color: white;
  background: #7f56d9;
  border: 1px solid #7f56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  width: 165px;
  height: 44px;
`;

const DashboardMenuButton = styled.button<{ isMobileMenuOpen: boolean }>`
  background-color: white;
  border-style: none;

  z-index: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "3" : "0")};
`;

const DashboardMenu = styled.img`
  background-color: white;
`;

const MenuOverlay = styled.div<{ isMobileMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen ? "rgba(52, 64, 84, 0.6);" : "rgba(52, 64, 84, 0);"};
  z-index: 1;

  transform: translateX(
    ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0" : "100%")}
  );
  transition: opacity 300ms,
    transform 0s
      ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0s" : "300ms")};
`;

const MenuContainer = styled.div<{ isMobileMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: ${space(64)};
  height: 100vh;
  background-color: white;
  opacity: 100%;
  z-index: 2;

  transform: translateX(
    ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0" : "100%")}
  );
`;

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMobile } = useViewChecker();

  if (isMobile) {
    return (
      <FixedContainer>
        <HeaderContainer>
          <img src="/icons/logo-large.svg" alt="Prolog logo" />
          <DashboardMenuButton
            isMobileMenuOpen={isMobileMenuOpen}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <DashboardMenu src="/icons/landing-menu.svg" alt="mobile menu" />
          </DashboardMenuButton>
        </HeaderContainer>
        <MenuOverlay isMobileMenuOpen={isMobileMenuOpen}>
          <MenuContainer isMobileMenuOpen={isMobileMenuOpen}>
            <LinksContainer isMobileMenuOpen={isMobileMenuOpen}>
              {menuItems.map((menuItem, index) => (
                <HeaderItemLink key={index} {...menuItem} />
              ))}
            </LinksContainer>
          </MenuContainer>
        </MenuOverlay>
      </FixedContainer>
    );
  }

  return (
    <FixedContainer>
      <HeaderContainer>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <LinksContainer isMobileMenuOpen={isMobileMenuOpen}>
          {menuItems.map((menuItem, index) => (
            <HeaderItemLink key={index} {...menuItem} />
          ))}
        </LinksContainer>
        <a href={Routes.projects}>
          <DashboardButton>Open Dashboard</DashboardButton>
        </a>
      </HeaderContainer>
    </FixedContainer>
  );
};
