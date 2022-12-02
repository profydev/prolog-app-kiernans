export type Image = {
  src?: string;
  width: number;
  height: number;
};

type Company = {
  name: string;
  logo: string;
};

type Testimonial = {
  title: string;
  text: string;
  userCompany: string;
  userImage: Image;
  userName: string;
  userRole: string;
};

export type TestimonialProps = {
  testimonial: Testimonial;
};

export type SectionProps = {
  content: Content;
  openModal: () => void;
};

export type TitleProps = {
  sectionType?: string;
};

export type ContainerProps = {
  sectionType?: string;
  background?: string;
};

export enum SectionType {
  hero = "hero",
  social = "social-proof",
  testimonials = "testimonials",
}

export type Content = {
  image?: Image;
  sectionType: string;
  subtitle?: string;
  companies?: Company[];
  testimonials?: Testimonial[];
  theme: string;
  title: string;
};
