import { Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup"
import SingleProduct from "../Components/SingleProduct";
import Products from "../Pages/Products";
import { PrivateRouter } from "./PrivateRouter";
import { Profile } from "../Pages/Profile";
import { Cart } from "../Pages/Cart";
import PageNotFound from "../Pages/PageNotFound";
const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<PrivateRouter><SingleProduct /></PrivateRouter>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cart"  element={<PrivateRouter><Cart/></PrivateRouter>}/>
        <Route path="*" element={<PageNotFound />} />
    </Routes>
}
export default AllRoutes;