import React from "react";
import AdminPannel from "./components/AdminPannel/AdminPannel";
import OrderManage from "./components/Management/OrderManage";
import ProductManage from "./components/Management/ProductManage";
import UserManage from "./components/Management/UserManage";
import SaleManage from "./components/Management/SaleManage";
import CouponCode from "./components/Management/CouponCode";
import BrandManage from "./components/Management/BrandManage";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductForm from "./components/Forms/ProductForm";
import "./index.css";
import BrandForm from "./components/Forms/BrandForm";
import UserProfile from "./components/UserProfile/UserProfile";
import UpdateBrand from "./components/UpdateForm/UpdateBrand";
import UpdateProduct from "./components/UpdateForm/UpdateProduct";
import SingleProduct from "./components/SinglePage/SingleProduct";
// import SingleBrand from "./components/SinglePage/SingleBrand";

const App = () => {
  return (
    <div className="w-full h-full bg-zinc-900 text-white flex ">
      <Router>
        <Sidebar className="fixed" />
        <Routes>
          <Route path="/" element={<AdminPannel />} />
          <Route path="/ordermanage" element={<OrderManage />} />
          <Route path="/productmanage" element={<ProductManage />} />
          <Route path="/brandmanage" element={<BrandManage />} />
          <Route path="/usermanage" element={<UserManage />} />
          <Route path="/salemanage" element={<SaleManage />} />
          <Route path="/couponcodes" element={<CouponCode />} />
          <Route path="/brandmanage/brandform" element={<BrandForm />} />
          <Route
            path="/brandmanage/updatebrand/:id"
            element={<UpdateBrand />}
          />
          {/* <Route path="/singlebrand/:id" element={<SingleBrand />} /> */}

          <Route path="/productmanage/productform" element={<ProductForm />} />
          <Route
            path="/productmanage/updateproduct/:id"
            element={<UpdateProduct />}
          />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />

          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
