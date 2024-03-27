import NavWrap from "../components/NavWrap";
import { Center } from "@yamada-ui/react";
import { useAtom } from "jotai";
import { countAtom,doubledAtom } from "../store/countAtoms";

const Kadai1 = () => {
  const [count] = useAtom(countAtom);
  const [doubledCount] = useAtom(doubledAtom);

  return (
    <>
      <NavWrap pageTitle="課題1" />
      <Center
        width={600}
        height={400}
        mx={"auto"}>
        {count.toString()}
        <br />
        {doubledCount.toString()}
        <br />
      </Center>
    </>
  );
};

export default Kadai1;
