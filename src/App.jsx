import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/index";
import Home2 from "./pages/index-2";
import Home3 from "./pages/index-3";
import NewsDetails from "./pages/news-details";
import NewsGrid from "./pages/news-grid";
import PageError from "./pages/page-404";
import PageAbout from "./pages/page-about";
import PageContact from "./pages/page-contact";
import PageFaq from "./pages/page-faq";
import PagePricing from "./pages/page-pricing";
import RoomDetails from "./pages/room-details";
import PageRoomsSuite from "./pages/page-rooms-suite";
import PageRooms from "./pages/page-rooms";
import PageServiceDetails from "./pages/page-service-details";
import PageServices from "./pages/page-services";
import PageTeamDetails from "./pages/page-team-details";
import PageTeam from "./pages/page-team";
import PageTestimonial from "./pages/page-testimonial";
import ShopCart from "./pages/shop-cart";
import ShopCheckout from "./pages/shop-checkout";
import ShopProductDetails from "./pages/shop-product-details";
import ShopSidebar from "./pages/shop-products-sidebar";
import ShopProducts from "./pages/shop-products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/index-2" element={<Home2 />} />
        <Route path="/index-3" element={<Home3 />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/news-grid" element={<NewsGrid />} />
        <Route path="*" element={<PageError />} />
        <Route path="/page-about" element={<PageAbout />} />
        <Route path="/page-contact" element={<PageContact />} />
        <Route path="/page-faq" element={<PageFaq />} />
        <Route path="/page-pricing" element={<PagePricing />} />
        <Route path="/page-rooms-suite" element={<PageRoomsSuite />} />
        <Route path="/page-rooms" element={<PageRooms />} />
        <Route path="/room-details" element={<RoomDetails />} />
        <Route path="/page-service-details" element={<PageServiceDetails />} />
        <Route path="/page-services" element={<PageServices />} />
        <Route path="/page-team-details" element={<PageTeamDetails />} />
        <Route path="/page-team" element={<PageTeam />} />
        <Route path="/page-testimonial" element={<PageTestimonial />} />
        <Route path="/shop-cart" element={<ShopCart />} />
        <Route path="/shop-checkout" element={<ShopCheckout />} />
        <Route path="/shop-product-details" element={<ShopProductDetails />} />
        <Route path="/shop-products-sidebar" element={<ShopSidebar />} />
        <Route path="/shop-products" element={<ShopProducts />} />
      </Routes>
    </Router>
  );
}

export default App;