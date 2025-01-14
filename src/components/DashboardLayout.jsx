import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Sidenav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen} />
          <Container
            mt="6"
            maxW="70rem"
            overflowX="hidden"
            overflowY="auto"
            h="calc(100vh-80px)"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
