import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { getUserInfo } from "@/api/api";
import { LoadingUserInfoState, UserInfoState } from "@/state/user";

const DefaultStatus = () => {
  const setUserInfo = useSetRecoilState(UserInfoState);
  const settLoadingUserInfo = useSetRecoilState(LoadingUserInfoState);
  useEffect(() => {
    (async () => {
      try {
        const userInfo = await getUserInfo();
        setUserInfo(userInfo);
      } catch (e) {
        setUserInfo(null);
      } finally {
        settLoadingUserInfo(false);
      }
    })();
  });
  return <></>;
};

export default DefaultStatus;
