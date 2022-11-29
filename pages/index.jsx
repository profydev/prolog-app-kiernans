import { useState } from "react";
import { Header, Modal } from "../features/ui";
import styled from "styled-components";
import { space } from "@styles/theme";
import { Section, useHome } from "../features/home";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 53.75rem;
  gap: ${space(16)};
  padding: ${space(24)}, 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  width: 100%;
  height: ${space(64)};
  padding: ${space(24)}, 0px;
`;

const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  width: 100%;
  height: 50rem;
  padding: ${space(24)}, 0px;
`;

const IssuesPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data, isError, isLoading, error } = useHome();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    window.scrollTo({ top: 0, left: 0 });
  };

  if (!isLoading) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { meta, sections } = data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const heroSection = sections?.find(
      (section) => section.sectionType === "hero"
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const socialSection = sections?.find(
      (section) => section.sectionType === "social-proof"
    );

    console.log(sections);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

      {/*eslint-disable-next-line no-undef */}
      <Section content={heroSection} />

      {/*eslint-disable-next-line no-undef */}
      <Section content={socialSection} />

      {/*eslint-disable-next-line no-undef */}
      <Section content={testimonialSection} openModal={handleOpenModal} />
      {openModal && <Modal closeModal={handleCloseModal} />}
    </div>
  );
};

export default IssuesPage;
