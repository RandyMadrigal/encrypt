import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavContainer } from "./components/navbar/NavContainer";
import { Container } from "./components/Container";
import { Card } from "./components/home/Card";

function App() {
  return (
    <>
      <BrowserRouter>
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
