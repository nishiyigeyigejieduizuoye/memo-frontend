import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import DefaultStatus from "@/components/DefaultStatus";
import LoginPage from "./pages/LoginPage";
import NeedLoginPage from "./components/NeedLoginPage";
import IndexPage from "./pages/IndexPage";
import GlobalMessage from "./components/GlobalMessage";

function App() {
  return (
    <RecoilRoot>
      <>
        <DefaultStatus />
        <GlobalMessage />
        <HashRouter>
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
          </Routes>
        </HashRouter>
      </>
    </RecoilRoot>
  );
}

export default App;
