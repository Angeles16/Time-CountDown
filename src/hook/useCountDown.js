import React, { useEffect, useRef, useState } from 'react'

export default function useCountDown({seconds, setTimeExpire}) {
    const [countDown, setCountDown] = useState(seconds);
    const timerId = useRef()

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountDown( old => old - 1);
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
      if (countDown <= 0){
        setTimeExpire(true)
        clearInterval(timerId.current)
      }
    }, [countDown])

  return {
    countDown
  }
}

