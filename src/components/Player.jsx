import { useEffect, useRef, useState } from 'react'

import { Pause } from '@/icons/Pause'
import { Play } from '@/icons/Play'

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.src = `/music/1/01.mp3`
  }, [])

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
      audioRef.current.volume = 0.1
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
      <div>Current Song...</div>
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center">
          <button className="bg-white rounded-full p-2" onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
      </div>
      <div className="grid place-content-center">
        <audio ref={audioRef}></audio>
      </div>
    </div>
  )
}
