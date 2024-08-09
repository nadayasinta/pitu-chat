import { Dispatch, SetStateAction } from "react";

import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, GridItem, IconButton, Text } from "@chakra-ui/react";

import Avatar from "../components/Avatar";
import ShopBadge from "../components/ShopBadge";
import { dateFormatter } from "../helpers";
import { ChatSessionDetail, FC } from "../types";

interface Props {
  session: ChatSessionDetail;
  showDetail: boolean;
  setShowDetail: Dispatch<SetStateAction<boolean>>;
}

const ChatDetailDrawer: FC<Props> = ({
  session,
  showDetail,
  setShowDetail,
}) => {
  return !showDetail ? (
    <></>
  ) : (
    <GridItem
      area="detail"
      p={4}
      as={Flex}
      borderLeft="2px"
      borderLeftColor="gray.100"
      bg="white"
      direction="column"
      alignItems="center"
      textAlign="center"
    >
      <IconButton
        alignSelf="flex-end"
        aria-label="Close Details"
        variant="ghost"
        colorScheme="gray"
        icon={<CloseIcon />}
        size="sm"
        onClick={() => setShowDetail(false)}
      />
      <Avatar size="xl" name={session.customer.name} my="4" />
      <Text fontWeight="bold" fontSize="xl" my="1">
        {session.customer.name}
      </Text>
      <Text fontSize="sm" color="gray.500" textTransform="capitalize" mb="4">
        {session.customer.shop.ecommerce}
      </Text>
      <ShopBadge
        ecommerceName={session.customer.shop.ecommerce}
        shopName={session.customer.shop.name}
        my="4"
      />
      <Box mt="20">
        <Text fontSize="sm" fontWeight="bold" my="2">
          About conversation
        </Text>
        <Text fontSize="sm" color="gray.500">
          Created: {dateFormatter(session.createdAt)}
        </Text>
      </Box>
    </GridItem>
  );
};

export default ChatDetailDrawer;
