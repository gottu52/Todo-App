import { Text } from "@chakra-ui/layout"

export const TitleLogo = () => {
    return (
        <Text
          m="16px"
          mb="40px"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold">
            Todo App
        </Text>
    )
}