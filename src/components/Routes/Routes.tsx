import { Route, Routes } from 'react-router-dom';

import Error404 from '../Error/Error404';
import Login from '../Login/Login';
import StartPage from '../StartPage/StartPage';

export const PATH = {
  START: '',
  LOGIN: 'login',
};

export const RoutesComponent = () => (
  <Routes>
    <Route path={PATH.LOGIN} element={<Login />} />
    <Route path={PATH.START} element={<StartPage />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);
