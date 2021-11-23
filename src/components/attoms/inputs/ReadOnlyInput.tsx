import { Input } from "@chakra-ui/input"
import { memo, VFC } from "react"

type Props = {
    input: string[];
};

export const ReadOnlyInput: VFC<Props> = memo((props) => {
    const { input } = props;
    return(
        <Input m="8px" 
          value={input}
          readOnly></Input>
    )
})