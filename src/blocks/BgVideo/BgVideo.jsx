import React, {useRef} from 'react';
import './BgVideo.css';
import Gradient from "../Gradient/Gradient";

const BgVideo = () => {

    const videoRef = useRef()
    // console.log(videoRef.current['duration'])

    return (
        <div className={'BgVideo'}>
            {/*для платного перехода между видео и далее блоками*/}
            <Gradient />
            <video ref={videoRef} className={'video-bg'} autoPlay playsInline muted >
                <source src="/video/video-bg.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default BgVideo;