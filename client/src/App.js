import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import CreateBon from "./components/create-bon";
import EditBon from "./components/edit-bon";
import BonList from "./components/bon-list";
import Navigation from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Container>
          <Row>
            <Col md="12">
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<BonList />} />
                  <Route path="/create-bon" element={<CreateBon />} />
                  <Route path="/edit-bon/:id" element={<EditBon />} />
                  <Route path="/bon-list" element={<BonList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
