import Home from "./components/Pages/Home/Home";
import Table from "./components/Pages/Table/Table";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/Pages/NotFound/NotFound";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/table/:tableId" element={<Table />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
