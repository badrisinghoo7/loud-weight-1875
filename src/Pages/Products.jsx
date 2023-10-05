import { SearchIcon } from "@chakra-ui/icons"
import { Box, Button, IconButton, Input, Select, SimpleGrid, Spinner, Stack } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import Productcard from "../Components/ProductCard";
import Pagination from "../Components/Pagination";
const Products = () => {
    const [sortcri, setSortCri] = useState("");
    const [sortOrd, setSortOrd] = useState("");
    const [filter, setFilter] = useState("");
    const [query, setQuery] = useState("");
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [totalData, setTotalData] = useState();
    const [currPage, setCurrPage] = useState(1);
    const limit = 12;
    let url = new URL("https://lcal-pay.onrender.com/products");
    const fetchTheData = () => {
        setLoading(true);
        if (query !== "") {
            url.searchParams.append('q', query)
            setCurrPage(1);
        }
        if (sortcri !== "" && sortOrd !== "") {
            url.searchParams.append('_sort', sortcri);
            url.searchParams.append('_order', sortOrd);
        }
        if (filter !== "") {
            url.searchParams.append('brand', filter);
        }
        url.searchParams.append("_page", currPage);
        url.searchParams.append('_limit', 12);
        axios.get(url)
            .then((res) => {
                setProductData(res.data)
                setLoading(false);
                setErr("");
            })
            .catch((err) => {
                setErr(err)
                setProductData([]);
                setLoading(false);
            })
    }
    const handlePageChange = (value) => {
        setCurrPage(value);
    }

    let url1 = new URL("https://lcal-pay.onrender.com/products");
    const allthedata = () => {
        axios.get(url1)
            .then((res) => {
                setTotalData(res.data.length);
            })
            .catch((err) => {
                setErr(err)
            })
    }
    useEffect(() => {
        fetchTheData();
        allthedata();
    }, [currPage])
    if (loading) {
        return <Spinner size={"xl"} />
    }
    if (err) {
        return <ErrorIndicator />
    }
    return (
        <Box pt={5} >
            <Stack direction={"row"} w={"70%"} m={"auto"}>
                <Input placeholder="Search by Product Name" focusBorderColor="#4AAB76" borderColor={"#4AAB76"} backgroundColor={"white"} value={query} onChange={(e) => setQuery(e.target.value)} />
                <IconButton icon={<SearchIcon />} bg="#4AAB76" color={"white"} onClick={fetchTheData} />
            </Stack>
            <Stack direction={["column", "column", "row"]} w={["70%", "70%", "60%"]} m={"auto"} mt={"1"}>
                <Select placeholder="Select Sort Criteria" w={["70%", "70%", "fit-content"]} m={"auto"} focusBorderColor="#4AAB76" borderColor={"#4AAB76"} onChange={(e) => setSortCri(e.target.value)} backgroundColor={"white"} value={sortcri}>
                    <option value={"price"}>Price</option>
                    <option value={"rating"}>Rating</option>
                </Select>
                <Select placeholder="Select Sorting Order" w={["70%", "70%", "fit-content"]} m={"auto"} borderColor={"#4AAB76"} focusBorderColor="#4AAB76" onChange={(e) => setSortOrd(e.target.value)} backgroundColor={"white"} value={sortOrd}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </Select>
                <Select placeholder="Select for Filter by Brand" w={["70%", "70%", "fit-content"]} focusBorderColor="#4AAB76" m={"auto"} borderColor={"#4AAB76"} value={filter} onChange={(e) => setFilter(e.target.value)} backgroundColor={"white"}>
                    <option value="Painting Mantra">Painting Mantra</option>
                    <option value="Pidilite">Pidilite</option>
                    <option value="Pitaara Box">Pitaara Box</option>
                    <option value="Wall Design">Wall Design</option>
                </Select>
                <Button backgroundColor={"#4AAB76"} color={"white"} onClick={fetchTheData}>Apply</Button>
                <Button backgroundColor={"red"} color={"white"} onClick={() => {
                    allthedata();
                    setQuery("");
                    setSortCri("");
                    setSortOrd("");
                    setFilter("");
                }}>Reset</Button>
            </Stack>
            <SimpleGrid columns={["1", "1", "2", "4"]} spacing='20px' w={"100%"} m={"auto"} mt={"5"} gap={"20px"}>
                {productData?.map((item) => {
                    return <Productcard {...item} key={item.id} />
                })}
            </SimpleGrid>
            <Pagination totalData={totalData} handlePageChange={handlePageChange} page={currPage} limit={limit} />
            {/* <Footer /> */}
        </Box>
    )
}
export default Products;