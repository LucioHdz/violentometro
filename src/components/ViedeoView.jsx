import React from 'react'
import './css/VideoView.css'
const ViedeoView = ({ video }) => {
    return (
        <div className='box VideoView'>
            <iframe className='video' src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default ViedeoView