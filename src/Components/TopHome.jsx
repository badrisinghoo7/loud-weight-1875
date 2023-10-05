import { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs"
const TopHome = () => {
    const [photos] = useState([
        "https://www.browninteriors.com/wp-content/uploads/2018/05/15461_03zrg-600x600.jpg",
        "https://img.freepik.com/free-photo/abstract-design-with-colorful-patterns-nature-leaf-generated-by-ai_188544-15573.jpg?size=626&ext=jpg&ga=GA1.2.1157295257.1695267253&semt=sph",
        "https://img.freepik.com/free-photo/natures-beauty-captured-tranquil-mountain-landscape-generative-ai_188544-7837.jpg?size=626&ext=jpg&ga=GA1.2.1157295257.1695267253&semt=sph"
    ])
    const [currPhoto, setCurrPhoto] = useState(0);
    const handleInc = () => {
        if (currPhoto === photos.length - 1) {
            setCurrPhoto(0);
        } else {
            setCurrPhoto(currPhoto + 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleInc();
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, [currPhoto])
    return <div style={{ backgroundColor: "white" }}>
        <div style={{ width: "90%", margin: "auto", display: "flex", gap: "40px", alignItems: "center" }}>
            <div style={{ width: "100%", height: "500px", margin: "auto", justifyContent: "center", backgroundColor: "#F0F0F0", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <img src={photos[currPhoto]} alt="" style={{ width: "600px", height: "450px", margin: "auto" }} />
                <div style={{ margin: "auto" }} onChange={(e) => setCurrPhoto(+e.target.value)}>
                    <input type="radio" value={0} name="photo" defaultChecked={currPhoto == "0"} />
                    <input type="radio" value={1} name="photo" defaultChecked={currPhoto == "1"} />
                    <input type="radio" value={2} name="photo" defaultChecked={currPhoto == "2"} />
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <h1 style={{ fontWeight: "300", fontSize: "55px", margin: "auto" }}>Youth On <span style={{ color: "#4AAB76" }}>The Move</span></h1>
                <p style={{ marginTop: "15px", fontSize: "20px", fontWeight: "300" }}>Being creative is not a hobby, it is a way of life for every artist. The best things plasic flowers.</p>
                <button style={{ backgroundColor: "#4AAB76", color: "white", padding: "15px 30px 15px 30px", borderRadius: "0.5rem", border: "none", fontWeight: "300", marginTop: "15px" }}>Explore All Things</button>
                <div style={{ display: "flex", marginTop: "50px", justifyContent: "center" }}>
                    <img style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50px", border: "1px solid white" }} src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.1157295257.1695267253&semt=sph" alt="" />
                    <img style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50px", marginLeft: "-5px", border: "1px solid white" }} src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.1.1157295257.1695267253&semt=sph" alt="" />
                    <img style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50px", marginLeft: "-5px", border: "1px solid white" }} src="https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?size=626&ext=jpg&ga=GA1.2.1157295257.1695267253&semt=sph" alt="" />
                    <span style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50px", marginLeft: "-5px", backgroundColor: "#4AAB76", textAlign: "center", display: "flex", alignItems: "center" }}><BsArrowUpRight style={{ margin: "auto", color: "white", width: "30px", height: "30px", objectFit: "cover" }} /></span>
                </div>
                <p style={{ fontSize: "20px", fontWeight: 300 }}>Meet Our Expert Artist</p>
            </div>
        </div>
    </div >
}
export default TopHome;