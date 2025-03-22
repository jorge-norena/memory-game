import { useEffect, useRef} from 'react'

export default function Sound( {src, play}) {
    const audioRef = useRef(null);

    useEffect(() => {
      if (play && audioRef.current) {
        audioRef.current.play();
      }
      console.log('Reproduce')
    }, [play]);
  
    return <audio ref={audioRef} src={src} preload="auto" />;
}
