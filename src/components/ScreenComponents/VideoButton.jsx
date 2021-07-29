import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Modal from './Modal';
import './VideoButton.scss';

function VideoButton({ videoSrc, imgSrc, recoVideo }) {
  return (
    <Modal
      buttonClassName="preview-player"
      buttonContent={(
        <HoverVideoPlayer
          videoSrc={videoSrc}
          volume={0}
          muted={false}
          pausedOverlay={(
            <img
              src={imgSrc}
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
    )}
    >
      <ReactPlayer className="player" url={recoVideo} playing volume="0.5" />
    </Modal>
  );
}

VideoButton.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  recoVideo: PropTypes.string.isRequired,
};

export default VideoButton;
