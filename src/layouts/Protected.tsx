import { ReactNode, useMemo } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";

import {
  ChatIcon,
  ChatOutlineIcon,
  LogoutIcon,
  ShopIcon,
  ShopOutlineIcon,
} from "../assets/icons";
import Avatar from "../components/Avatar";
import MenuIcon from "../components/MenuIcon";
import { useAuth } from "../contexts/Auth";

interface MenuDetail {
  title: string;
  path: string;
  icon: ReactNode;
  outlineIcon: ReactNode;
}

const menu: MenuDetail[] = [
  {
    title: "Chat",
    path: "/chat",
    icon: <ChatIcon />,
    outlineIcon: <ChatOutlineIcon />,
  },
  {
    title: "Toko",
    path: "/shop",
    icon: <ShopIcon />,
    outlineIcon: <ShopOutlineIcon />,
  },
];

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, removeUser } = useAuth();

  const tabIndex: number = useMemo(() => {
    return menu.findIndex((item) => location.pathname.startsWith(item.path));
  }, [location]);

  const handleTabsChange = (index: number) => {
    navigate(menu[index].path);
  };

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <Grid
      templateAreas={`"header header" "nav main"`}
      gridTemplateRows="72px calc(100vh - 72px)"
      gridTemplateColumns="112px calc(100vw - 112px)"
      h="100vh"
      w="100vw"
    >
      <GridItem
        area="header"
        p="5"
        as={Flex}
        alignItems="center"
        borderBottom="2px"
        borderBottomColor="gray.100"
      >
        <Image
          src="/logo.svg"
          alt="PituChat Logo"
          width="10"
          objectFit="cover"
        />
        <Text fontSize="lg" fontWeight="semibold" letterSpacing="1px">
          PITUCHAT
        </Text>
        <Menu>
          <MenuButton as={Flex} ml="auto" alignItems="center">
            <Avatar
              name={user.name}
              borderRadius={10}
              mt="1"
              width="40px"
              height="40px"
            />
            <IconButton
              icon={<ChevronDownIcon />}
              fontSize="28px"
              mt="1"
              variant="gosht"
              aria-label="Open menu"
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Setting</MenuItem>
          </MenuList>
        </Menu>
      </GridItem>
      <GridItem
        area="nav"
        borderRight="2px"
        borderRightColor="gray.100"
        as={Flex}
        direction="column"
      >
        <Tabs
          orientation="vertical"
          colorScheme="blue"
          index={tabIndex}
          onChange={handleTabsChange}
        >
          <TabList>
            {menu.map((item, index) => (
              <Tab
                key={`menu-${item.title}`}
                width="112px"
                height="100%"
                _selected={{
                  bg: "#E1F5FD",
                  borderLeftColor: "blue.500",
                  borderLeftWidth: "4px",
                }}
              >
                <MenuIcon
                  text={item.title}
                  icon={index === tabIndex ? item.icon : item.outlineIcon}
                />
              </Tab>
            ))}
          </TabList>
        </Tabs>
        <MenuIcon
          text="Keluar"
          icon={<LogoutIcon />}
          mt="auto"
          onClick={removeUser}
        />
      </GridItem>
      <GridItem area="main" bg="gray.50">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default ProtectedLayout;
