import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { useState } from 'react'
import GlobalSettings from './context/GlobalSettings'
import Wrapper from './components/Wrapper'

const App = () => {
  // Global theme config
  const THEME = createTheme({
    typography: {
      fontFamily: ['Roboto Flex', 'sans-serif'].join(','),
    },
  })

  const userDefaultSettings = {
    isNotificationDialogOpen: false,
  }

  const [globalSettings, setGlobalSettings] = useState(userDefaultSettings)

  return (
    <ThemeProvider theme={THEME}>
      <GlobalSettings.Provider value={{ globalSettings, setGlobalSettings }}>
        <BrowserRouter>
          <Routes>
            {/* People */}
            <Route path="/people">
              <Route index element={<>People page</>} />
            </Route>

            {/* Skills */}
            <Route path="/skills">
              <Route index element={<>Skills page</>} />
            </Route>

            {/* Challenges */}
            <Route path="/challenges">
              <Route index element={<>Challenges page</>} />
            </Route>

            {/* Top */}
            <Route path="/top">
              <Route index element={<>Top page</>} />
            </Route>

            {/* Post */}
            <Route path="/m/:postId">
              <Route index element={<>Post page</>} />
            </Route>

            {/* Profile */}
            <Route path="/u/:userName">
              <Route index element={<>Profile page</>} />
              <Route path="saved" element={<>saved page</>} />
              <Route path="settings" element={<>Settings page</>} />
            </Route>

            {/* Search */}
            <Route path="/search">
              <Route
                index
                element={
                  <>
                    {' '}
                    <>
                      <Header />
                    </>
                  </>
                }
              />
            </Route>

            {/* onboard */}
            <Route path="/onboard">
              <Route index element={<>Login| Signup page</>} />
              <Route
                path="setup-account"
                element={<>Setup account page onboard</>}
              />
            </Route>

            {/* Home page */}
            <Route path="/">
              <Route
                index
                element={
                  <>
                    <Header />
                    <Wrapper />
                  </>
                }
              />
            </Route>

            {/* 404 page */}
            <Route path="*" element={<>404 page not found</>} />
          </Routes>
        </BrowserRouter>
      </GlobalSettings.Provider>
    </ThemeProvider>
  )
}

export default App
