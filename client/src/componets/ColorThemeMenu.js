import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrimaryColor } from '../redux/userPreferencesSlice';
import { MenuItem, Select, FormControl } from '@mui/material';
import axios from 'axios'; 
import {URL} from "../config"


const ColorThemeMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);
  const {primaryColor,token } = userData

  const handleColorChange = async (event) => {
    const resp = await axios.post(`${URL}/changeColor`,
    {preferColor: event.target.value},
    {
      headers: {
        Authorization: "Bearer " + token,
      }
    })
    dispatch(setPrimaryColor(event.target.value));
  };


  return (
    <FormControl>
    <Select
     style={{ minWidth: '170px', textAlign: 'center' }}
      value={primaryColor}
      onChange={handleColorChange}
    >
      <MenuItem value="default">Default</MenuItem>
      <MenuItem value="lightGrey">Grey</MenuItem>
      <MenuItem value="lightBlue">Blue</MenuItem>
      <MenuItem value="lightGreen">Green</MenuItem>
      <MenuItem value="lightRed">Red</MenuItem>
      <MenuItem value="lightPurple">Purple</MenuItem>
      <MenuItem value="lightOrange">Orange</MenuItem>
      <MenuItem value="lightPink">Pink</MenuItem>
      <MenuItem value="lightYellow">Yellow</MenuItem>
      <MenuItem value="lightLime">Lime</MenuItem>
    </Select>
  </FormControl>
  );
};


export default ColorThemeMenu;