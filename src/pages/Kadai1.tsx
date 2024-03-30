import NavWrap from "../components/NavWrap";
import { Box } from "@yamada-ui/react";
import { useAtom } from "jotai";
import { countAtom,doubledAtom } from "../store/countAtoms";
import { findIdCircle } from "../features/findIdCircle";
import { circleType } from "../types/circle";

const Kadai1 = () => {
  const [count,setCount] = useAtom(countAtom);
  const [doubledCount] = useAtom(doubledAtom);
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
        width={600}
        height={400}
        mx={"auto"}>
        <p>{count.toString()}</p>
        <p>{doubledCount.toString()}</p>
        <p>{purposeCircle.circleId}</p>
        {/* <p>{purposeCircle2.circleId}</p> */}
      </Box>
    </>
  );
};

export default Kadai1;
