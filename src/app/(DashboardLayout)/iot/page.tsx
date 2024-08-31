'use client'
import { Grid, Box, Typography, Stack, Avatar } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import SensorGraph from '../components/dashboard/SensorGraph';
import BoardConnected from './BoardConnected';
import ValveControl from './ValveControl';
import HistoryControl from './HistoryControl';
import mqtt from "mqtt";
import { useEffect, useState, useRef } from 'react';

const IotPage = () => {
  const [waterValue, setWater] = useState('-');
  const [valve1value, setValve1] = useState('-');
  const [valve2value, setValve2] = useState('-');
  const [valve3value, setValve3] = useState('-');
  const [pompavalue, setPompa] = useState('-');
  const [connect, setConnect] = useState(false);
  const [waterDetail, setWaterDetail] = useState({});
  const clientRef = useRef<any>(null);  // Ref untuk menyimpan client MQTT

  const topicWaterValue = "cip/sensor/water/value";
  const topicWaterDetail = "cip/sensor/water/detail";
  const topicValve1 = "cip/control/valve1/value";
  const topicValve2 = "cip/control/valve2/value";
  const topicValve3 = "cip/control/valve3/value";
  const topicPompa = "cip/control/pompa/value";

  useEffect(() => {
    const mqtt_broker = process.env.NEXT_MQTT_BROKER_URL || "mqtt://localhost:1883";
    const mqtt_broker_username = process.env.NEXT_MQTT_BROKER_USERNAME || "admin";
    const mqtt_broker_password = process.env.NEXT_MQTT_BROKER_PASSWORD || "admin";

    clientRef.current = mqtt.connect(mqtt_broker, {
      username: mqtt_broker_username,
      password: mqtt_broker_password,
    });

    clientRef.current.on('connect', () => {
      console.log('Connected to MQTT broker');
      clientRef.current.subscribe(
        [topicWaterValue, topicWaterDetail, topicValve1, topicValve2, topicValve3, topicPompa]);
      setConnect(true);
    });

    clientRef.current.on('message', (topic: any, payload: any) => {
      // console.log("Message received on topic: ", topic);
      console.log("payload: ", payload.toString());

      switch (topic) {
        case topicWaterValue:
          setWater(payload.toString());
          break;
        case topicWaterDetail:
          setWaterDetail(JSON.parse(payload.toString()));
          break;
        case topicValve1:
          setValve1(payload.toString());
          break;
        case topicValve2:
          setValve2(payload.toString());
          break;
        case topicValve3:
          setValve3(payload.toString());
          break;
        case topicPompa:
          setPompa(payload.toString());
          break;
        default:
          break;
      }
    });

    // Cleanup koneksi saat komponen di-unmount
    return () => {
      if (clientRef.current) {
        clientRef.current.end();
        console.log("Disconnected from MQTT");
      }
    };
  }, []); // Array dependency kosong memastikan ini hanya dijalankan sekali saat komponen mount

  return (
    <PageContainer title="Iot Page" description="this is Iot Page">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={16} lg={12}>
            <BoardConnected />
          </Grid>
          <Grid item xs={16} lg={8}>
            <SensorGraph water={waterValue} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ValveControl
                  connect={connect}
                  client={clientRef.current}
                  valve1value={valve1value}
                  valve2value={valve2value}
                  valve3value={valve3value}
                  pompavalue={pompavalue}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid> */}
          <Grid item xs={12} lg={12}>
            <HistoryControl />
          </Grid>
          {/* <Grid item xs={12}>
            <Blog />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default IotPage;