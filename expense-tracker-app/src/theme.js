import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    initialState: 'light',
    useSystemColorMode: true
})

export default theme