import { useState } from "react"

const SingleCart = ({ i, id, title, price, image, deleteCart, quantity, qtyIncreament, qtyDecreament }) => {

    // const [qty, setQty]=useState(1);

    return <div style={{ width: "100%", display: "flex", border: "1px solid green", borderRadius: "10px", padding: "10px" }}>
        <div style={{ width: "60%", padding: "10px" }}>
            <img src={image} alt="" style={{ width: "90%", height: "100%" }} />
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <h1 style={{ color: "#4AAB76", fontWeight: "600px" }}>{title}</h1>
            <p>Ref:{16232 + i}</p>
            <p>✅ click & Collect</p>
            <p>✅ Home Delivery</p>
            <p>Price : ₹ {price}.00</p>
            <p><span style={{ color: 'red' }}>Total Price</span> : ₹ {price * quantity}.00</p>
            <div>
                <span>QTY: </span>
                <button style={{ width: "40px", backgroundColor: "#4AAB76" }} onClick={() => qtyDecreament(id)} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button style={{ width: "40px", backgroundColor: "#4AAB76" }} onClick={() => qtyIncreament(id)}>+</button>
                <button style={{ width: "100px", backgroundColor: "red" }} onClick={() => deleteCart(id)}>Remove</button>
            </div>

        </div>
    </div>
}

export default SingleCart