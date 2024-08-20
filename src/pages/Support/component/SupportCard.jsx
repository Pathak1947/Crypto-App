import { Stack, Flex, Icon, Text, Card, HStack, Box, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { IoIosMail } from "react-icons/io";

const SupportCard = () => {
  return (
    <Flex justify="space-between">
      <Stack >
        <Icon as={IoIosMail} boxSize={6} color="purple" />
        <Text fontWeight="medium" textStyle="h1" as="h1">
          Contact Us
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more
        </Text>
      </Stack>

      <Card p="6" borderRadius="1rem">
        <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hr
        </Text>
        <HStack>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeHolder="Enter your name" />
          </FormControl>
          <FormControl>
            <FormLabel>LastName</FormLabel>
            <Input placeHolder="Enter your LastName" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeHolder="Enter your email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Input placeHolder="Enter your Message" />
        </FormControl>
        <Checkbox defaultChecked>
            <Text fontSize="sm">
            I agree with 
            <Box as="span" color="purple"> Terms & Conditions</Box></Text> </Checkbox>
            <Stack>
                <Button>send message</Button>
                <Button colorScheme="gray">book a meeting</Button>
            </Stack>
        </Stack>
      </Card>
    </Flex>
  );
};

export default SupportCard;
