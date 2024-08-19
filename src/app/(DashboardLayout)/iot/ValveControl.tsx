import { Avatar, Box, Grid, Stack, Switch, Typography } from "@mui/material";
import DashboardCard from "../components/shared/DashboardCard";
import { IconArrowUpLeft, IconFirstAidKit } from "@tabler/icons-react";
import { IconNumber1 } from "@tabler/icons-react";
import theme from "@/utils/theme";
import styled from "@emotion/styled";

const ValveControl = () => {

    const successlight = theme.palette.success.light;


    return (
        <DashboardCard title="Valve Control">
            <Grid container spacing={3}>
                <Grid item xs={10} sm={17}>

                    <Stack direction="row" spacing={1} mt={1} alignItems="center">
                        <Android12Switch />
                        <Typography variant="subtitle2" fontWeight="600" fontSize={16} > Valve 1 </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} mt={1} alignItems="center">
                        <Android12Switch />
                        <Typography variant="subtitle2" fontWeight="600" fontSize={16} > Valve 2 </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} mt={1} alignItems="center">
                        <Android12Switch />
                        <Typography variant="subtitle2" fontWeight="600" fontSize={16} > Valve 3 </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </DashboardCard >
    );
};

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&::before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        '&::after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}));

export default ValveControl