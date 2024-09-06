import React from 'react'
import spVideoStyle from './spVideo.module.css'

const SPVideo = () => {
    
  return (
    <div>
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <video controls >
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
