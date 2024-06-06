/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef, useLayoutEffect } from "react";
import styles from "./home.module.css";
import Experience from "@/components/experience/Experience";
import { ReactLenis } from "@studio-freight/react-lenis";
import { RiScrollToBottomLine } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import HorizontalSection from "@/components/horizontalSection/HorizontalSection";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const expRef = useRef();
  useLayoutEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".refClass",
        start: "top bottom",
        end: "top top+200",
        scrub: 2,
        invalidateOnRefresh: false,
      },
    });

    tl1.to(expRef.current, {
      y: 1150,
      x: -1000,
      ease: "power2.out",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".refClass",
        start: "top top",
        end: "+=20000",
        scrub: 0.6,
        invalidateOnRefresh: false,
      },
    });

    tl2.to(expRef.current, {
      x: -20000,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <ReactLenis root>
        <div className={styles.flexCenter}>
          <div className={styles.container}>
            <div className={styles.first_section}>
              <div className={styles.textContainer}>
                <div>
                  <h1 className={styles.title}>Peer Vision 15.</h1>
                  <h2>Titane, Hdr, Reconnaissance faciale</h2>
                </div>
                <p className={styles.desc}>
                  Découvrez le Peer Vision 15, où l'innovation rencontre
                  l'élégance : un téléphone haut de gamme qui redéfinit les
                  standards de performance et de design.
                </p>
                <div className={styles.buttons}>
                  <Link href="/" className={styles.button}>
                    <span>En savoir plus</span>
                  </Link>
                </div>
              </div>
            </div>
            <div ref={expRef} className={styles.phone}>
              <Experience />
            </div>
          </div>
          <div className={styles.icon}>
            <RiScrollToBottomLine size={32} />
          </div>
        </div>
        <div>
          <HorizontalSection />
        </div>
      </ReactLenis>
    </>
  );
};

export default Home;
