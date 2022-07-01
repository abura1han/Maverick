import React from 'react'

const Carousel = () => {
  return (
    <div
      className="carousel"
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        maxWidth: 665,
        margin: 'auto',
        paddingBottom: 5,
      }}
    >
      {Array(10)
        .fill(0)
        .map((e) => (
          <div
            style={{
              marginRight: 20,
              padding: 10,
              minHeight: 300,
              minWidth: '50%',
              background: 'lightgray',
              borderRadius: 8,
            }}
          >
            item
          </div>
        ))}
    </div>
  )
}

export default Carousel
