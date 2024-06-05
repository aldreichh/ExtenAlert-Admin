import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import VirusTotalReportsURLs from '../components/VirusTotalReports';
import Button from '@mui/material/Button';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ApiIcon from '@mui/icons-material/Api';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
zIndex: theme.zIndex.drawer + 1,
transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
    }),
}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
({ theme, open }) => ({
    '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
        },
    }),
    },
}),
);
  
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

  
function VirusTotalReports() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleWhitelistedButton = () => {
        navigate('/whitelisted_data');
    }

    const handleBlacklistedButton = () => {
        navigate('/blacklisted_data');
    }

    const handleIncomingButton = () => {
        navigate('/incoming_reports');
    }

    const handleUnratedButton = () => {
        navigate('/unrated_reports');
    }

    const handleVirusTotalButton = () => {
        navigate('/virustotal_reports');
    }

    const handleLogoutButton = () => {
        navigate('/');
    }

    return(
        <>
        <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                }}
                >
                <MenuIcon />
                </IconButton>
                <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
                >
                ExtenAlert!
                </Typography>
            </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <Button
                    sx={{ width: '100%' }}
                    onClick={handleWhitelistedButton}
                    startIcon={<BeenhereIcon />}
                >
                    {open ? 'Whitelisted URLs' : null}
                </Button>
                <Divider sx={{ my: 1 }} />
                <Button
                    sx={{ width: '100%' }}
                    onClick={handleBlacklistedButton}
                    startIcon={<RemoveCircleIcon />}
                >
                    {open ? 'Blacklisted URLs' : null}
                </Button>
                <Divider sx={{ my: 1 }} />
                <Button
                    sx={{ width: '100%' }}
                    onClick={handleIncomingButton}
                    startIcon={<MoveToInboxIcon />}
                >
                    {open ? 'Incoming Reports' : null}
                </Button>
                <Divider sx={{ my: 1 }} />
                <Button
                    sx={{ width: '100%' }}
                    onClick={handleUnratedButton}
                    startIcon={<HelpCenterIcon />}
                >
                    {open ? 'Unrated Reports' : null}
                </Button>
                <Divider sx={{ my: 1 }} />
                <Button
                    sx={{ 
                        width: '100%',         
                        backgroundColor: '#bae6fd',
                        borderRadius:'0'
                    }}
                    onClick={handleVirusTotalButton}
                    startIcon={<ApiIcon />}
                >
                    {open ? 'VirusTotal Reports' : null}
                </Button>
                <Divider sx={{ my: 1 }} />
                <Button
                    sx={{ width: '100%' }}
                    onClick={handleLogoutButton}
                    startIcon={<MeetingRoomIcon />}
                >
                    {open ? 'Logout' : null}
                </Button>
            </List>
            </Drawer>
            <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
            >
            <Toolbar />
            <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '85vh',
                    }}
                    >
                    <VirusTotalReportsURLs/>
                    </Paper>
                </Grid>
                </Grid>
            </Container>
            </Box>
        </Box>
        </ThemeProvider>
        </>
    );
}

export default VirusTotalReports;