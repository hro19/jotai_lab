import NavWrap from "../components/NavWrap";
import { Box, Heading } from "@yamada-ui/react";
import { useAtom } from "jotai";
import { countAtom,doubledAtom } from "../store/countAtoms";
import { findIdCircle } from "../features/findIdCircle";
import { circleType } from "../types/circle";
import { bentosAtom,maxBentoAtom } from "../store/bentoAtoms";
import { BentoType } from "../types/bento";

const Kadai1 = () => {
  const [count,setCount] = useAtom(countAtom);
  const [doubledCount] = useAtom(doubledAtom);
  const [bentos] = useAtom(bentosAtom);
  const [maxBento] = useAtom(maxBentoAtom);
  const circles:circleType[]  = [
    { circleId: 1, x: 10, y: 20, figure: "circle" },
    { circleId: 2, x: 30, y: 40, figure: "circle" },
    { circleId: 3, x: 50, y: 60, figure: "rect" },
    { circleId: 4, x: 70, y: 80, figure: "circle" },
];
 const purposeCircle = findIdCircle(circles, 4);
//  console.log(purposeCircle);
// errorが投げられたときは画面が表示されない
//  const purposeCircle2 = findIdCircle(circles, 5);

  return (
    <>
      <NavWrap pageTitle="課題1" />
      <Box as={"div"}
        mx={"auto"}>
        <p>{count.toString()}</p>
        <p>{doubledCount.toString()}</p>
        <p>{purposeCircle.circleId}</p>
          </Box>
          <Box>
          {bentos.map((bento, index) => (
            <p key={index}>{bento.dish} {bento.num}個</p>
          ))}
          <Heading as={"h4"}>唐揚げ数最大</Heading>
          {maxBento.dish} {maxBento.num}個
          </Box>
            </>
          );
};

export default Kadai1;
