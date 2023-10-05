import TopHome from "../Components/TopHome"
import SingleProduct from "../Components/SingleProduct"
import InspirationContent from "../Components/InspirationContent"
import ApproachHome from "../Components/ApproachHome"
import HomeProducts from "./HomeProducts"
import { useSelector } from "react-redux"



const HomePage = () => {

    const user=useSelector((store)=>store.authReducer.user);
    
    return <div>
        <TopHome />
        <HomeProducts/>
        <InspirationContent />
        <ApproachHome />
    </div>
}
export default HomePage;