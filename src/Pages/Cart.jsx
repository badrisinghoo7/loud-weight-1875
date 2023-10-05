import styled from "styled-components"
import SingleCart from "../Components/SingleCart"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { CART_DELETE } from "../redux/actionTypes"

const Cart = () => {
    const dispatch = useDispatch();

    const [cartArray, setCartArray] = useState([])
    const cartData = useSelector(store => store.productReducer.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(0)

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < cartData.length; i++) {
            total += cartData[i].price * cartData[i].quantity;
        }
        if (total == 0) {
            setDeliveryCharge(0)
        }
        if (total > 0 && total < 3000) {
            setDeliveryCharge(80);
        }
        else if (total >= 3000) {
            setDeliveryCharge(0);
        }
        setTotalPrice(total)
        setCartArray(cartData);
    }, [cartData]);

    const deleteCart = (id) => {
        let update = [...cartArray];
        update = update.filter(item => item.id !== id);
        dispatch({ type: CART_DELETE, payload: update });

    }

    const qtyIncreament = (id) => {
        let update = [...cartArray];
        update = update.map(item => {
            return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
        });
        dispatch({ type: CART_DELETE, payload: update })
    }
    const qtyDecreament = (id) => {
        let update = [...cartArray];
        update = update.map(item => {
            return item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
        });
        dispatch({ type: CART_DELETE, payload: update })
    }

    return <>
        <DIV>
            <div className="box-1">
                {
                    cartArray?.map((item, i) => {
                        return <SingleCart key={i} i={i} {...item} deleteCart={deleteCart} qtyIncreament={qtyIncreament} qtyDecreament={qtyDecreament} />
                    })
                }
            </div>
            <div className="box-2">
                <div className="summary">
                    <h1>Cart Summary</h1>
                    <hr />
                    <div style={{ display: "flex", justifyContent: "space-around", padding: "10px" }}>
                        <p>SubTotal :</p>
                        <p>₹ {totalPrice}.00</p>
                    </div>
                    <hr />
                    <div style={{ display: "flex", justifyContent: "space-around", padding: "10px" }}>
                        <p>Delivery :</p>
                        {/* <s>₹ {deliveryCharge}.00</s> */}
                        {
                            deliveryCharge > 0 && deliveryCharge < 3000 ?
                                <p>₹ {deliveryCharge}.00</p>
                                : <div><s>₹ {deliveryCharge}.00</s><p style={{ color: "red" }}>Free Delivery</p></div>
                        }
                    </div>
                    <hr />
                    <div style={{ display: "flex", justifyContent: "space-around", padding: "10px" }}>
                        <p>Grand Total :</p>
                        <p>₹ {totalPrice + deliveryCharge}.00 <span style={{ color: "green" }}> only</span></p>
                    </div>
                    <hr />
                    <button>BUY NOW</button>
                </div>

            </div>
        </DIV>
    </>
}

export { Cart }

const DIV = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    font-size:18px;
    
    .box-1
    {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }
    .box-2
    {
        width: 70%;
        padding: 20px;
    }
    .summary{
        width: 100%;
        margin: auto;
        border: 1px solid black;
        border-radius:10px;
        background-color:white;
        padding: 20px;
    }
    h1{
        font-size: 30px;
        margin-bottom:20px;
    }
    button{
        width: 130px;
        height: 40px;
        border-radius:10px;
        margin:20px;
        background-color:green;
        color:white;
    }
`