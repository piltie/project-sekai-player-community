import { Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/layouts/authLayout";
import LoginPage from "./pages/loginPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}
