const VideoBackGround = ({ trailer, poster }) => {
  if (!trailer) return null;

  const videoId = trailer.split("v=")[1]?.split("&")[0];

  const embedUrl = `https://www.youtube.com/embed/${videoId}
  ?autoplay=1
  &mute=1
  &controls=0
  &loop=1
  &modestbranding=1
  &playlist=${videoId}`;

  const posterUrl = poster ? `https://${poster}` : null;

  return (
    <div
      className="w-full overflow-hidden relative aspect-video bg-cover bg-center"
      style={{ backgroundImage: posterUrl ? `url(${posterUrl})` : "none" }}
    >
      <iframe
        className="w-full h-full object-cover scale-[1.5] -translate-y-1/4"
        src={embedUrl}
        title="Movie Trailer Background"
        allow="autoplay; encrypted-media;"
        loading="eager"
        allowFullScreen
      ></iframe>

      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  );
};

export default VideoBackGround;
