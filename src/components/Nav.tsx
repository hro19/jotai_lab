import { Link } from "wouter";
import { Box, Container, Flex, Text } from "@yamada-ui/react";
import { useLocation } from "wouter";
import clsx from 'clsx';

type MenuListType = {
  title: string;
  path: string;
};

const menuList: MenuListType[] = [
  { title: "課題1", path: "/" },
  { title: "課題2", path: "/kadai2" },
  { title: "課題3", path: "/kadai3" },
  { title: "課題4", path: "/kadai4" },
];

function Nav() {
  const [location] = useLocation();
  const isActive = (path: string): boolean => {
    return location === path;
  };

  return (
    <>
      <Box
        bg="green.200"
        py="4"
        mb="2">
        <h1 className="text-green-700 font-bold text-2xl">テンプレート</h1>
      </Box>
      <Container w="100%">
        <nav>
          <Flex
            gap={3}
            justify={"center"}
            flexWrap={"wrap"}>
            {menuList.map((menu: MenuListType, index: number) => (
              <Link
                className={clsx({
                  "pointer-events-none": isActive(menu.path),
                  "hover:opacity-60": !isActive(menu.path)
                })}
                to={menu.path}
                key={index}>
                <Text
                  px={8}
                  py={2}
                  rounded={28}
                  bg={isActive(menu.path) ? "cyan.900" : "cyan.600"}
                  textColor={"white"}
                  className={isActive(menu.path) ? "hover:opacity-70" : ""}>
                  {menu.title}
                </Text>
              </Link>
            ))}
          </Flex>
        </nav>
      </Container>
    </>
  );
}

export default Nav;
