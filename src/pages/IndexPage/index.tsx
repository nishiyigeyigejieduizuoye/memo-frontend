import { UserInfoState } from "@/state/user";
import { useRecoilValue } from "recoil";

const IndexPage = () => {
  const userInfo = useRecoilValue(UserInfoState);
  return (
    <>
      <h1>Hello: {userInfo?.username}</h1>
    </>
  );
};

export default IndexPage;
