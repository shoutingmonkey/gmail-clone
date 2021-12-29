import React from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser)
  console.log(user);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://icons.iconarchive.com/icons/dtafalonso/android-l/512/Gmail-icon.png"
          alt="" />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  )
}

export default Header;
