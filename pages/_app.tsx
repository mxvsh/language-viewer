import '../styles/globals.css';
import type { AppProps } from 'next/app';

import theme from '../theme';
import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode='dark' />
			<Box maxW='2xl' m='0 auto'>
				<Component {...pageProps} />
			</Box>
		</ChakraProvider>
	);
}

export default MyApp;
