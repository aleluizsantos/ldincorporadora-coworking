const VideoYoutube = ({ urlVideoYoutube }) => {
  if (!urlVideoYoutube) return null;

  // Extrai o ID do vídeo
  const videoId = urlVideoYoutube.split("v=")[1]?.split("&")[0];

  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      ></iframe>
    </div>
  );
};

export default VideoYoutube;
