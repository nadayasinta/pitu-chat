import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  AttachmentIcon,
  CloseIcon,
  InfoOutlineIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";

import Avatar from "../components/Avatar";
import ChatBubble from "../components/ChatBubble";
import ShopBadge from "../components/ShopBadge";
import { dateFormatter } from "../helpers";
import { getChatSessionById, getMessage, sentMessage } from "../mock";
import { ChatSessionDetail, Message } from "../types";

const ChatDetailPage = () => {
  const { sessionId } = useParams<{ sessionId: string }>();
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [newMessage, setNewMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [sessionDetail, setSessionDetail] = useState<ChatSessionDetail>({
    id: 0,
    customer: {
      id: 0,
      name: "",
      shop: {
        id: 0,
        name: "",
        ecommerce: "tokopedia",
      },
    },
    createdAt: "",
  });

  useEffect(() => {
    console.log({ sessionId });
    if (sessionId) {
      console.log("kesini");
      setMessageList([...getMessage()]);
      const sessionData = getChatSessionById(sessionId);
      console.log("sessionData", sessionData);
      if (sessionData) setSessionDetail({ ...sessionData });
    }
  }, [sessionId]);

  const toggleDetails = () => setShowDetail(!showDetail);

  const onChangeNewMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const onKeyDownNewMessage = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      const newMessageList = sentMessage(newMessage, messageList);
      setMessageList(newMessageList);
      setNewMessage("");
    }
  };

  return (
    <Grid
      {...(showDetail
        ? {
            templateAreas: `"header detail" "content detail" "input detail"`,
            templateColumns: "1fr 250px",
          }
        : {
            templateAreas: `"header" "content" "input"`,
            templateColumns: "1fr",
          })}
      height="calc(100vh - 72px)"
      width="100%"
      templateRows="72px 1fr 72px"
    >
      <GridItem
        area="header"
        p="4"
        borderBottom="2px"
        borderBottomColor="gray.100"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize="xl">
            {sessionDetail.customer.name}
          </Text>
          <IconButton
            ml="auto"
            aria-label="Search session"
            fontSize="20px"
            variant="ghost"
            colorScheme="gray"
            icon={<SearchIcon />}
          />
          <IconButton
            ml="1"
            aria-label="Show Details"
            fontSize="20px"
            variant="ghost"
            colorScheme="gray"
            icon={<InfoOutlineIcon />}
            onClick={toggleDetails}
          />
        </Flex>
      </GridItem>

      <GridItem
        area="content"
        as={Flex}
        direction="column"
        p="4"
        bg="blue.100"
        overflowY="auto"
        position="relative"
      >
        {messageList.map((item, index) => (
          <ChatBubble
            key={`message-${item.id}`}
            isIncomingChat={item.isIncomingChat}
            isStartOfSequence={
              index === 0 ||
              item.isIncomingChat !== messageList[index - 1]?.isIncomingChat
            }
            isEndOfSequence={
              index === messageList.length - 1 ||
              item.isIncomingChat !== messageList[index + 1]?.isIncomingChat
            }
            isEndOfChat={index === messageList.length - 1}
            name={item.isIncomingChat ? sessionDetail.customer.name : ""}
            message={item.message}
            createdAt={item.createdAt}
          />
        ))}
      </GridItem>

      <GridItem area="input" p={4} borderTop="2px" borderTopColor="gray.100">
        <Flex align="center">
          <IconButton
            aria-label="Attach"
            fontSize="20px"
            variant="ghost"
            colorScheme="gray"
            icon={<AttachmentIcon />}
          />
          <Box flex="1" mx={2}>
            <Input
              type="text"
              placeholder="Tulis pesan"
              value={newMessage}
              onChange={onChangeNewMessage}
              onKeyDown={onKeyDownNewMessage}
            />
          </Box>
        </Flex>
      </GridItem>

      {showDetail && (
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
            onClick={toggleDetails}
          />
          <Avatar size="xl" name={sessionDetail.customer.name} my="4" />
          <Text fontWeight="bold" fontSize="xl" my="1">
            {sessionDetail.customer.name}
          </Text>
          <Text
            fontSize="sm"
            color="gray.500"
            textTransform="capitalize"
            mb="4"
          >
            {sessionDetail.customer.shop.ecommerce}
          </Text>
          <ShopBadge
            ecommerceName={sessionDetail.customer.shop.ecommerce}
            shopName={sessionDetail.customer.shop.name}
            my="4"
          />
          <Box mt="20">
            <Text fontSize="sm" fontWeight="bold" my="2">
              About conversation
            </Text>
            <Text fontSize="sm" color="gray.500">
              Created: {dateFormatter(sessionDetail.createdAt)}
            </Text>
          </Box>
        </GridItem>
      )}
    </Grid>
  );
};

export default ChatDetailPage;
