
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { store } from "../redux/store";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, HStack, Heading, IconButton, Image, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { CART_ADD } from "../redux/actionTypes";

const star1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/800px-Five-pointed_star.svg.png";
const star2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-V2iaGwhth_mrQa1bMrHcMMhgLpFIFMkYWg_KaC2sIAIwPhVbWfXMRQiFh9Esuno_So&usqp=CAU";

const SingleProduct = () => {
    const { id } = useParams();
    // console.log(id)
    const datas = useSelector(store => store.productReducer.cart)
    console.log(datas);
    const dispatch = useDispatch();
    const [singleData, setSingleData] = useState({});
    const [startIndex, setStartIndex] = useState(0);
    const handleNext = () => {
        const nextIndex = startIndex + 1;
        setStartIndex(Math.min(nextIndex, recentData.length - 1));
    };

    const handlePrev = () => {
        const prevIndex = startIndex - 1;
        setStartIndex(Math.max(prevIndex, 0));
    };
    const products = useSelector(store => store.productReducer.products);
    const recentData = JSON.parse(localStorage.getItem("recent"));
    const handleCart = () => {
        let data = {
            id: singleData.id,
            image: singleData.image,
            title: singleData.title,
            price: singleData.price,
            rating: singleData.rating,
            brand: singleData.brand,
            quantity:1
        }
        dispatch({ type: CART_ADD, payload: data })
    }
    useEffect(() => {
        const data = products.filter(item => item.id == id);
        setSingleData(data[0]);
    }, [])


    return <div>
        <DIV>
            <div className="box-1">
                <img src={singleData.image} />
                <div className="btn">
                    <button onClick={handleCart}>ADD TO CART</button>
                    <button>BUY NOW</button>
                </div>
            </div>
            <div className="box-2" >
                <p style={{ fontSize: "35px", marginBottom: "10px", color: "#4AAB76" }}><b>{singleData.title}</b></p>
                <p style={{ fontSize: "20px", }}>Brand: {singleData.brand}</p>
                <p style={{ fontSize: "16px", color: "green" }}>Special Price </p>
                <p style={{ fontSize: "30px", fontWeight: "revert" }}> ₹ {singleData.price}.00</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ color: (singleData.rating) >= 4 ? "green" : "red" }}>Rating : </p>
                    <DIV1>
                        {
                            Array(5).fill(1).map((item, i) => {
                                return <div key={i}>{(i + 1 <= singleData.rating) ? <img src={star2} /> : <img src={star1} />} </div>
                            })
                        }
                    </DIV1>
                </div>
                <p><b>Available offers</b></p>
                <p>🏷️ Bank Offer 5% off on Axis Bank Credit Card, up to ₹625, on orders of ₹5,000 and above <span style={{ color: "blue", cursor: "pointer" }}>T&C</span></p>
                <p>🏷️ Special PriceGet extra 12% off (price inclusive of cashback/coupon)  <span style={{ color: "blue", cursor: "pointer" }}>T&C</span></p>
            </div>
        </DIV >
        <RECENT>
            {recentData.length === 0 ? "There is No Visited Products" :
                <Box w={"100%"} m={"auto"} mt={10}>
                    <Stack direction={"row"}>
                        <Heading textAlign={"left"} color={"#4AAB76"}>Recent Visited Products</Heading>
                        <Spacer />
                        <HStack>
                            <IconButton icon={<ChevronLeftIcon />} backgroundColor={"#4AAB76"} color={"white"} onClick={handlePrev} isDisabled={startIndex === 0} />
                            <IconButton icon={<ChevronRightIcon />} backgroundColor={"#4AAB76"} color={"white"} onClick={handleNext} isDisabled={startIndex + 4 >= recentData.length} />
                        </HStack>
                    </Stack>
                    <Box overflowX="hidden" overflowY="auto" mt={5}>
                        <SimpleGrid columns={["1", "2", "4", "4"]}
                            gap={0.5}
                            justifyContent="center" w={"100%"} mt={5}>
                            {recentData?.length > 0 && recentData.slice(startIndex, startIndex + 4).map((item) => {
                                return <Box w={"90%"} m={"auto"} border={"1px"} borderRadius={"15px"} borderColor={"#4AAB76"}>
                                    <Image src={item.image} w={"100%"} h={300} borderRadius={"15px 15px 0px 0px"} />
                                    <Text fontSize={"xl"} noOfLines={1}>{item.title}</Text>
                                    <Text fontSize={"md"}>₹{item.price}</Text>
                                    <Text>{item.rating}⭐</Text>
                                </Box>
                            })}
                        </SimpleGrid>
                    </Box>
                </Box>}
        </RECENT>
    </div>
}

export default SingleProduct;

const DIV = styled.div`
    width: 100%;
    /* text-align: left; */
    display: flex;
    margin-top:50px;
    overflow: hidden;
    padding: 10px;

    /* border: 1px solid red; */

    .box-1{
        width: 50%;
        border-radius: 30px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        padding: 30px;
        display: flex;
        flex-direction: column;
        background-color:#F0F0F0;
    }
    img{
        width: 100%;
        height: 300px;
        border-radius:20px;
        cursor: pointer;
    }
    .btn{
        display: flex;
        justify-content: space-between;
        margin-top:20px;
    }
    button{
        width:45%;
        background-color:orange;
        color: white;
        font-weight:600;
        height:50px ;
        padding: 10px;
        border-radius: 5px;
    }
    button:nth-child(1){
        background-color:orange;
    }
    button:nth-child(2){
        background-color:red;
    }

    .box-2{
        width: 100%;
        text-align: left;
        padding:20px;
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left:30px;
        gap:10px;
    }

`
const DIV1 = styled.div`
    width: 100px;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 5px;
    margin-left:10px;
    img{
        width: 20px;
        height: 20px;
    }
`

const RECENT = styled.div`
    margin: auto;
    margin-top: 5%;
`