import { useEffect, useState } from "react";

import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import ShopeeLogo from "../assets/logo-shopee.svg";
import TokopediaLogo from "../assets/logo-tokopedia.svg";
import ShopBadge from "../components/ShopBadge";
import { getShopList } from "../mock";
import { Shop } from "../types";

const logoList = {
  tokopedia: TokopediaLogo,
  shopee: ShopeeLogo,
};

const ShopPage = () => {
  const [shopList, setShopList] = useState<Shop[]>([]);

  useEffect(() => {
    setShopList(getShopList());
  }, []);

  return (
    <Box p="6" h="100%" overflow="auto">
      <Text fontWeight="bold" mb="6">
        Shop
      </Text>
      <Flex gap="6" wrap="wrap" alignItems="stretch">
        {shopList.map((item) => (
          <Box
            key={`shop-${item.id}`}
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
              src={logoList[item.ecommerce]}
              alt={`${item.ecommerce} Logo`}
              height="40px"
              objectFit="contain"
            />
            <ShopBadge
              ecommerceName={item.ecommerce}
              shopName={item.name}
              my="4"
            />
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
