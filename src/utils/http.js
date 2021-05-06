import axios from 'axios';
import { appConfig } from '../config/app';

export const request = axios.create({
  baseURL: appConfig.backendAPIEndPoint,
  timeout: 100000,
  headers: { 'Content-Type': 'application/json' },
});

export const setAuthorizationToken = token => {
  request.defaults.headers.Authorization = `Token ${token}`;
};
