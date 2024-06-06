import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./horizontal.module.css";

const HorizontalSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pinAnimation = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-262.5vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      // Fonction de nettoyage pour arrêter l'animation lors du démontage du composant
      pinAnimation.kill();
    };
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div ref={triggerRef}>
        <section ref={sectionRef} className={`${"refClass"} ${styles.section}`}>
          <div className={styles.gallery}>
            <div className={styles.box}>
              <div className={styles.photoContainer}>
                <Image
                  src="/daniel.jpg"
                  width={1000}
                  height={1000}
                  alt="Photo de l'auteur"
                />
                <Image
                  src="/omid.jpg"
                  width={1000}
                  height={1000}
                  alt="Photo de l'auteur"
                />
              </div>
              <div className={styles.videoContainer}>
                <video autoPlay loop muted>
                  <source src="smartphone.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className={styles.gallery_second}>
            <h2>Puce A17 Pro. Géante pour le gaming.</h2>
            <h4>
              Découvrez la métamorphose la plus spectaculaire de l’histoire des
              processeurs graphiques Peer.
            </h4>
            <div className={styles.phoneGame}>
              <Image
                src="/bord.png"
                width={1054}
                height={516}
                alt="bord iphone"
                className={styles.bordIphone}
              />
              <video className={styles.largeVideo} autoPlay loop muted>
                <source src="large.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <h4>Honkai: Star Rail</h4>
            </div>
          </div>
          <div className={styles.gallery_third}>
            <h2>Des photos surréalistes. Et plus vraies que nature.</h2>
            <h4>
              De l’extrême flexibilité du cadrage aux portraits nouvelle
              génération, découvrez toutes les possibilités créatives que vous
              offre le système photo le plus puissant sur iPhone.
            </h4>
            <Image
              src="/iguane.jpg"
              width={750}
              height={500}
              alt="Photo de l'auteur"
            />
            <h4>
              Un iguane vert, photographié par l’appareil photo principal 48 Mpx
            </h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalSection;
