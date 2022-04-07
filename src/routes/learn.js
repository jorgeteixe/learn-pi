import { useCallback, useEffect, useState } from 'react'
import getPair from '../services/pi'

function Learn() {
  const [pair, setPair] = useState(2)

  const prev = useCallback(
    (n) => {
      if (pair > 2) setPair(pair - (n ? n : 2))
    },
    [pair, setPair]
  )

  const next = useCallback(
    (n) => {
      setPair(pair + (n ? n : 2))
    },
    [pair, setPair]
  )

  const restore = useCallback(() => {
    const checkpoint = localStorage.getItem('checkpoint')
    if (checkpoint) setPair(parseInt(checkpoint))
  }, [setPair])

  const save = useCallback(() => {
    localStorage.setItem('checkpoint', pair)
  }, [pair])

  const restart = useCallback(() => {
    setPair(2)
  }, [setPair])

  const handleKeyPress = useCallback(
    (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          if (event.shiftKey) return prev(1)
          prev()
          break
        case 'ArrowRight':
          if (event.shiftKey) return next(1)
          next()
          break
        case 's':
          save()
          break
        case 'r':
          restore()
          break
        case 'a':
          restart()
          break
        default:
      }
    },
    [prev, next, save, restore, restart]
  )

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress)

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  return (
    <div className="mx-10 text-center select-none">
      <div onClick={() => next(1)} className="text-[150px] cursor-pointer">
        {getPair(pair)}
      </div>
      <div className="flex flex-row">
        <div
          onClick={() => prev()}
          className="grow text-[96px] text-gray-300 cursor-pointer"
        >
          {getPair(pair - 2)}
        </div>
        <div
          onClick={() => next()}
          className="grow text-[96px] text-gray-300 cursor-pointer"
        >
          {getPair(pair + 2)}
        </div>
      </div>
      <div className="flex flex-row justify-around mt-10 text-5xl">
        <div onClick={restore} className="p-2 cursor-pointer">
          ⏪
        </div>
        <div onClick={restart} className="p-2 cursor-pointer">
          ▶️
        </div>
        <div onClick={save} className="p-2 cursor-pointer">
          📍
        </div>
      </div>
    </div>
  )
}

export default Learn
