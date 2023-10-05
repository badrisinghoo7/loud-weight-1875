import { Box, Image, Text, Button, Grid, HStack, VStack, Center } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { LOGOUT_SUCCESS } from "../redux/actionTypes";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.authReducer.user);
    const isAuth = useSelector((store) => store.authReducer.isAuth);
    const [phone, setPhone] = useState("");
    const [isPhone, setIsPhone] = useState(false)
    // console.log("hi")

    const handleMobile = () => {
        setIsPhone(true)
    }

    const handleLogout = () => {
        localStorage.setItem("userDetails", JSON.stringify({}));
        dispatch({ type: LOGOUT_SUCCESS });
        navigate("/")
    }

    if (!isAuth) {
        return <Navigate to="/" />
    }
    console.log(user)
    return <DIV>
        <Grid templateColumns={'1fr 1fr'} gap="40%" className='mainBox'>
            <VStack>
                <Text fontSize="20px" color="red">Name : {user.name}</Text>
                <Text fontSize="20px" color="green">Email : {user.email}</Text>
                {
                    isPhone ? <Text fontSize="20px">+91 {phone}</Text> : <div><input type="number" placeholder="Add Mobile Number" onChange={e => setPhone(e.target.value)} /> <button onClick={handleMobile}>Add</button></div>
                }
            </VStack>
        </Grid>
        <br />
        <hr />
        <Text paddingLeft="" marginTop="30px" fontSize="25px">Other</Text>
        <Box className="otherStyle" display="flex" >
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8McUPbblNV3FcAh2BvxsVucNenA_0vtrX4KBbQ1LuRZuXrskTE1-kjnTD4iQxVEL0qkE&usqp=CAU"
                alt="favourite logo"
                className="otherChild_ImG"
            />
            <Text mt="10px" fontSize="20px" color="cyan.800">Favourite</Text>
        </Box>
        <Box className="otherStyle">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Moe_Epsilon_QR_code.png"
                alt="QR Code Logo" borderRadius="0px" p="5px"
                className="otherChild_Img"
            />
            <Text mt="10px" fontSize="20px" color="cyan.800">QR Codes</Text>
        </Box>
        <Box className="otherStyle">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lyfJZdW3vk3syqPhDSfqVLUGIrdH26KdEQWa8a4P8OvxTcVuHeQ_zC0j97g5E0ReY68&usqp=CAU"
                className="otherChild_Img" p="10px" alt="invite friends logo"
            />
            <Text mt="10px" fontSize="20px" color="cyan.800">Invite friends</Text>
        </Box>
        <Box className="otherStyle">
            <Image src="https://e7.pngegg.com/pngimages/548/792/png-clipart-gear-symbol-computer-icons-encapsulated-postscript-logo-setting-miscellaneous-logo.png"
                className="otherChild_Img" p="10px" alt="Setting logo"
            />
            <Text mt="10px" fontSize="20px" color="cyan.800">Setting</Text>
        </Box>
        <Box className="otherStyle">
            <Image src="https://t3.ftcdn.net/jpg/05/10/88/82/360_F_510888200_EentlrpDCeyf2L5FZEeSfgYaeiZ80qAU.jpg"
                className="otherChild_Img" alt="Get help logo"
            />
            <Text mt="10px" fontSize="20px" color="cyan.800">Get help</Text>
        </Box>
        <Center><Button onClick={handleLogout} m="20px" w="100px" bg="blue" color="white" _hover={{ bg: "green" }}>Logout</Button></Center>
    </DIV>
}

export { Profile }

const DIV = styled.div`

.mainBox{
    border:1px solid black ;
    width:80%;
    height: 200px;
    margin: auto;
    padding: 1rem;
    margin-top: 30px;
    border-radius: 15px;
    background-color:#F0F0F0;
    cursor: pointer;
}

.otherStyle{
    display:flex;
    width:20%;
    height:50px;
    margin-left: 10%;
    border-radius:10px;
    margin-top: 5px;
    gap:30px;
    padding-left: 50px;
    cursor: pointer;
   
}
.otherChild_Img {
    border-radius: 50%;
    width: 50px;
    height:50px;
    padding: 5px;
}
`