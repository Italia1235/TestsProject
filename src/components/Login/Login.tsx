import React, { ChangeEvent, useState } from 'react';

import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { LoginThunkCreator } from '../../bll/reducers/authReducers';
import { AppStoreType } from '../../bll/store/store';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const appError = useSelector((state: AppStoreType) => state.appMain.appError);

  const onLoginInputClick = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordInputClick = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const Logon = () => {
    dispatch(LoginThunkCreator({ email, password, rememberMe: true }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '50px' }}>
      <TextField
        value={email}
        onChange={onLoginInputClick}
        id="standard-basic"
        label="Email"
        variant="standard"
      />
      <TextField
        value={password}
        onChange={onPasswordInputClick}
        id="standard-basic"
        label="Password"
        type="password"
        variant="standard"
      />
      {appError && <div style={{ color: 'red' }}>{appError}</div>}
      <Button onClick={Logon} variant="contained">
        Logon
      </Button>
    </div>
  );
};

export default Login;
