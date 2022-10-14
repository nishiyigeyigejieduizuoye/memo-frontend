import axios from "axios";
import { UserInfo } from "./schema";

const instance = axios.create({
  timeout: 10000,
});

export async function getUserInfo(): Promise<UserInfo> {
  return await (
    await instance.get<UserInfo>("/api/user/info")
  ).data;
}
