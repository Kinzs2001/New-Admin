import React,{useState} from 'react'
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
  } from "@mui/icons-material";
import FlexBetween from './Flexbetween';
import { useDispatch } from 'react-redux';
import { setMode } from '../state';
import profileImage from '../assets/profile.jpg';
import { useTheme } from '@mui/material';

const Navbar = () => {

    const dispatch = useDispatch();
    const theme = useTheme();
    
  return (
    <div>
      Navbar
    </div>
  )
}

export default Navbar
