import { CiDeliveryTruck } from "react-icons/ci"
import { AiOutlineLock } from "react-icons/ai"
import { LuHeadphones } from "react-icons/lu"
const AproachHome = () => {
    return <div>
        <div style={{ width: "90%", margin: "auto", display: "flex", gap: "40px", alignItems: "center" }}>
            <div style={{ width: "130%" }}>
                <h1 style={{ fontWeight: "300", fontSize: "35px", margin: "auto" }}>Our <span style={{ color: "#4AAB76" }}>Approach</span></h1>
                <div style={{ display: "flex", marginTop: "30px" }}>
                    <div style={{ padding: "10px" }}>
                        <span ><CiDeliveryTruck style={{ margin: "auto", color: "black", width: "40px", height: "40px", objectFit: "cover" }} /></span>
                        <p style={{ fontWeight: "200" }}>FAST SHIPPING</p>
                        <p style={{ fontWeight: "200" }}>With Sites In 5 Languages, We Ship To Over 200 Countries</p>
                    </div>
                    <hr />
                    <div style={{ padding: "10px" }}>
                        <span><AiOutlineLock style={{ margin: "auto", color: "black", width: "40px", height: "40px", objectFit: "cover" }} /></span>
                        <p style={{ fontWeight: "200" }}>SAVE DELIVERY</p>
                        <p style={{ fontWeight: "200" }}>Pay With The World's Most Popular, Secure Payment Methods.</p>
                    </div>
                    <hr style={{ color: "gray" }} />
                    <div style={{ padding: "10px" }}>
                        <span><LuHeadphones style={{ margin: "auto", color: "black", width: "40px", height: "40px", objectFit: "cover" }} /></span>
                        <p style={{ fontWeight: "200" }}>SUPPORT 24/7</p>
                        <p style={{ fontWeight: "200" }}>With Sites In 5 Languages, We Ship To Over 200 Countries</p>
                    </div>
                </div>
            </div>
            <div style={{ width: "70%", height: "400px", margin: "auto", justifyContent: "center", backgroundColor: "#F0F0F0", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <img src="https://i.pinimg.com/564x/2b/cd/59/2bcd59a3c3bf0c427bd355f316136e82.jpg" alt="" width={"85%"} height={"85%"} />
            </div>
        </div>
    </div>
}
export default AproachHome;