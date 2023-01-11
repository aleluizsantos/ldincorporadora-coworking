import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FrameVideo from "../FrameVideo/FrameVideo";
import Image from "next/image";
import styles from "./news.module.css";
import imgNews from "/public/images/news.jpg";
import { dataEnterprise } from "../data/sourceData";

export default function News() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);

  useEffect(() => {
    (async () => {
      const popUp = sessionStorage.getItem("open-pop-up");
      await initialNews(popUp);
    })();
  }, []);

  async function initialNews(dataPopUp) {
    // Verificar se open-pop-up esta com TRUE
    const hasOpenNews = dataPopUp ? true : false;
    if (!hasOpenNews) {
      sessionStorage.setItem("open-pop-up", true);
      setOpen(true);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  function gotoAllotment() {
    const allotment = dataEnterprise.find((item) => item.id === 1);
    const convertStringItemPage = JSON.stringify(allotment);
    router.push({
      pathname: "/description",
      query: { itemPage: convertStringItemPage },
    });
  }

  function handleOpenVideo() {
    setOpenVideo(!openVideo);
  }

  return open ? (
    <div className={styles.container}>
      {openVideo && <FrameVideo source="XWczmTYL5rE" onclick={gotoAllotment} />}
      <div className={styles.content}>
        <div onClick={handleOpenVideo} className={styles.router} />
        <div onClick={handleClose} className={styles.close}>
          <Image
            src="/icons/close.svg"
            alt="icone close"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.imgNews}>
          <Image src={imgNews} alt="Novidade LD" objectFit="contain" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
