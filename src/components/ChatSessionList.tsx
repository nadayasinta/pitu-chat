import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";

import { ChatSession, FC } from "../types";
import Avatar from "./Avatar";
import CountBadge from "./CountBadge";
import ShopBadge from "./ShopBadge";

interface Props {
  sessionList: ChatSession[];
}

const ChatSessionList: FC<Props> = ({ sessionList }) => {
  return (
    <Flex direction="column">
      {sessionList.map((item) => (
        <Grid
          key={item.id}
          templateColumns="48px 1fr 52px"
          p="4"
          gap="4"
          borderBottom="2px"
          borderBottomColor="gray.100"
        >
          <GridItem>
            <Avatar name={item.customer.name} mt="1" />
          </GridItem>
          <GridItem as={Flex} direction="column" width="100%">
            <Text fontWeight="bold" fontSize="sm">
              {item.customer.name}
            </Text>
            <Text
              fontSize="xs"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              my="1"
              w="280px"
              isTruncated
            >
              {item.lastMessage.message}
            </Text>
            <ShopBadge
              ecommerceName={item.customer.shop.ecommerce}
              shopName={item.customer.shop.name}
              width="fit-content"
            />
          </GridItem>
          <GridItem as={Flex} direction="column" alignItems="end" gap="3">
            <Text fontSize="xs" color="gray.500">
              {item.lastMessage.createdAt.slice(5, 10)}
            </Text>
            <CountBadge count={item.unrepliedMessageCount} />
          </GridItem>
        </Grid>
      ))}
    </Flex>
  );
};

export default ChatSessionList;
