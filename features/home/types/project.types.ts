export type Image = {
  src: string;
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

export type Content = {
  image?: Image;
  sectionType: string;
  subtitle?: string;
  companies?: Company[];
  testimonials?: Testimonial[];
  theme: string;
  title: string;
};
