import NavWrap from "../components/NavWrap";
import { Button,ButtonGroup, Center } from "@yamada-ui/react";
import useCounter from "../hooks/useCounter";

function Kadai2() {
  const {count, increase, decrease, isDecreaseDisable} = useCounter();
  return (
    <>
      <NavWrap pageTitle="課題2" />
      <Center
        width={600}
        height={400}
        mx={"auto"}>
        {count}
      </Center>
      <ButtonGroup isAttached variant="outline">
        <Button colorScheme="secondary" variant="outline" onClick={increase}>増える</Button>
        <Button colorScheme="teal" variant="outline" isDisabled={isDecreaseDisable} onClick={decrease}>減る</Button>
      </ButtonGroup>
    </>
  );
}

export default Kadai2;
