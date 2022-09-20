import React from 'react';
import './BgVideo.css';
import Gradient from "../Gradient/Gradient";

const BgVideo = () => {

    return (
        <div className={'BgVideo'}>
            {/*для платного перехода между видео и далее блоками*/}
            <Gradient />
            <video className={'video-bg'} autoPlay playsInline muted loop>
                <source src="/video/video-bg.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default BgVideo;