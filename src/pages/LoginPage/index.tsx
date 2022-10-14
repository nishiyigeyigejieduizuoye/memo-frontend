import { getUserInfo, login } from "@/api/api";
import useMessage from "@/hooks/useMessage";
import { UserInfoState } from "@/state/user";
import { LoadingButton } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import "./index.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const setUserInfo = useSetRecoilState(UserInfoState);
  const [, { addMessage }] = useMessage();

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
        await login(username, password);
        setUserInfo(await getUserInfo());
        navigate("/");
      } catch (e) {
        addMessage("error", "登录失败：用户名或密码错误");
      } finally {
        setLoading(false);
      }
    },
    [username, password, setLoading]
  );

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      component="div"
      className="login-page-container"
    >
      <Grid item xs={12} lg={3}>
        <Grid
          container
          component="form"
          direction="column"
          alignItems="center"
          onSubmit={onSubmit}
        >
          <TextField
            variant="outlined"
            label="用户名"
            name="username"
            type="text"
            value={username}
            fullWidth
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <TextField
            variant="outlined"
            label="密码"
            name="password"
            type="password"
            value={password}
            fullWidth
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></TextField>
          <br />
          <LoadingButton
            color="primary"
            variant="contained"
            sx={{
              width: "128px",
            }}
            type="submit"
            loading={loading}
          >
            登录
          </LoadingButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
