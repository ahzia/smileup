import { useRef, useState, useEffect } from "react";
import video1 from "../videos/video1.mp4";

import useIsInViewport from "../hooks/useIsInViewport";
import Sidebar from "./Sidebar";
const VideoCard = ({
    index,
    author,
    videoURL,
    authorImg,
    lastVideoIndex,
    getVideos,
    handleLike,
    handleSave,
    videoId,
    liked,
    saved,
    aiChatOpen,
    setAiChatOpen,
    setAiChatVideoId,
}) => {
    const video = useRef();
    const isInViewport = useIsInViewport(video);
    const [loadNewVidsAt, setloadNewVidsAt] = useState(lastVideoIndex);

    if (isInViewport) {
        setTimeout(() => {
            video.current.play();
        }, 1000);

        // if (loadNewVidsAt === Number(video.current.id)) {
        //   setloadNewVidsAt((prev) => prev + 2);
        //   getVideos(3);
        // }
    }

    const togglePlay = () => {
        let currentVideo = video.current;
        if (currentVideo.paused) {
            currentVideo.play();
        } else {
            currentVideo.pause();
        }
    };

    useEffect(() => {
        if (!isInViewport) {
            video.current.pause();
        }
    }, [isInViewport]);

    return (
        <div className="slider-children h-full">
            {!aiChatOpen && <Sidebar handleLike={handleLike} videoId={videoId} liked={liked} saved={saved} handleSave={handleSave} aiChatOpen={aiChatOpen} setAiChatOpen={setAiChatOpen} setAiChatVideoId={setAiChatVideoId} />}
            <video
                muted
                ref={video}
                onClick={togglePlay}
                id={index}
                autoPlay={index === 1}
                className="video w-full h-full object-cover"
            >
                <source src={videoURL} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoCard;
