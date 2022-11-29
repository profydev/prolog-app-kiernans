import { useState } from "react";
import { Header, Modal } from "../features/ui";
import styled from "styled-components";
import { space } from "@styles/theme";
import { Hero, Social, Testimonial, useHome } from "../features/home";

const ContactButton = styled.button`
  position: relative;
  top: 45rem;
  left: 103rem;
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

const HeroContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 53.75rem;
`;

const SocialContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: ${space(64)};
`;

const TestimonialContainer = styled.div`
  border: 1px solid green;
  width: 100%;
  height: 50rem;
`;

const IssuesPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data, isError, isLoading, error } = useHome();

  const closeModal = () => {
    setOpenModal(false);
  };

  if (!isLoading) {
    const { meta, sections } = data;
    const heroSection = sections?.find(
      (section) => section.sectionType === "hero"
    );
    const socialSection = sections?.find(
      (section) => section.sectionType === "social-proof"
    );
    const testimonialSection = sections?.find(
      (section) => section.sectionType === "testimonials"
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error(error);
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header />
      <HeroContainer>
        <Hero />
      </HeroContainer>
      <SocialContainer>
        <Social />
      </SocialContainer>
      <TestimonialContainer>
        <Testimonial />
        <ContactButton onClick={() => setOpenModal(true)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/message.svg" alt="Contact" />
        </ContactButton>
      </TestimonialContainer>
      {openModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default IssuesPage;
