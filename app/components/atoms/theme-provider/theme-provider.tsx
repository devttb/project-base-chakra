'use client';

import {ColorModeProvider, type IColorModeProviderProps} from '@/components/atoms/theme-provider/color-mode';
import {ChakraProvider, defaultSystem} from '@chakra-ui/react';

export function ThemeProvider(props: IColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
