import { CustomCard } from "../../../chakra/CustomCard";
import {
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const PriceSection = () => {
  const timestamps = ["7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="center">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={4}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401
              </Text>

              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={CiCirclePlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={CiCircleMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="/graph.svg" mt="48px" w="100%" />
            <HStack justify="space-between">
              {timestamps.map((timestamps) => (
                <Text key={timestamps} fontSize="sm" color="black.80">
                  {timestamps}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
