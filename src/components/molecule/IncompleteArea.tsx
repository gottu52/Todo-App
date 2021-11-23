import { Box, Flex, Heading } from "@chakra-ui/layout"
import { VFC } from "react"
import { SecondaryButton } from "../attoms/buttons/SecondaryButton"

type Props = {
    incompleteTodos: string[];
    onClickFinish: (index: any) => void;
    onClickIncompleteDelete: (index: any) => void;
}

export const IncompleteArea:VFC<Props> = (props) => {
    const { incompleteTodos, onClickFinish, onClickIncompleteDelete } = props;
    return(
        <Box 
            m="40px"
            p="20px"
            minH="200px"
            border="1px" 
            borderRadius="8px"
            w="1200px">
                    <Heading fontSize="lg" borderBottom="2px" color="#FF0080">すぐやれ！</Heading>
                <Box fontSize="lg">
                <ul>
                    {incompleteTodos.map((Todo, index) => {
                    return(
                        <div key={Todo}>
                            <Flex>
                            <li>{Todo}</li>
                            <SecondaryButton
                            onClick={() => onClickFinish(index)}>
                                完了
                            </SecondaryButton>
                            <SecondaryButton
                            onClick={() => onClickIncompleteDelete(index)}>
                                削除
                            </SecondaryButton>
                            </Flex>
                        </div>
                    )
                    })}
                </ul>
                </Box>
        </Box>
    )
}