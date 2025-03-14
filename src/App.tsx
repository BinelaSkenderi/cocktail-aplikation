import "./App.css";
import Navigation from "./components/layout/navigation";
import Footer from "./components/layout/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/page/home";
import AboutUs from "./components/page/aboutUs";
import Category from "./components/page/category";
import SingleCategory from "./components/page/singleCategory";
import DetailsCategory from "./components/page/detailscategory";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main style={{ height: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="*" element={<p>Not found</p>} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Category/:Category" element={<SingleCategory />} />
          <Route path="/drink/:id" element={<DetailsCategory />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
