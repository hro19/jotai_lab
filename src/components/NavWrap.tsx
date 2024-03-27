import Nav from "../components/Nav";
import { Heading } from "@yamada-ui/react";

const NavWrap = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <>
      <Nav />
      <Heading
        as="h2"
        size="2xl"
        mb={3}
        isTruncated>
        {pageTitle}
      </Heading>
    </>
  );
};

export default NavWrap;
