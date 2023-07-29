import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { setLogin, setPrimaryColor } from '../redux/userPreferencesSlice';
import {URL} from '../config'

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Password is Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogin = async () => {

      const resp = await axios.post(`${URL}/login`, {email,password});
      const loggedIn = resp?.data;
      console.log(loggedIn)
      if (loggedIn?.success) {
        dispatch(
          setLogin({
            token: loggedIn.token,
          })
        );
        dispatch(setPrimaryColor(loggedIn.user.preferColor));
        navigate("/home");
      }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
