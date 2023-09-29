
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ActiveProduct from './components/ActiveProduct/ActiveProduct';
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <>

      <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/product/:name" element={<ActiveProduct/>}/>
      </Routes>
    </>
  );
}

export default App;
