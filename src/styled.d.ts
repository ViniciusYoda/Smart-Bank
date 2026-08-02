import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    inside: string;
    text: string;
    muted: string;
    border: string;
    filter: string;
  }
}
