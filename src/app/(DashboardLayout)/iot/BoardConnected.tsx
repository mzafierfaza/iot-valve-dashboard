import { Avatar, Stack, Typography, Box } from "@mui/material";
import DashboardCard from "../components/shared/DashboardCard";
import { IconCheck } from "@tabler/icons-react";

const BoardConnected = () => {

    const secondary = '#7367F0';

    return (
        <DashboardCard title="Board Status">
            <Box>
                <Stack direction="row" spacing={1} my={1} alignItems="center">
                    <Typography variant="h3" fontWeight="700" mt="-20px">
                        ESP32 Sensor
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} my={1} alignItems="center">
                    <Avatar sx={{ bgcolor: secondary, width: 27, height: 27 }}>
                        <IconCheck width={20} color="#ffffff" />
                    </Avatar>
                    <Typography variant="subtitle2" fontWeight="600">
                        board connected
                    </Typography>
                    {/* tambahkan enter disini */}
                    <Typography variant="subtitle2" color="textSecondary" alignItems="right">
                        last connected on 10/10/2022
                    </Typography>
                </Stack>
            </Box>
        </DashboardCard >
    );
};

export default BoardConnected;