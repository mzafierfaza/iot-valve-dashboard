'use client'
import { Grid, Box, Typography, Stack, Avatar } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import SensorGraph from '../components/dashboard/SensorGraph';
import BoardConnected from './BoardConnected';
import ValveControl from './ValveControl';


const IotPage = () => {

  const secondary = '#7367F0';

  return (
    <PageContainer title="Iot Page" description="this is Iot Page">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={16} lg={12}>
            <BoardConnected />
          </Grid>
          <Grid item xs={16} lg={8}>
            <SensorGraph />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ValveControl />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default IotPage;

