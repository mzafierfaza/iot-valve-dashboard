
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';

const history = [
    {
        id: "1",
        date: "12 Jan 2019, 15:00",
        name: "Sunil Joshi",
        pname: "Elite Admin",
        desc: "Mematikan valve 1",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "2",
        date: "12 Jan 2019, 15:00",
        name: "Andrew McDownland",
        pname: "Real Homes WP Theme",
        desc: "Menghidupkan valve 2",
        pbg: "secondary.main",
        budget: "24.5",
    },
    {
        id: "3",
        date: "12 Jan 2019, 15:00",
        name: "Device IoT",
        pname: "System",
        desc: "Otomatis dari alat mati",
        pbg: "error.main",
        budget: "12.8",
    },
    {
        id: "4",
        date: "12 Jan 2019, 15:00",
        name: "Nirav Joshi",
        pname: "Hosting Press HTML",
        desc: "Menyalakan Pompa",
        pbg: "success.main",
        budget: "2.4",
    },
];


const HistoryControl = () => {
    return (

        <DashboardCard title="History Control">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    No
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Date
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    User
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Description
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {history.map((his) => (
                            <TableRow key={his.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {his.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {his.date}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {his.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {his.pname}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {his.desc}
                                    </Typography>
                                    {/* <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: his.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={his.desc}
                                    ></Chip> */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default HistoryControl;
