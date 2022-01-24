import React from 'react';

import { Button, TextField } from '@mui/material';

const Login = () => (
  <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '50px' }}>
    <TextField id="standard-basic" label="Login" variant="standard" />
    <TextField id="standard-basic" label="Password" type="password" variant="standard" />
    <Button variant="contained">Logon</Button>
  </div>
);

export default Login;
