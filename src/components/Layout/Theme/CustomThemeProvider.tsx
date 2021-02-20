import React from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import ThemeConfig from "./theme.json"

const theme = createMuiTheme(ThemeConfig)

const CustomThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider
