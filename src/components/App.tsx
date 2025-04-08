import Footer from "./Footer";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Contact from "./Contact";
import Loading from "./Loading";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 250);
  };

  return (
    <>
      <Router>
        <Header handleClick={handleClick} />
        {isLoading ? <Loading /> : null}
        <Routes>
          <Route
            path="/"
            element={<MainContainer handleClick={handleClick} />}
          />
          <Route path="/produtos" element={<Products />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
