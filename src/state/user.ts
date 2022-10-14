import { atom } from "recoil";
import { UserInfo } from "../api/schema";

export const LoadingUserInfoState = atom<boolean>({
  key: "LoadingUserInfo",
  default: true,
});

export const UserInfoState = atom<UserInfo | null>({
  key: "CurrentUserInfo",
  default: null,
});
