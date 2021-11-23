import { Flex } from "@chakra-ui/layout"
import { ChangeEvent, memo, VFC } from "react"
import { BaseButton } from "../attoms/buttons/BaseButton"
import { BaseInput } from "../attoms/inputs/BaseInput"

type Props = {
    input: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    placeholder: string;
    text: string
}

export const InputArea: VFC<Props> = memo((props) => {
    const { input, onChange, onClick, placeholder, text } = props;
    return(
        <Flex m="8px" w="1200px" >
          <BaseInput 
            input={input} 
            onChange={onChange} 
            placeholder={placeholder}/>
          <BaseButton 
            onClick={onClick}>
              {text}
          </BaseButton>
        </Flex>
    )
})