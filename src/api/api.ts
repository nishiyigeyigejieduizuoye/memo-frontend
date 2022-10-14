import axios from "axios";
import { UserInfo } from "./schema";

const instance = axios.create({
  timeout: 10000,
});

export async function getUserInfo(): Promise<UserInfo> {
  return (await instance.get<UserInfo>("/api/user/info")).data;
}

export async function login(username: string, password: string) {
  return await instance.post("/api/user/login", {
    username,
    password,
  });
}

export async function register(username: string, password: string) {
  return await instance.post("/api/user/register", {
    username,
    password,
  });
}

export async function logout() {
  return await instance.post("/api/user/logout");
}
