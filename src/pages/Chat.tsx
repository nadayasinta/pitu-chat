import { useEffect, useMemo, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  CheckboxGroup,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import EmptyChat from "../assets/empty-chat.svg";
import { ConfigIcon } from "../assets/icons";
import ChatSessionList from "../components/ChatSessionList";
import CountBadge from "../components/CountBadge";
import { getChatSession, getShopList } from "../mock";
import { ChatSession, ChatSessionMenu, Shop } from "../types";

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

const ChatPage = () => {
  const [sessionList, setSessionList] = useState<ChatSession[]>([]);
  const [shopList, setShopList] = useState<Shop[]>([]);
  const [selectedShopId, setSelectedShopId] = useState<string[]>([]);
  const [searchValue] = useState<string>("");
  const [tabIndex, setTabIndex] = useState<number>(0);
  const params = useParams<{ customerId?: string }>();

  useEffect(() => {
    setSessionList(getChatSession(selectedShopId, searchValue));
  }, [selectedShopId, searchValue]);

  useEffect(() => {
    setShopList(getShopList());
  }, []);

  const onChangeCheckBox = (value: (string | number)[]) => {
    setSelectedShopId(value.map((item) => String(item)));
  };

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
    <Flex>
      <Flex
        direction="column"
        borderRight="2px"
        borderRightColor="gray.100"
        width="450px"
      >
        <Flex p="4" alignItems="center">
          <Text fontWeight="bold" fontSize="xl">
            Chat
          </Text>
          <SearchIcon ml="auto" fontSize="20px" />
          <Menu placement="bottom-end">
            <MenuButton
              as={IconButton}
              aria-label="Choose Shope"
              icon={<ConfigIcon />}
              variant="ghost"
              ml="3"
              fontSize="20px"
              colorScheme="gray"
            />
            <MenuList>
              <CheckboxGroup value={selectedShopId} onChange={onChangeCheckBox}>
                <Stack spacing="3" px="4">
                  {shopList.map((item) => (
                    <Checkbox
                      key={item.id}
                      value={String(item.id)}
                      textTransform="capitalize"
                    >
                      {item.ecommerce} - {item.name}
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
            </MenuList>
          </Menu>
        </Flex>
        <Tabs
          as={Flex}
          colorScheme="blue"
          index={tabIndex}
          onChange={setTabIndex}
        >
          <TabList>
            {sessionMenu.map((item) => (
              <Tab
                w="33%"
                key={item.id}
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
            {sessionTabPanels.map((item) => (
              <TabPanel p="0">
                <ChatSessionList sessionList={item} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
      {params.customerId ? (
        <Outlet />
      ) : (
        <Flex
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
        </Flex>
      )}
    </Flex>
  );
};

export default ChatPage;
