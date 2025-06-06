import React from 'react'
import headerBg from '../../assets/sermon-header.jpg' // make sure the image exists

function SermonHeader() {
  return (
    <div
      className="w-full h-[400px] flex items-center justify-center flex-col text-center text-white"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-5xl font-bold">Sermons & Teachings</h1>
      <p className="text-lg mt-4 max-w-[600px]">
        Be inspired and transformed by powerful messages that equip and strengthen your faith.
      </p>
    </div>
  )
}

export default SermonHeader
