import { useState } from "react";
import { Header, Modal } from "../features/ui";
import styled from "styled-components";
import { space } from "@styles/theme";
import { Section, useHome } from "../features/home";

const IssuesPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data, isError, isLoading, error } = useHome();

  const handleCloseModal = () => {
    setOpenModal(false);
    //Reenable scrolling
    document.body.style.overflow = "unset";
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    //Scroll to top of page
    window.scrollTo({ top: 0, left: 0 });
    //Disable scrolling
    document.body.style.overflow = "hidden";
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
