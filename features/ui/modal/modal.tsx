import React from "react";
import styled from "styled-components";
import { color, space, textFont } from "@styles/theme";

type ModalProps = {
  closeModal: () => void;
};

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 64, 84, 0.6);
  width: 100%;
  min-height: 100%;
  z-index: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  backdrop-filter: blur(8px);
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 18rem;
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

export const Modal = ({ closeModal }: ModalProps) => {
  return (
    <ModalBackground>
      <ModalContainer>
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
          <ModalCancelButton onClick={closeModal}>Cancel</ModalCancelButton>
          <ModalEmailButton
            onClick={() =>
              window.open(
                "mailto:support@prolog-app.com?subject=Support Request:"
              )
            }
          >
            Open Email App
          </ModalEmailButton>
        </ModalActions>
      </ModalContainer>
    </ModalBackground>
  );
};
