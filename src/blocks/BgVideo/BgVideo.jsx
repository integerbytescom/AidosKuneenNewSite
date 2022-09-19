import React from 'react';
import './BgVideo.css';

const BgVideo = () => {
    return (
        <div className={'BgVideo'}>
            <video className={'video-bg'} autoPlay playsInline muted loop>
                <source src="/video/video-bg.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default BgVideo;