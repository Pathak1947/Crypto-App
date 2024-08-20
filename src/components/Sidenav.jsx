import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { LuArrowDownUp } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const newLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: LuArrowDownUp,
      text: "Transections",
      link: "/transection",
    },
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
          {" "}
          Prashant Pathak
        </Heading>
        <Box mt="6" mx="3">
          {newLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="10px"
                mx="3"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color="#797E82"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to={"/support"}>
          <HStack
            borderRadius="10px"
            mx="3"
            py="3"
            px="4"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
