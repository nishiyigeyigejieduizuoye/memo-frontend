import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import DefaultStatus from "@/components/DefaultStatus";
import LoginPage from "./pages/LoginPage";
import NeedLoginPage from "./components/NeedLoginPage";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <RecoilRoot>
      <>
        <DefaultStatus />
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
