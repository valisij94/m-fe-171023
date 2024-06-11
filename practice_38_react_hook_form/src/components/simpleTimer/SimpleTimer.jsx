import { useEffect } from "react";
import { useState } from "react";

export default function SimpleTimer() {

  const [time, setTime] = useState(new Date().toISOString());

  useEffect( () => {
    const interval = setInterval( () => {
      setTime(new Date().toISOString());
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <h2>{time}</h2>
  )
}