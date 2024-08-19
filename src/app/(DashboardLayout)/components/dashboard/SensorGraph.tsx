
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { IconArrowDownRight, IconCheck, IconCurrencyDollar, IconRefresh } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const SensorGraph = () => {
    // chart color
    const theme = useTheme();
    const secondary = theme.palette.secondary.main;
    const secondarylight = '#f5fcff';
    const errorlight = '#fdede8';

    // chart
    const optionscolumnchart: any = {
        chart: {
            type: 'area',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        // dataLabels: {
        //     enabled: false
        // },
        labels: ["25", "66", "20", "40", "12", "58", "20"],
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
            colors: [secondarylight],
            type: 'solid',
            opacity: 0.05,
        },
        markers: {
            size: 0,
        },
        tooltip: {
            theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
        },
    };
    const seriescolumnchart: any = [
        {
            name: '',
            color: secondary,
            data: [25, 66, 20, 40, 12, 58, 20],
        },
    ];
    const labelscolumnchart: any = [
        {
            name: '',
            color: secondary,
            data: ["25", "66", "20", "40", "12", "58", "20"],
        },
    ]

    return (
        <DashboardCard
            title="Data Sensor Air"
            action={
                <Fab color="secondary" size="large" sx={{ color: '#ffffff' }}>
                    <IconRefresh width={24} />
                </Fab>
            }
            footer={
                <Chart options={optionscolumnchart}
                    type="area"
                    series={seriescolumnchart}
                    // labels={labelscolumnchart}
                    height={260}
                    width={"100%"}
                />
            }
        >
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
                <Typography variant="h3" fontWeight="700" mt="-20px">
                    620
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    CM
                </Typography>
            </Stack>
        </DashboardCard>
    );
};

export default SensorGraph;
