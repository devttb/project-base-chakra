'use client';

import {ColorModeProvider, type IColorModeProviderProps} from '@/src/components/atoms/provider/color-mode';
import {ChakraProvider, defaultSystem} from '@chakra-ui/react';

export function Provider(props: IColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
