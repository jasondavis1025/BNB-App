import React from 'react'

const Footer = (props) => {
  return (
    <div className='footer'>
        <p>Keep in Touch</p>
        <div className="footerMediaList">
            {props.socialMedia.map((item) => {
                return <div id={item.id} className='footerMediaItem'>{item.media + " |"}</div>
            })}
        </div>
        
    </div>
  )
}

export default Footer