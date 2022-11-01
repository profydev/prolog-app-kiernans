import styled from "styled-components";
import { Routes } from "@config/routes";
import Link from "next/link";
import { color, space, textFont } from "@styles/theme";

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

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 64, 84, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  backdrop-filter: blur(8px);
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 288px;
  background: #ffffff;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  border-radius: 12px;
  gap: ${space(8)};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: ${space(5)};
  width: 352px;
  height: 164px;
`;

const ModalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: ${space(2)};
  width: 352px;
  height: 96px;
`;

const ModalText = styled.div`
  font-family: Inter;
  color: ${color("gray", 900)};
  ${textFont("lg", "medium")};
  text-align: center;
`;

const ModalSubtext = styled(ModalText)`
  color: ${color("gray", 500)};
  ${textFont("sm", "regular")};
`;

const ModalImage = styled.img`
  width: 44px;
  height: 44px;
`;

const ModalActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: ${space(3)};

  width: 352px;
  height: 44px;
`;

const ModalButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  width: 170px;
  height: 44px;
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  font-family: Inter;
  ${textFont("md", "medium")};
`;

const ModalCancelButton = styled(ModalButton)`
  background: #ffffff;
  border: 1px solid #d0d5dd;
  color: ${color("gray", 700)};
`;

const ModalEmailButton = styled(ModalButton)`
  background: #7f56d9;
  border: 1px solid #7f56d9;
  color: white;
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
      <ModalBackground>
        <Modal>
          <ModalContent>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <ModalImage src="/icons/email.svg" alt="Email Icon" />
            <ModalTextContainer>
              <ModalText>Contact Us Via Email</ModalText>
              <ModalSubtext>
                Any questions? Send us an email at prolog@profy.dev. We usually
                answer within 24 hours.
              </ModalSubtext>
            </ModalTextContainer>
          </ModalContent>
          <ModalActions>
            <ModalCancelButton>Cancel</ModalCancelButton>
            <ModalEmailButton>Open Email App</ModalEmailButton>
          </ModalActions>
        </Modal>
      </ModalBackground>
    </div>
  );
};

export default IssuesPage;
