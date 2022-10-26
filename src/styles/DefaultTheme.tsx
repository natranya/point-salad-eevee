import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    card: {
      borderRadius: string;
      height: string;
      width: string;
    };
  }
}
