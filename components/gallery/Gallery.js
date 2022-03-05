import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <div className={styles.containerGallery}>
      <span className={styles.title}>Nossas acomodações</span>
      <p>Seu conforto é nossa prioridade</p>

      <div className={styles.containerItem}>
        <div className={styles.item}>
          <div className={styles.contentItem}>
            <img src="/images/room-private.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.contentItem}>
            <img src="/images/room.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.contentItem}>
            <img src="/images/room-private.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.contentItem}>
            <img src="/images/room-meet.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.contentItem}>
            <img src="/images/room-master.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.contentItem}>
            <img src="/images/room-worckshop.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
