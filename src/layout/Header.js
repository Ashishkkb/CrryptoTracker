import React, { useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import UserIcon from '@mui/icons-material/Person';
import { alpha, useTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

// Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
library.add(faCoins)

import ColorModeContext from '../components/ColorModeContext';
import CustomButton from '../components/CustomButton';

const Header = ({ onSidebarOpen }) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const anchorRef = useRef(null);
    const colorMode = useContext(ColorModeContext);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <React.Fragment>
            <AppBar
                elevation={5}
                sx={{
                    top: 0,
                    border: 0,
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.secondary
                }}
            >
                <Toolbar sx={{ minHeight: 70 }}>
                    <Box 
                        alignItems='center'
                        sx={{ display: { md: 'block', lg: 'none' } }}
                    >
                        <Button
                            color='inherit'
                            variant='outlined'
                            onClick={() => onSidebarOpen()}
                            aria-label='Menu'
                            sx={{
                                borderRadius: 2,
                                minWidth: 'auto',
                                padding: 1,
                                color: theme.palette.text.secondary,
                                borderColor: alpha(theme.palette.text.secondary, 0.2),
                            }}
                        >
                            <MenuIcon fontSize='medium' />
                        </Button>
                    </Box>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Box>
                                <CustomButton 
                                    href='/'
                                    icon={<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7502 16.7399C20.997 16.8855 21.0721 17.209 20.9023 17.4397C19.6077 19.1986 17.7858 20.5593 15.6642 21.3437C13.3719 22.1912 10.8513 22.321 8.4747 21.714C6.09813 21.107 3.99165 19.7954 2.46649 17.973C0.941322 16.1505 0.0783558 13.9138 0.00508226 11.5934C-0.0681913 9.27298 0.652114 6.99187 2.05958 5.08709C3.46705 3.1823 5.48703 1.75486 7.8211 1.01565C10.1552 0.27645 12.6795 0.264688 15.0212 0.982106C17.1887 1.64615 19.0933 2.90232 20.4966 4.58559C20.6804 4.80608 20.6245 5.1342 20.3861 5.29411L17.8494 6.99566C17.6291 7.14348 17.333 7.09205 17.1592 6.89154C16.2705 5.86625 15.0859 5.10013 13.7437 4.68893C12.2456 4.22997 10.6306 4.23749 9.13745 4.71039C7.64425 5.18329 6.35198 6.09648 5.45157 7.31506C4.55115 8.53363 4.09034 9.99295 4.13722 11.4774C4.1841 12.9619 4.73617 14.3928 5.71188 15.5587C6.68759 16.7246 8.03519 17.5637 9.55559 17.952C11.076 18.3403 12.6885 18.2572 14.155 17.7151C15.4679 17.2296 16.6014 16.3993 17.4238 15.327C17.5855 15.1161 17.8787 15.047 18.1077 15.182L20.7502 16.7399Z" fill="black"/>
                                    </svg>
                                    }
                                    text=' Crypto Tracker'
                                />
                        </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: { lg: 'flex', md: 'none', xs: 'none' }
                        }}
                    >
                        <CustomButton 
                            href='/'
                            icon={<DashboardIcon />}
                            text='Dashboard'
                        />
                    </Box>
                    <Divider
                        orientation='vertical'
                        sx={{ 
                            height: 32, 
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' }
                        }}
                    />
                    <Box sx={{ display: 'flex' }}>
                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            aria-label='Theme Mode'
                            color={theme.palette.mode === 'dark' ? 'warning' : 'inherit' }
                        >
                            {theme.palette.mode === 'dark' 
                                ? (
                                    <LightModeIcon fontSize='medium' />
                                ) 
                                : (
                                    <DarkModeIcon fontSize='medium' />
                                )
                            }
                        </IconButton>
                    </Box>
                    <Divider
                        orientation='vertical'
                        sx={{ 
                            height: 32, 
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' } 
                        }} 
                    />
                    <Box sx={{ display: { lg: 'flex', md: 'none', xs: 'none' } }}>
                        <Box
                            component={ButtonBase}
                            onClick={handleOpen}
                            ref={anchorRef}
                            sx={{
                                alignItems: 'center',
                                display: 'flex'
                            }}
                        >
                            <Tooltip title='User Account'>
                                <Avatar 
                                    sx={{ 
                                        height: 32, 
                                        width: 32, 
                                        backgroundColor: theme.palette.primary.main 
                                    }} 
                                />
                            </Tooltip>
                        </Box>
                        <Popover
                            anchorEl={anchorRef.current}
                            anchorOrigin={{
                                horizontal: 'center',
                                vertical: 'bottom'
                            }}
                            keepMounted
                            onClose={handleClose}
                            open={open}
                            PaperProps={{
                                sx: { width: 240 }
                            }}
                        >
                            <Box sx={{ p: 2 }}>
                                <Typography
                                    color={theme.palette.text.primary}
                                    variant='subtitle2'
                                >
                                    Ashish
                                </Typography>
                            </Box>
                            <Divider />
                            <Box sx={{ mt: 2 }}>
                                <MenuItem
                                    component={Link}
                                    to='#'
                                >
                                    <ListItemIcon>
                                        <UserIcon fontSize='small' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={(
                                            <Typography
                                                color={theme.palette.text.primary}
                                                variant='subtitle2'
                                            >
                                                Profile
                                            </Typography>
                                        )}
                                    />
                                </MenuItem>
                                <MenuItem
                                    component={Link}
                                    to='#'
                                >
                                    <ListItemIcon>
                                        <SettingsIcon fontSize='small' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={(
                                            <Typography
                                                color={theme.palette.text.primary}
                                                variant='subtitle2'
                                            >
                                                Settings
                                            </Typography>
                                        )}
                                    />
                                </MenuItem>
                            </Box>
                            <Box sx={{ p: 2 }}>
                                <Button
                                    color='primary'
                                    fullWidth
                                    variant='outlined'
                                    href='#'
                                >
                                    Logout
                                </Button>
                            </Box>
                        </Popover>
                    </Box>
                    {theme.palette.mode === 'dark' && <Divider />}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

Header.propTypes = {
    onSidebarOpen: PropTypes.func,
};

export default Header;