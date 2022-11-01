import styled from "styled-components";
import { Routes } from "@config/routes";
import Link from "next/link";
import { color, textFont } from "@styles/theme";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
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

const LinksContainer = styled.div`
  display: flex;
  width: 420px;
  justify-content: space-around;
`;

const HeaderAnchor = styled.a`
  text-decoration: none;
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
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

const IssuesPage = () => {
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <LinksContainer>
          <Link href={Routes.home} passHref>
            <HeaderAnchor>Home</HeaderAnchor>
          </Link>
          <Link href={Routes.products} passHref>
            <HeaderAnchor>Products</HeaderAnchor>
          </Link>
          <Link href={Routes.documentation} passHref>
            <HeaderAnchor>Documentation</HeaderAnchor>
          </Link>
          <Link href={Routes.pricing} passHref>
            <HeaderAnchor>Pricing</HeaderAnchor>
          </Link>
        </LinksContainer>
        <a href={Routes.projects}>
          <DashboardButton>Open Dashboard</DashboardButton>
        </a>
      </Header>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
