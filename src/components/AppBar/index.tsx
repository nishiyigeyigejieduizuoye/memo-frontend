import { LoadingUserInfoState, UserInfoState } from "@/state/user";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

const MemoAppBar = () => {
  const loading = useRecoilValue(LoadingUserInfoState);
  const userInfo = useRecoilValue(UserInfoState);
  const navigate = useNavigate();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography
          variant="h6"
          onClick={() => navigate("/")}
          sx={{ flexGrow: 1 }}
        >
          Memo
        </Typography>
        {loading ? (
          <></>
        ) : userInfo === null ? (
          <>
            <Button color="inherit" component={Link} to="/login">
              登录
            </Button>
            <Button color="inherit" component={Link} to="/register">
              注册
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit">{userInfo.username}</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MemoAppBar;
