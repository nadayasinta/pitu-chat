import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import EmptyChat from "../assets/empty-chat.svg";
import ChatSessionHeader from "../components/ChatSessionHeader";
import ChatSessionList from "../components/ChatSessionList";
import { getChatSession } from "../mock";
import { ChatSession, ChatSessionFilter } from "../types";

const ChatPage = () => {
  const [sessionList, setSessionList] = useState<ChatSession[]>([]);
  const [sessionFilter, setSessionFilter] = useState<ChatSessionFilter>({
    shopsId: [],
    customerName: "",
  });
  const params = useParams<{ sessionId?: string }>();

  useEffect(() => {
    setSessionList(getChatSession(sessionFilter));
  }, [sessionFilter]);

  return (
    <Grid gridTemplateColumns="450px 1fr">
      {/* SESSION LIST SECTION */}
      <GridItem
        as={Grid}
        gridTemplateRows="72px 1fr"
        borderRight="2px"
        borderRightColor="gray.100"
      >
        <ChatSessionHeader
          sessionFilter={sessionFilter}
          setSessionFilter={setSessionFilter}
        />
        <ChatSessionList sessionList={sessionList} />
      </GridItem>

      {/* CHAT SECTION */}
      {params.sessionId ? (
        <Outlet />
      ) : (
        <GridItem
          as={Flex}
          alignItems="center"
          justifyContent="center"
          direction="column"
          flex="1"
        >
          <Image
            src={EmptyChat}
            alt="No Chat Selected"
            w="50%"
            maxW="300px"
            objectFit="cover"
          />
          <Text fontSize="sm" my="2">
            Tidak ada pesan terpilih
          </Text>
          <Text fontSize="sm" fontWeight="bold">
            Pilih pesan untuk dibaca
          </Text>
        </GridItem>
      )}
    </Grid>
  );
};

export default ChatPage;
