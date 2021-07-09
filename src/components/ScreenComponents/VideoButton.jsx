import React, { useContext } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import ScreenContext from '../../contexts/ScreenContext';
import Modal from './Modal';
import valdPic from '../../pictures/vald_pic.png';
import valdClip from '../../pictures/vald_clip.mp4';
import './VideoButton.scss';

function VideoButton() {
  const { play, setPlay } = useContext(ScreenContext);
  return (
    <>
      <button
        className="preview-player"
        type="button"
        onClick={() => setPlay(!play)}
      >
        <HoverVideoPlayer
          videoSrc={valdClip}
          pausedOverlay={(
            <img
              src={valdPic}
              alt=""
              style={{
              // Make the image expand to cover the video's dimensions
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
        )}
          loadingOverlay={
            <div className="loading-spinner-overlay" />
        }
        />
      </button>
      { play === true && (
        <>
          <Modal />
        </>
      )}
    </>
  );
}

export default VideoButton;
