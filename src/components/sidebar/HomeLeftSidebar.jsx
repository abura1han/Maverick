import React from 'react'
import OutlineIconButton from '../button/OutlineIconButton'
import BookMarkIcon from '../../assets/icons/Bookmark.svg'
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Divider } from '@mui/material'
import { Button } from '@mui/material'

const HomeLeftSidebar = () => {
  return (
    <div style={{ position: 'relative', minHeight: '88vh' }}>
      <List sx={{ mt: 0, ml: 0, pl: 0, pt: 0 }}>
        <ListItem sx={{ pt: 0.1, px: 0 }}>
          <OutlineIconButton
            icon={
              'https://scontent.fjsr6-1.fna.fbcdn.net/v/t1.6435-9/72436176_380608739508635_2017104435351650304_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QDHe8uyclMAAX9W88xX&_nc_oc=AQkcUKqW0TaHfDKWTFn8teqaMxlN1ePFvNRDRDwmrGvaZ8XE2On4KoDtGqgpmvnvrCI&_nc_ht=scontent.fjsr6-1.fna&oh=00_AT8Rgw7Auyomx78h5EAI1eXsaZTAqSpDJmtY_a8KUA6ymQ&oe=62E48E80'
            }
            label={'Abu Ra1han'}
          />
        </ListItem>
        <ListItem sx={{ pt: 0.1, px: 0 }}>
          <OutlineIconButton icon={BookMarkIcon} label={'Saved'} />
        </ListItem>
        <ListItem sx={{ pt: 0.1, px: 0 }}>
          <OutlineIconButton primary center label={'+ Create post'} />
        </ListItem>
      </List>

      <Typography sx={{ pb: 1, mt: 3, fontWeight: 500 }}>
        Subscribed skills
      </Typography>
      <Divider />
      <List sx={{ mt: 2, ml: 0, pl: 0, pt: 0 }}>
        <ListItem sx={{ pt: 0.1, px: 0, pl: 0.8 }}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="">
            <Button variant="text" sx={{ w: '100%', py: 0, color: 'black' }}>
              # Football
            </Button>
          </Link>
        </ListItem>
        <ListItem sx={{ pt: 0.1, px: 0, pl: 0.8 }}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="">
            <Button variant="text" sx={{ w: '100%', py: 0, color: 'black' }}>
              # Football
            </Button>
          </Link>
        </ListItem>
        <ListItem sx={{ pt: 0.1, px: 0, pl: 0.8 }}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="">
            <Button variant="text" sx={{ w: '100%', py: 0, color: 'black' }}>
              # Football
            </Button>
          </Link>
        </ListItem>
        <ListItem sx={{ pt: 0.1, px: 0, pl: 0.8 }}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="">
            <Button variant="text" sx={{ w: '100%', py: 0, color: 'black' }}>
              # Football
            </Button>
          </Link>
        </ListItem>
        <ListItem sx={{ pt: 0.1, px: 0, pl: 0.8 }}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="">
            <Button variant="text" sx={{ w: '100%', py: 0, color: 'black' }}>
              # Football
            </Button>
          </Link>
        </ListItem>
        <ListItem sx={{ pt: 0.1, px: 0, pl: 0.8 }}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="">
            <Button variant="text" sx={{ w: '100%', py: 0, color: 'black' }}>
              # Football
            </Button>
          </Link>
        </ListItem>
        <ListItem sx={{ pt: 0.1, px: 0, pl: 0.8 }}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="">
            <Button variant="text" sx={{ w: '100%', py: 0, color: 'black' }}>
              # Football
            </Button>
          </Link>
        </ListItem>
      </List>

      <div style={{ position: 'absolute', bottom: 10, left: 0, width: '100%' }}>
        <Divider sx={{ mb: 0.5 }} />
        <a
          target={'_blank'}
          style={{ textDecoration: 'none', color: 'black' }}
          href="https://linode.com"
        >
          <Button variant="text" sx={{ w: '100%', py: 0, color: 'black' }}>
            Linode
          </Button>
        </a>
        -
        <a
          target={'_blank'}
          style={{ textDecoration: 'none', color: 'black' }}
          href="https://hashnode.com"
        >
          <Button variant="text" sx={{ w: '100%', py: 0, color: 'black' }}>
            Hashnode
          </Button>
        </a>
      </div>
    </div>
  )
}

export default HomeLeftSidebar
