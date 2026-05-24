import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { NavContainer } from "./components/navbar/NavContainer";
import { Container } from "./components/Container";
import { Card } from "./components/home/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <NavContainer />
        <Container>
          <Routes>
            <Route path="/" element={<Card />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
