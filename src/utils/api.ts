import axios from "axios";
import { jwtTokenKey } from "./contants";
import { IAuthenticateDto, IRegisterDto } from "./types";

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem(jwtTokenKey);
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const AuthApi = {
  authenticate(user: IAuthenticateDto) {
    return instance.post("users/authenticate", user);
  },
  register(user: IRegisterDto) {
    return instance.post("users/register", user);
  },
  getCurrentUserData() {
    return instance.get("users/user-data");
  },
};

export const ChatApi = {
  getUserChats() {
    return instance.get("chats/user-chats");
  },
};
