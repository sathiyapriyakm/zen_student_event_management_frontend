import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import React from "react"

// import {Sidebar} from './components/Sidebar'

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Barlow, sans-serif',
        },
      },
    },
  },
})

export function StudentDashboard() {
  return (
    <ThemeProvider theme={theme}>
      {/* <AppState> */}
        <div className="App">
          {/* <Sidebar /> */}
        </div>
      {/* </AppState> */}
    </ThemeProvider>
  )
}