import { Box, Button, Card, CardBody, CardFooter, Image, Link, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactRouterDom, useNavigate } from "react-router-dom";
import { CART_ADD } from "../redux/actionTypes";

const ProductCard = ({ image, title, price, rating, brand, id }) => {
    const isAuth = useSelector(store => store.authReducer.isAuth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRecent = (id, image, title, price, rating, brand) => {
        let recentData = JSON.parse(localStorage.getItem("recent")) || [];
        const existingProduct = recentData?.find(product => product.id === id);
        if (existingProduct) {

        } else {
            let data = {
                id,
                image,
                title,
                price,
                rating,
                brand
            }
            const updatedRecent = [data, ...recentData];
            localStorage.setItem("recent", JSON.stringify(updatedRecent));
        }
    }
    const handleCart = () => {
        if (!isAuth) {
            navigate("/login")
        }
        else {
            let data = {
                id,
                image,
                title,
                price,
                rating,
                brand,
                quantity:1
            }
            dispatch({ type: CART_ADD, payload: data })
        }
    }
    return <Card>
        <CardBody onClick={() => (handleRecent(id, image, title, price, rating, brand))}>
            <Link as={ReactRouterDom} to={`/products/${id}`} textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image src={image} m={"auto"} h={"350px"} w={"auto"} />
                <Text noOfLines={1} fontSize={"xl"} fontWeight={500}>{title}</Text>
                <Text fontSize={"md"} fontWeight={400}>₹ {price}</Text>
                <Text fontSize={"md"} fontWeight={400}>{rating} ⭐</Text>
                <Text fontSize={"md"} fontWeight={400}>{brand}</Text>
            </Link>
        </CardBody>
        <CardFooter>
            <Button bg="#4AAB76" color="white" w={"100%"} onClick={() => (handleCart(id, image, title, price, rating, brand))}>Add to Cart</Button>
        </CardFooter>
    </Card>
}
export default ProductCard;