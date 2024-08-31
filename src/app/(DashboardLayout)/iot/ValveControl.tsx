import { Avatar, Box, Grid, Stack, Switch, Typography } from "@mui/material";
import DashboardCard from "../components/shared/DashboardCard";
import { IconArrowUpLeft, IconFirstAidKit } from "@tabler/icons-react";
import { IconNumber1 } from "@tabler/icons-react";
import Chip from '@mui/material/Chip';

import theme from "@/utils/theme";
import styled from "@emotion/styled";
import { useState } from "react";
import mqtt from "mqtt";
import { log } from "console";

const ValveControl = (props: any) => {
    const [valve1, setValve1] = useState(false);
    const [valve2, setValve2] = useState(false);
    const [valve3, setValve3] = useState(false);

    const successlight = theme.palette.success.light;
    console.log(props.valve1value, "<<<valve1value");



    return (
        <DashboardCard title="Valve Control">
            <Grid container spacing={3}>
                <Grid item xs={10} sm={17}>

                    <Stack direction="row" spacing={1} mt={1} alignItems="center">
                        <Android12Switch value={valve1} onClick=
                            {() => {
                                setValve1(!valve1);
                                console.log("Kirimmm nih");
                                (props.connect) ? props.client.publish("cip/control/valve1/value",
                                    (valve1 ? "1" : "0")) : null
                            }} />
                        <Typography variant="subtitle2" fontWeight="600" fontSize={16} > Valve 1 </Typography>
                        <Chip label={props.valve1value} color="primary" variant="outlined" />

                    </Stack>
                    <Stack direction="row" spacing={1} mt={1} alignItems="center">
                        <Android12Switch value={valve2} onClick={() => setValve2(!valve2)} />
                        <Typography variant="subtitle2" fontWeight="600" fontSize={16} > Valve 2 </Typography>
                        <Chip label={props.valve2value} color="primary" variant="outlined" />

                    </Stack>
                    <Stack direction="row" spacing={1} mt={1} alignItems="center">
                        <Android12Switch value={valve3} onClick={() => setValve3(!valve3)} />
                        <Typography variant="subtitle2" fontWeight="600" fontSize={16} > Valve 3 </Typography>
                        <Chip label={props.valve3value} color="primary" variant="outlined" />

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