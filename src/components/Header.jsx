import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import HomeIcon from '../assets/icons/Home.svg'
import FireIcon from '../assets/icons/Fire.svg'
import HashIcon from '../assets/icons/Hash.svg'
import ElectricIcon from '../assets/icons/Electric.svg'
import BellIcon from '../assets/icons/Bell.svg'
import SearchIcon from '../assets/icons/Search.svg'

import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ExpandMore } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { Person } from '@mui/icons-material'
import { Logout } from '@mui/icons-material'

// Page list
const pages = [
  { name: 'home', icon: HomeIcon },
  { name: 'hot', icon: FireIcon },
  { name: 'skills', icon: HashIcon },
  { name: 'challenge', icon: ElectricIcon },
]

// Options for user profile dropdown
const userOptions = [
  { label: 'Profile', icon: <Person /> },
  { label: 'Logout', icon: <Logout /> },
]

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('/')
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const location = useLocation()

  /**
   * Get active menu
   */
  useEffect(() => {
    setActiveMenu(location.pathname === '/' ? 'home' : location.pathname)
  }, [location])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 0,
        borderBottom: '1px solid #E8EDF3',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Maverick
          </Typography>
          <IconButton sx={{ backgroundColor: '#E7E7E7' }}>
            <img src={SearchIcon} alt="search" />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ name, icon }, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <img src={icon} alt="menu item" />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Maverick
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map(({ name, icon }, i) => (
              <IconButton
                key={i}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 0,
                  px: 7,
                  color: 'black',
                  display: 'block',
                  borderRadius: 2,
                  backgroundColor: name.includes(activeMenu)
                    ? '#F5F5F5'
                    : 'white',
                }}
              >
                <img src={icon} alt="menu item" />
              </IconButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Notifications">
              <IconButton
                sx={{
                  mr: 2,
                  px: 1,
                  borderRadius: 8,
                  backgroundColor: '#E7E7E7',
                }}
              >
                <Badge color="secondary" badgeContent={33}>
                  <img src={BellIcon} alt="notification" />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ px: 1, borderRadius: 2 }}
              >
                <Avatar alt="Abu Ra1han" src="/static/images/avatar/2.jpg" />
                <Typography sx={{ ml: 1, color: 'black' }}>
                  Abu Ra1han
                </Typography>
                <ExpandMore />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userOptions.map(({ label, icon }, i) => (
                <MenuItem
                  key={i}
                  sx={{ minWidth: 200 }}
                  onClick={handleCloseUserMenu}
                >
                  {icon}
                  <Typography textAlign="left" sx={{ ml: 2, color: 'black' }}>
                    {label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
