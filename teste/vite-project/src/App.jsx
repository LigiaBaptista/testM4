import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));

function App() {
  return (

    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>

    // <div className="App">
    //   <Header />
    //   <br />
    //   <CarrosselPage />
    //   <br />

    //   <br />
    //   <Footer />
    // </div>
  );
}

export default App;

