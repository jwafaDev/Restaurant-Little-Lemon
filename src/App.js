import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {


  return (
    <BrowserRouter>
    <div className="contenar">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
