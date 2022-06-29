import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  // Global theme config
  const THEME = createTheme({
    typography: {
      fontFamily: ['Roboto Flex', 'sans-serif'].join(','),
    },
  })

  return (
    <ThemeProvider theme={THEME}>
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
            <Route index element={<>Search page</>} />
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
            <Route index element={<>Index page</>} />
          </Route>

          {/* 404 page */}
          <Route path="*" element={<>404 page not found</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
