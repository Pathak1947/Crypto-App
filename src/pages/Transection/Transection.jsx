import { Button, Card, Flex, Icon, Tag, HStack } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Tabs, TabList, TabPanels, Tab, TabPanel,InputLeftElement,Input,InputGroup } from "@chakra-ui/react";
import TransectionTable from "./component/TransectionTable";
import { IoMdSearch } from "react-icons/io";

const Transection = () => {
  const tabs = [
    {
      name: "All",
      count: 340,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title="Transection">
      <Flex justify="end"  mb="3">
        <Button leftIcon={<Icon as={IoCloudDownloadOutline} />}>
          Export CSV
        </Button>
      </Flex>
      <Card>
        <Tabs>
        <TabList pt="4" display="flex" justifyContent="space-between" w="full" >
          <HStack >
          
            {tabs.map((tab) => (
              <Tab key={tab.name} display="flex" gap="2" pb="4">
                {tab.name}{" "}
                <Tag colorScheme="gray" borderRadius="full">
                  {tab.count}
                </Tag>
              </Tab>
            ))}
             </HStack>

            <InputGroup maxW="200px" pr="6" >
            <InputLeftElement pointerEvents='none'>
              <Icon as={IoMdSearch}/>
            </InputLeftElement>
            <Input type='tel' placeholder='search' />
          </InputGroup>
          </TabList>
         
          <TabPanels>
            <TabPanel>
              <TransectionTable/>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
          </TabPanels>
          
        </Tabs>
      
      </Card>
    </DashboardLayout>
  );
};

export default Transection;
