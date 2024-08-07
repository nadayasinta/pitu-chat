import { useEffect, useState } from "react";

import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import ShopeeIcon from "../assets/icon-shopee.svg";
import TokopediaIcon from "../assets/icon-tokopedia.svg";
import ShopeeLogo from "../assets/logo-shopee.svg";
import TokopediaLogo from "../assets/logo-tokopedia.svg";
import { getShopList } from "../mock";
import { Shop } from "../types";

const imageList = {
  tokopedia: {
    logo: TokopediaLogo,
    icon: TokopediaIcon,
    color: "green.100",
  },
  shopee: {
    logo: ShopeeLogo,
    icon: ShopeeIcon,
    color: "orange.100",
  },
};

const ShopPage = () => {
  const [shopList, setShopList] = useState<Shop[]>([]);

  useEffect(() => {
    setShopList(getShopList());
  }, []);

  return (
    <Box p="6">
      <Text fontWeight="bold" mb="6">
        Shop
      </Text>
      <Flex gap="6" wrap="wrap" alignItems="stretch">
        {shopList.map((item) => (
          <Box
            key={item.id}
            as={Flex}
            direction="column"
            width="190px"
            minHeight="200px"
            bgColor="white"
            p="6"
            alignItems="center"
            borderRadius="8px"
          >
            <Image
              src={imageList[item.ecommerce].logo}
              alt="Background"
              height="40px"
              objectFit="contain"
            />
            <Flex
              gap="1"
              p="1"
              my="4"
              alignItems="center"
              borderRadius="5"
              bg={imageList[item.ecommerce].color}
            >
              <Image
                src={imageList[item.ecommerce].icon}
                alt="Background"
                height="16px"
                objectFit="cover"
              />
              <Text fontSize="11px" fontWeight="semibold" textAlign="center">
                {item.name}
              </Text>
            </Flex>
            <Button
              leftIcon={<CheckIcon />}
              py="6"
              px="4"
              mt="auto"
              size="sm"
              isDisabled
            >
              Tersambung
            </Button>
          </Box>
        ))}
        <Box
          as={Flex}
          direction="column"
          width="190px"
          minHeight="200px"
          bgColor="white"
          p="6"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <Button
            leftIcon={<AddIcon />}
            variant="outline"
            py="6"
            px="4"
            size="sm"
          >
            Tambahkan Toko
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ShopPage;
