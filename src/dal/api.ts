import axios from 'axios';

export const m = 1;

const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0',
  withCredentials: true,
});
export type LoginParamsType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const authAPI = {
  login(data: LoginParamsType) {
    return instance.post<LoginParamsType, any>('auth/login', data);
  },
};
