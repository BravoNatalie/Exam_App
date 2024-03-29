import 'styled-components';

import light from './light';

export type Theme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}