import { Route, Routes } from 'react-router-dom';

import { Main } from '../../Main';
import Error404 from '../Error/Error404';
import Login from '../Login/Login';

export const PATH = {
  START: '',
  LOGIN: 'login',
};

export const RoutesComponent = () => (
  <Routes>
    <Route path={PATH.LOGIN} element={<Login />} />
    <Route path={PATH.LOGIN} element={<Main />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);
