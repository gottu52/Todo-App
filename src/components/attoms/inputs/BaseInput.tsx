import { Input } from "@chakra-ui/input"
import { memo, VFC, ChangeEvent } from "react"

type Props = {
    input: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const BaseInput: VFC<Props> = memo((props) => {
    const { input, onChange,　placeholder } = props;
    return(
        <Input m="8px" 
          placeholder={placeholder}
          value={input}
          onChange={onChange}></Input>
    )
})