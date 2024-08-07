import { Flex, FlexProps, Image, Text } from "@chakra-ui/react";

import ShopeeIcon from "../assets/icon-shopee.svg";
import TokopediaIcon from "../assets/icon-tokopedia.svg";
import { EcommerceName, FC } from "../types";

interface Props extends FlexProps {
  ecommerceName: EcommerceName;
  shopName: string;
}

const ecommerceProperties = {
  tokopedia: {
    icon: TokopediaIcon,
    color: "green.100",
  },
  shopee: {
    icon: ShopeeIcon,
    color: "orange.100",
  },
};

const ShopBadge: FC<Props> = ({ ecommerceName, shopName, ...props }) => {
  return (
    <Flex
      {...props}
      gap="1"
      p="1"
      alignItems="center"
      borderRadius="5"
      bg={ecommerceProperties[ecommerceName].color}
    >
      <Image
        src={ecommerceProperties[ecommerceName].icon}
        alt={`${ecommerceName} Icon`}
        height="16px"
        objectFit="cover"
        float="left"
      />
      <Text
        float="right"
        fontSize="10px"
        fontWeight="semibold"
        textAlign="center"
      >
        {shopName}
      </Text>
    </Flex>
  );
};

export default ShopBadge;
