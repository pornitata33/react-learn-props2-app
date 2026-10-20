import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import ShowProduct from "./pages/ShowProduct"; // แก้ตรงนี้ให้สะกดว่า Product
import { ShowPerson } from "./pages/ShowPerson";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showproduct" element={<ShowProduct />} />
          <Route path="/showperson" element={<ShowPerson />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
