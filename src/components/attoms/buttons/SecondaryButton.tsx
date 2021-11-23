import { Button } from "@chakra-ui/button"
import { VFC } from "react";

type Props = {
    onClick: (index: any) => void;
    children: string;
}

export const SecondaryButton:VFC<Props> = (props) => {
    const { onClick, children } = props;
    return (
        <Button 
        m="8px" 
        w="100px" 
        pr="6px" 
        pl="6px" 
        bg="#FF0080" 
        color="#fff" 
        outline="none"
        onClick={onClick}>
           {children}
        </Button>
    )
}