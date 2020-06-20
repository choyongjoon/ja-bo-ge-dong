import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      main: string
      secondary: string
      red: string
      blue: string
      yellow: string
      green: string
    }
  }
}
