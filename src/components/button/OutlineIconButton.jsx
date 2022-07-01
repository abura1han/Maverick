import { Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const OutlineIconButton = ({ icon, label, center = false, primary }) => {
  console.log(primary)
  const [isHover, setIsHover] = useState(false)

  const primaryColors = {
    text: 'white',
    textHover: 'black',
    background: '#9C27B0',
    backgroundHover: '#9C27B0',
  }

  return (
    <IconButton
      sx={{
        px: 2,
        py: 1.2,
        width: '100%',
        justifyContent: center ? 'center' : 'flex-start',
        borderRadius: 10,
        border: '1px solid #E8EDF3',
        backgroundColor: primary ? primaryColors.background : 'white',
        hover: {
          backgroundColor: primary ? primaryColors.backgroundHover : 'white',
        },
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {icon && (
        <img
          style={{ maxWidth: 30, maxHeight: 30, borderRadius: 50 }}
          src={icon}
          alt={icon}
        />
      )}
      <Typography
        sx={{
          mx: 1,
          fontWeight: 500,
          fontSize: 16,
          color: primary
            ? isHover
              ? primaryColors.textHover
              : primaryColors.text
            : 'black',
        }}
      >
        {label && label}
      </Typography>
    </IconButton>
  )
}

export default OutlineIconButton
