import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import MyNav from "./components/MyNav.jsx";
import MyFix from "./components/MyFix.jsx";
import MyNavBottom from "./components/MyNavBottom";
import MyHome from "./components/MyHome";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="ps-0">
        <Row>
          <MyFix />
          <Routes>
            <Route path="/" element={<MyHome />} />

          </Routes>
          <MyNav/>
          
          <MyNavBottom />
        
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
