import {
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { TfiUser } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="70rem" mx="auto" h="16" justify="space-between">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>
        <Menu>
          <MenuButton as={Button}>
            {" "}
            <Icon as={TfiUser} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
