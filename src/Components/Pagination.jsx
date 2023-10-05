import { Button, Center, HStack } from "@chakra-ui/react"

const Pagination = ({ totalData, handlePageChange, page, limit }) => {
    const totalPage = Math.ceil(totalData / limit);
    const renderButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPage; i++) {
            buttons.push(
                <Button
                    key={i}
                    border={"1px"}
                    bg={i === page ? "#4AAB76" : "green.50"}
                    color={i === page ? "white" : "black"}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </Button>
            );
        }
        return buttons;
    };
    return <Center mt={10}>
        <HStack>
            {renderButtons()}
        </HStack>
    </Center>
}
export default Pagination