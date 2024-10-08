import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Flex,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { timeAgoFormatter } from "../helpers";
import { ChatSession, ChatSessionMenu, FC } from "../types";
import Avatar from "./Avatar";
import CountBadge from "./CountBadge";
import ShopBadge from "./ShopBadge";

interface SessionMenuDetail {
  id: ChatSessionMenu;
  title: string;
}

const sessionMenu: SessionMenuDetail[] = [
  {
    id: "unreplied",
    title: "Perlu balas",
  },
  {
    id: "replied",
    title: "Terbalas",
  },
  {
    id: "all",
    title: "Semua chat",
  },
];

interface Props {
  sessionList: ChatSession[];
}

const ChatSessionList: FC<Props> = ({ sessionList }) => {
  const { sessionId } = useParams<{ sessionId: string }>();
  const [tabIndex, setTabIndex] = useState<number>(0);

  const unrepliedSession: ChatSession[] = useMemo(() => {
    return sessionList.filter((item) => item.unrepliedMessageCount > 0);
  }, [sessionList]);

  const repliedSession: ChatSession[] = useMemo(() => {
    return sessionList.filter((item) => item.unrepliedMessageCount === 0);
  }, [sessionList]);

  const sessionTabPanels: ChatSession[][] = useMemo(() => {
    return [unrepliedSession, repliedSession, sessionList];
  }, [unrepliedSession, repliedSession, sessionList]);

  return (
    <Tabs
      as={GridItem}
      colorScheme="blue"
      index={tabIndex}
      onChange={setTabIndex}
      width="370px"
    >
      <TabList height="48px">
        {sessionMenu.map((item) => (
          <Tab
            w="33%"
            key={`tab-${item.id}`}
            px="1"
            _selected={{
              borderBottomColor: "blue.500",
              borderBottomWidth: "4px",
              fontWeight: "bold",
            }}
          >
            <Text fontSize="sm">{item.title}</Text>
            {item.id === "unreplied" && (
              <CountBadge count={unrepliedSession.length} ml="2" />
            )}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {sessionMenu.map((session, index) => (
          <TabPanel
            p="0"
            as={Flex}
            direction="column"
            h="calc(100vh - 192px)"
            overflowY="auto"
          >
            {!sessionTabPanels[index].length && (
              <Text fontSize="xs" color="gray.500" textAlign="center" m="8">
                Tidak ada chat
              </Text>
            )}
            {sessionTabPanels[index].map((item) => (
              <Grid
                key={`card-${session.id}-${item.id}`}
                as={Link}
                to={`${item.id}`}
                templateColumns="54px 1fr auto"
                p="3"
                gap="1"
                borderBottom="2px"
                borderBottomColor="gray.100"
                {...(sessionId === String(item.id)
                  ? {
                      cursor: "auto",
                      bg: "gray.100",
                    }
                  : {})}
              >
                <GridItem>
                  <Avatar name={item.customer.name} mt="1" />
                </GridItem>
                <GridItem as={Flex} direction="column" width="100%">
                  <Text fontWeight="bold" fontSize="sm" w="225px" isTruncated>
                    {item.customer.name}
                  </Text>
                  <Text fontSize="xs" my="1" w="225px" isTruncated>
                    {!item.unrepliedMessageCount && <>&#10003; </>}
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
                    {timeAgoFormatter(item.lastMessage.createdAt)}
                  </Text>
                  <CountBadge count={item.unrepliedMessageCount} />
                </GridItem>
              </Grid>
            ))}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ChatSessionList;
