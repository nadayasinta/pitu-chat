import { useMemo } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

import Avatar from "../components/Avatar";
import { chatTimeFormatter } from "../helpers";
import { FC } from "../types";

interface ChatConfig {
  justify: string;
  alignItems: string;
  bg: string;
  color: string;
  textAlign: "left" | "right";
  borderRadius: string;
}

const incomingChatConfig: ChatConfig = {
  justify: "flex-start",
  alignItems: "start",
  bg: "white",
  color: "black",
  textAlign: "left",
  borderRadius: "20px 20px 20px 0px",
};

const outcomingChatConfig: ChatConfig = {
  justify: "flex-end",
  alignItems: "end",
  bg: "blue.500",
  color: "white",
  textAlign: "right",
  borderRadius: "20px 20px 0px 20px",
};

interface Props {
  isIncomingChat: boolean; // Indicates if the message is sent to the current user from customer
  isStartOfSequence: boolean; // Indicates if the message is the first one in a sequence of messages
  isEndOfSequence: boolean; // Indicates if the message is the last one in a sequence of messages
  isEndOfChat: boolean; // Indicates if the message is the last message of all messages.
  name: string;
  message: string;
  createdAt: string;
}

const ChatBubble: FC<Props> = ({
  isIncomingChat,
  isStartOfSequence,
  isEndOfSequence,
  isEndOfChat,
  name,
  message,
  createdAt,
}) => {
  const stylingConfig: ChatConfig = useMemo(
    () => (isIncomingChat ? incomingChatConfig : outcomingChatConfig),
    [isIncomingChat]
  );
  return (
    <Flex mb="1" justify={stylingConfig.justify} alignItems="end">
      {isIncomingChat &&
        (isEndOfSequence ? (
          <Avatar name={name} size="sm" mb="10" />
        ) : (
          <Box w="32px"></Box>
        ))}
      <Flex
        ml="2"
        textAlign={stylingConfig.textAlign}
        alignItems={stylingConfig.alignItems}
        direction="column"
      >
        {isStartOfSequence && isIncomingChat && (
          <Text fontSize="xs" color="gray.500" mx="3">
            {name}
          </Text>
        )}
        <Text
          fontSize="sm"
          bg={stylingConfig.bg}
          color={stylingConfig.color}
          borderRadius={stylingConfig.borderRadius}
          py="2"
          px="3"
          maxW="500px"
          w="fit-content"
          my="1"
        >
          {message}
        </Text>
        {isEndOfSequence && (
          <Text fontSize="xs" color="gray.500" mx="3" mb="4">
            {isEndOfChat && !isIncomingChat && "Sent · "}
            {chatTimeFormatter(createdAt)}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default ChatBubble;
