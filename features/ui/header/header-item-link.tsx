import { color, textFont } from "@styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

type HeaderItemLinkProps = {
  text: string;
  href: string;
};

const Anchor = styled.a`
  text-decoration: none;
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
`;

export const HeaderItemLink = ({ text, href }: HeaderItemLinkProps) => {
  return (
    <Link href={href} passHref>
      <Anchor>{text}</Anchor>
    </Link>
  );
};
