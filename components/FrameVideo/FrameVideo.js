import styles from "./FrameVideo.module.css";

export default function FrameVideo({ source, onclick }) {
  return (
    <div onClick={onclick} className={styles.container}>
      <img src="/icons/close.svg" alt="icone close" />
      <iframe
        id="ytplayer"
        type="text/html"
        width="80%"
        height="85%"
        src={`https://www.youtube.com/embed/${source}?autoplay=1`}
        frameBorder="0"
        allowFullScreen="1"
      />
    </div>
  );
}
