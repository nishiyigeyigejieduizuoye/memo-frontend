import { HashRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import DefaultStatus from "@/components/DefaultStatus";
import LoginPage from "@/pages/LoginPage";
import NeedLoginPage from "@/components/NeedLoginPage";
import IndexPage from "@/pages/IndexPage";
import GlobalMessage from "@/components/GlobalMessage";
import RegisterPage from "@/pages/RegisterPage";
import MemoAppBar from "./components/AppBar";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";

function App() {
  return (
    <RecoilRoot>
      <>
        <CssBaseline />
        <DefaultStatus />
        <GlobalMessage />
        <HashRouter>
          <MemoAppBar />
          <Container className="main-container" disableGutters>
            <Routes>
              <Route
                path="/"
                element={
                  <NeedLoginPage>
                    <IndexPage />
                  </NeedLoginPage>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Container>
        </HashRouter>
      </>
    </RecoilRoot>
  );
}

export default App;
