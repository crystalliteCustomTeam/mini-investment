const Video = () => {
  return (
    <div className="bg-[#131313]">
      <video loop autoPlay muted playsInline aria-label="Video Player" className="w-full h-full">
        <source src="https://player.vimeo.com/progressive_redirect/playback/988657288/rendition/1080p/file.mp4?loc=external&log_user=0&signature=860cbe5b4b111cf66e7162fc3be6f08beac5c2136bfa4cd1798662fbcd1b58d1" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;