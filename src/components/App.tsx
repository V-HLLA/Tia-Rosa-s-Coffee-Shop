import Footer from "./Footer";
import Header from "./Header";
import MainContainer from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/"></Route>
          <Route path="/produtos"></Route>
          <Route path="/contato"></Route>
        </Routes>
        <MainContainer />
        <Footer />
      </Router>
    </>
  );
}

export default App;
