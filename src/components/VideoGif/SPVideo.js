import React, { useRef } from 'react'
import spVideoStyle from './spVideo.module.css'

const SPVideo = () => {
  const videoRef = useRef(null);

  // Function to handle closing the modal and stopping the video
  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
      videoRef.current.currentTime = 0; // Reset video to the start
    }
  };
    
  return (
    <div>
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
      </div>
      <div className="modal-body">
        <video ref={videoRef}  controls >
        <source src={`${process.env.PUBLIC_URL}/spVideo.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default SPVideo
