import { CustomCard } from "../../../chakra/CustomCard";
import {
  Flex,
  Icon,
  Stack,
  Text,
  Box,
  Grid,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaBtc } from "react-icons/fa";

const Transection = () => {
  const transections = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+81,123",
      timestamp: "2022-06-09  7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "-12.48513391 BTC",
      timestamp: "2022-06-09  7:06 PM",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "81,123",
      timestamp: "2022-06-09  7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">
        Recent transections
      </Text>
      <Stack spacing={4}>
        {transections.map((transection, i) => (
          <Fragment key={transection.id}>
            {i != 0 && <Divider />}
            <Flex gap={4}>
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transection.icon}></Icon>
              </Grid>

              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transection.text}</Text>
                  <Text fontSize="sm" color="black.80">
                    {transection.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transection.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button mt="8" w="full" colorScheme="gray">
        View all
      </Button>
    </CustomCard>
  );
};

export default Transection;
