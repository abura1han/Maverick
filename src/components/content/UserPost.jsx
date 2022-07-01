import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Avatar } from '@mui/material'
import { IconButton } from '@mui/material'
import { MoreHoriz } from '@mui/icons-material'
import { Visibility } from '@mui/icons-material'
import CommentIcon from '../../assets/icons/Comment.svg'
import PlusIcon from '../../assets/icons/Plus.svg'
import EyeIcon from '../../assets/icons/Eye.svg'

const Comment = () => <img src={CommentIcon} alt="comment" />
const Add = () => <img src={PlusIcon} alt="add" />
const View = () => <img src={EyeIcon} alt="Views" />

const UserPost = () => {
  return (
    <Card
      sx={{
        maxWidth: 665,
        mx: 'auto',
        display: 'flex',
        boxShadow: 0,
        border: '1px solid #E8EDF3',
        borderRadius: 2,
      }}
    >
      <div>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              10 Hourse of coading...
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              tenetur dolores aspernatur quam temporibus odit numquam! Eaque,
              eum. Iusto tempora reiciendis, corrupti sit veritatis repellat
              perferendis ex illo adipisci cum.
            </Typography>
          </CardContent>
          <CardMedia
            component="div"
            // image="https://i.pinimg.com/originals/23/8d/b2/238db2d9c88acd0769f35a5583f7d93f.jpg"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            alt="green iguana"
          >
            <video
              controls
              style={{ maxWidth: '100%' }}
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            ></video>
          </CardMedia>
        </CardActionArea>
      </div>
      <div style={{ padding: '6px 8px' }}>
        <IconButton sx={{ ml: 1.4 }}>
          <MoreHoriz />
        </IconButton>
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 500,
            fontSize: 12,
            color: 'black',
          }}
        >
          2hr
        </Typography>
        <Button sx={{ borderRadius: 10, mt: 1 }}>
          <Avatar alt="Abu Ra1han" />
        </Button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}
        >
          <View />
          <Button
            sx={{
              borderRadius: 10,
              border: '1px solid #E7E7E7',
              fontWeight: 500,
              fontSize: 12,
              color: 'black',
            }}
          >
            1.4k
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
          }}
        >
          <Add />
          <Button
            sx={{
              borderRadius: 10,
              border: '1px solid #E7E7E7',
              fontWeight: 500,
              fontSize: 12,
              color: 'black',
            }}
          >
            1.4k
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          <Comment />
          <Button
            sx={{
              borderRadius: 10,
              border: '1px solid #E7E7E7',
              fontWeight: 500,
              fontSize: 12,
              color: 'black',
            }}
          >
            1.4k
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default UserPost
