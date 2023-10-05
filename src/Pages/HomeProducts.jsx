import { useDispatch, useSelector } from "react-redux"
import { store } from "../redux/store";
import ProductCard from "../Components/ProductCard";
import { useEffect } from "react";
import { getAllProducts, getData } from "../redux/Products/action";

const HomeProducts = () => {
    const dispatch=useDispatch();
    const products = useSelector(store=> store.productReducer.homeProducts);

    useEffect(()=>{
        let api ="https://lcal-pay.onrender.com/products";
        dispatch(getData(api));
        dispatch(getAllProducts(api));
    },[])
    return <div style={{ marginLeft: "5%",marginBottom:"50px",marginTop:"50px" }}>
        <p style={{ fontSize: "45px", fontWeight: "300px" }}>Featured <span style={{ color: "green" }}>Artworks</span></p>
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(4,1fr)",gap:"20px" }}>
            {
                products?.map(item=>{
                    return <ProductCard key={item.id} {...item}/>
                })
            }
        </div>
    </div>
}
export default HomeProducts 