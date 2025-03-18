import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavContainer } from "./components/navbar/NavContainer";
import { Container } from "./components/Container";
import { Card } from "./components/home/Card";
import { AuthCard } from "./components/auth/AuthCard";
import { CardRegister } from "./components/register/RegisterCard";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { ForgotPassword } from "./components/auth/ForgotPassword";
import { ChangePassword } from "./components/auth/ChangePassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavContainer />
        <Container>
          <Routes>
            <Route path="/" element={<AuthCard />} />
            <Route path="/register" element={<CardRegister />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/encrypt" element={<Card />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
