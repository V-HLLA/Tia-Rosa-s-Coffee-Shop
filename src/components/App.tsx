import Footer from "./Footer";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
