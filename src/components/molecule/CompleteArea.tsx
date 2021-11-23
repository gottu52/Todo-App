import { Box, Flex, Heading } from "@chakra-ui/layout"
import { VFC } from "react";
import { SecondaryButton } from "../attoms/buttons/SecondaryButton"

type Props = {
    Todos: string[];
    onClickCompleteDelete: (index: any) => void;
    onClickBack: (index: any) => void;
}

export const CompleteArea: VFC<Props> = (props) => {
    const { Todos, onClickCompleteDelete,  onClickBack} = props;
    return(
        <Box
            m="40px" 
            p="20px"
            w="1200px"
            minH="200px"
            border="1px" 
            borderRadius="8px"
        >
            <Heading fontSize="lg" borderBottom="2px" color="#FF0080">頑張った！</Heading>
            <Box fontSize="lg">
                <ul>
                {Todos.map((Todo, index) => {
                    return(
                    <div key={Todo}>
                        <Flex>
                        <li>{Todo}</li>
                        <SecondaryButton 
                        onClick={() => onClickBack(index)}>
                            戻す
                        </SecondaryButton>
                        <SecondaryButton 
                        onClick={() => onClickCompleteDelete(index)}>
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