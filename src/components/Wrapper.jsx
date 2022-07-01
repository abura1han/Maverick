import { styled } from '@mui/material'
import { Paper } from '@mui/material'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'
import UserPost from './content/UserPost'
import HomeLeftSidebar from './sidebar/HomeLeftSidebar'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Carousel from './Carousel'

const Wrapper = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return (
    <Container maxWidth="xl">
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        sx={{ mt: 3 }}
      >
        {matches && (
          <Grid item xs={3}>
            <HomeLeftSidebar />
          </Grid>
        )}

        <Grid item xs={12} md={6}>
          <div style={{ marginBottom: 26 }}>
            <Carousel />
          </div>
          {Array(20)
            .fill(0)
            .map((e) => (
              <div style={{ marginBottom: 26 }}>
                <UserPost />
              </div>
            ))}
        </Grid>
        {matches && (
          <Grid item xs={3}>
            <Item>4</Item>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default Wrapper
