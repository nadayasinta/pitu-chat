import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import ShopeeIcon from "../assets/icon-shopee.svg";
import TokopediaIcon from "../assets/icon-tokopedia.svg";
// import ShopeeLogo from "../logo/logo-shopee.svg";
// import TokopediaLogo from "../logo/logo-tokopedia.svg";
import { Shop } from "../types";

const imageList = {
  tokopedia: {
    // logo: TokopediaLogo,
    logo: TokopediaIcon,
    icon: TokopediaIcon,
    color: "green.100",
  },
  shopee: {
    // logo: ShopeeLogo,
    logo: ShopeeIcon,
    icon: ShopeeIcon,
    color: "orange.100",
  },
};
const shop: Shop[] = [
  {
    id: 1,
    name: "Beauty Lovers",
    ecommerce: "tokopedia",
  },
  {
    id: 2,
    name: "Beauty Lovers Official",
    ecommerce: "shopee",
  },
  {
    id: 1,
    name: "Beauty Lovers",
    ecommerce: "tokopedia",
  },
  {
    id: 2,
    name: "Beauty Lovers Official",
    ecommerce: "shopee",
  },
  {
    id: 1,
    name: "Beauty Lovers",
    ecommerce: "tokopedia",
  },
  {
    id: 2,
    name: "Beauty Lovers Official",
    ecommerce: "shopee",
  },
  {
    id: 1,
    name: "Beauty Lovers",
    ecommerce: "tokopedia",
  },
  {
    id: 2,
    name: "Beauty Lovers Official",
    ecommerce: "shopee",
  },
  {
    id: 2,
    name: "Beauty Lovers Official",
    ecommerce: "shopee",
  },
  {
    id: 1,
    name: "Beauty Lovers",
    ecommerce: "tokopedia",
  },
  {
    id: 2,
    name: "Beauty Lovers Official",
    ecommerce: "shopee",
  },
  {
    id: 2,
    name: "Beauty Lovers Official",
    ecommerce: "shopee",
  },
  {
    id: 1,
    name: "Beauty Lovers",
    ecommerce: "tokopedia",
  },
  {
    id: 2,
    name: "Beauty Lovers Official",
    ecommerce: "shopee",
  },
];

const ShopPage = () => {
  return (
    <Box p="5">
      <Text fontWeight="bold" mb="6">
        Shop
      </Text>
      <Flex gap="6" wrap="wrap" alignItems="stretch">
        {shop.map((item) => (
          <Box
            key={item.id}
            as={Flex}
            direction="column"
            width="200px"
            minHeight="220px"
            bgColor="white"
            p="5"
            alignItems="center"
          >
            <Image
              src={imageList[item.ecommerce].logo}
              alt="Background"
              height="60px"
              objectFit="cover"
            />
            <Flex
              gap="1"
              px="2"
              py="1"
              my="3"
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
              <Text fontSize="xs" textAlign="center">
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
          width="200px"
          minHeight="200px"
          bgColor="white"
          p="5"
          alignItems="center"
          justifyContent="center"
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
