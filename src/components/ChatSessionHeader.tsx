import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  CheckboxGroup,
  Flex,
  GridItem,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { ConfigIcon } from "../assets/icons";
import { getShopList } from "../mock";
import { ChatSessionFilter, FC, Shop } from "../types";

interface Props {
  sessionFilter: ChatSessionFilter;
  setSessionFilter: Dispatch<SetStateAction<ChatSessionFilter>>;
}

const ChatSessionHeader: FC<Props> = ({ sessionFilter, setSessionFilter }) => {
  const [shopList, setShopList] = useState<Shop[]>([]);
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);

  const onClickSelecAllButton = useCallback(() => {
    setSessionFilter((prevVal: ChatSessionFilter) => ({
      ...prevVal,
      shopsId: shopList.map((item) => item.id),
    }));
  }, [shopList, setSessionFilter]);

  const onChangeCheckBox = (value: (number | string)[]) => {
    setSessionFilter((prevVal: ChatSessionFilter) => ({
      ...prevVal,
      shopsId: value.map((item) =>
        typeof item == "number" ? item : parseInt(item)
      ),
    }));
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSessionFilter((prevVal: ChatSessionFilter) => ({
      ...prevVal,
      customerName: event.target.value,
    }));
  };

  const onRemoveSearch = () => {
    setSessionFilter((prevVal: ChatSessionFilter) => ({
      ...prevVal,
      customerName: "",
    }));
  };

  const onBlurSearch = () => {
    if (!sessionFilter.customerName) {
      setShowSearchInput(false);
    }
  };

  useEffect(() => {
    setShopList(getShopList());
    onClickSelecAllButton();
  }, [onClickSelecAllButton]);

  return (
    <GridItem as={Flex} p="4" alignItems="center">
      <Text fontWeight="bold" fontSize="xl">
        Chat
      </Text>
      <IconButton
        ml="auto"
        fontSize="20px"
        aria-label="Search session"
        variant="ghost"
        colorScheme="gray"
        icon={<SearchIcon />}
        onClick={() => setShowSearchInput(!showSearchInput)}
      />
      {(showSearchInput || sessionFilter.customerName) && (
        <InputGroup size="md" onBlur={onBlurSearch} maxW="180px">
          <Input
            size="sm"
            placeholder="Cari"
            borderRadius="md"
            variant="ghost"
            pl="1"
            bg="gray.100"
            value={sessionFilter.customerName}
            onChange={onChangeSearch}
          />
          {sessionFilter.customerName && (
            <InputRightElement>
              <IconButton
                mt="-2"
                size="xs"
                aria-label="Clear search"
                variant="ghost"
                colorScheme="gray"
                icon={<CloseIcon />}
                onClick={onRemoveSearch}
              />
            </InputRightElement>
          )}
        </InputGroup>
      )}

      <Menu placement="bottom-end">
        <MenuButton
          as={IconButton}
          aria-label="Choose Shop"
          icon={<ConfigIcon />}
          variant="ghost"
          ml="1"
          fontSize="20px"
          colorScheme="gray"
        />
        <MenuList>
          <CheckboxGroup
            value={sessionFilter.shopsId}
            onChange={onChangeCheckBox}
          >
            <Stack spacing="3" divider={<StackDivider />}>
              {shopList.map((item) => (
                <Checkbox key={item.id} value={item.id} px="4" size="sm">
                  <Text fontSize="xs" textTransform="capitalize">
                    {item.ecommerce} - {item.name}
                  </Text>
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
          <MenuDivider />
          <MenuItem
            onClick={onClickSelecAllButton}
            cursor="pointer"
            color="blue.500"
            px="4"
            py="0"
            fontSize="xs"
          >
            Pilih Semua
          </MenuItem>
        </MenuList>
      </Menu>
    </GridItem>
  );
};

export default ChatSessionHeader;
