import Home from "./components/Pages/Home/Home";
import Table from "./components/Pages/Table/Table";
import {Routes, Route} from "react-router-dom";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/table/:tableId" element={<Table/>}>
      </Route>
      <Route path="*" element={<NotFound/>}>
      </Route>
    </Routes>
  );
}

export default App;    