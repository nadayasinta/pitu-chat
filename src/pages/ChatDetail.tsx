import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AttachmentIcon, InfoOutlineIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";

import ChatBubble from "../components/ChatBubble";
import ChatDetailDrawer from "../components/ChatDetailDrawer";
import { getChatSessionById, getMessage, sentMessage } from "../mock";
import { ChatSessionDetail, Message } from "../types";

const ChatDetailPage = () => {
  const navigate = useNavigate();
  const { sessionId } = useParams<{ sessionId: string }>();
  const endOfChatContainerRef = useRef<HTMLDivElement>(null);
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
    if (sessionId) {
      const sessionData = getChatSessionById(sessionId);
      if (sessionData) {
        setSessionDetail({ ...sessionData });
        setMessageList([...getMessage()]);
        scrollToEndOfChat();
      } else {
        navigate("/chat");
      }
    }
  }, [sessionId, navigate]);

  const scrollToEndOfChat = () =>
    endOfChatContainerRef.current?.scrollIntoView({ behavior: "smooth" });

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
      setTimeout(() => {
        scrollToEndOfChat();
      }, 10);
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
      {/* CHAT DETAIL HEADER */}
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

      {/* CHAT SECTION */}
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
        <Box ref={endOfChatContainerRef} />
      </GridItem>

      {/* INPUT CHAT SECTION */}
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

      {/* CHAT DETAIL DRAWER */}
      <ChatDetailDrawer
        session={sessionDetail}
        showDetail={showDetail}
        setShowDetail={setShowDetail}
      />
    </Grid>
  );
};

export default ChatDetailPage;
