import React, { useCallback, useRef } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import vid from "../img/EmiLuVid.mp4";
import './video.css';

export default function Video() {
  const videoRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    videoRef.current.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    videoRef.current.pause();
  }, []);

  return (
    <MDBContainer>
      <video
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={videoRef}
        src={vid}
        type="video/mp4"
        loop
        className="w-100"
      ></video>
    </MDBContainer>
  );
}