import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./Components/PortfolioSection";
import PriceSection from "./Components/PriceSection";
import Transection from "./Components/Transection";
import InfoCard from "./Components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashborad">
      <Grid
        gap="6"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transection />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/dot_bg.svg"
            text="Learn more about loan"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/grid_bg.svg"
            text="Lean more about our reak estate and others"
            tagText="contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
