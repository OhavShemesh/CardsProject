import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';
import { useCurrentUser } from '../../../users/providers/UserProvider';


export default function logged() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    localStorage.removeItem("my token")
    setAuth(false);
    navigate(ROUTES.LOGIN)
    window.location.reload();
  }
  const handleToCrm = () => {
    navigate(ROUTES.CRMSYSTEM)
    setAnchorEl(null);
  }

  const handleToProfile = () => {
    navigate(ROUTES.USER_PROFILE)
    setAnchorEl(null);

  }

  const { user } = useCurrentUser()

  return (
    <Toolbar>
      {auth && (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {user?.isAdmin && <MenuItem onClick={handleToCrm}>CRM System</MenuItem>}
            <MenuItem onClick={handleToProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </Menu>
        </div>
      )}
    </Toolbar>
  );
}
