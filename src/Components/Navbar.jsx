import React from 'react';

// import { FaCalendar } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {
    Box,
    Image,
    Flex,
    Spacer,
    chakra,
    VStack,
    Button,
    HStack,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    background,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

// provide text Decoration Non or Remove underline on hover as well
const NoDecorationLink = chakra(Link, {
    baseStyle: {
        textDecoration: 'none',
        _hover: {
            textDecoration: 'none',
        },
    },
});

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const isAuth = useSelector((store) => store.authReducer.isAuth);
    console.log(isAuth);
    const userName = useSelector(store => store.authReducer.user.name)
    return (
        <chakra.header marginBottom={"50px"} width={"100%"} >
            <Box bg="green.400" color="white" py={4} px={8} >
                <Flex alignItems="center" >
                    <NoDecorationLink href="#" >
                        <Flex gap="20px" alignItems="ceter">
                            <chakra.h1 fontSize="3xl" fontWeight="bold" >
                                PaintKu.
                            </chakra.h1>
                        </Flex>
                    </NoDecorationLink>
                    <Spacer />
                    <HStack spacing={10} fontSize="xl" display={{ base: 'none', md: 'flex' }}>
                        <Link to="/" color="white" >
                            Home
                        </Link>
                        <Link to="/products" color="white">
                            Products
                        </Link>
                        <Link to="/cart" color="white">
                            Cart
                        </Link>
                        {!isAuth ? <Link to="/login"> <Button>Login</Button></Link> : <Link to="/profile"><Button>{userName}</Button></Link>}
                    </HStack>
                    <IconButton
                        display={{ base: 'inline-flex', md: 'none' }}
                        ref={btnRef}
                        aria-label="Open menu"
                        icon={<HamburgerIcon />}
                        color="white"
                        bg="green"
                        onClick={onOpen}
                        variant="ghost"
                    />
                </Flex>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack direction="column" spacing={4}>
                            <Link to="/" onClick={onClose}>
                                Home
                            </Link>
                            <Link to="/products" onClick={onClose}>
                                Products
                            </Link>
                            <Link to="/cart" onClick={onClose}>
                                Cart
                            </Link>
                            {!isAuth ? <Link to="/login"> <Button>Login</Button></Link> : <Link to="/profile"><Button>{userName}</Button></Link>}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </chakra.header>
    );
};

export default Navbar