import { ReactNode } from "react";

import { Flex, FlexProps, Icon, Text } from "@chakra-ui/react";

import { FC } from "../types";

interface Props extends FlexProps {
  text: string;
  icon: ReactNode;
}

const MenuIcon: FC<Props> = ({ text, icon, ...props }) => {
  return (
    <Flex
      {...props}
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="80px"
      cursor="pointer"
      color="blue.500"
    >
      <Icon fontSize="20px">{icon}</Icon>
      <Text pt="1" fontWeight="bold" fontSize="sm">
        {text}
      </Text>
    </Flex>
  );
};

export default MenuIcon;
