import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Identity from "../pages/Identity";
import Personal from "../pages/Personal";
import Missions from "../pages/Missions";
import Contact from "./Contact";


/* =========================================================
   RENDER HALAMAN SEBELUMNYA
========================================================= */

function renderPage(path) {
  switch (path) {
    case "/":
      return <Home />;

    case "/identity":
      return <Identity />;

    case "/personal":
      return <Personal />;

    case "/missions":
      return <Missions />;

    case "/contact":
      return <Contact />;

    default:
      return null;
  }
}


export default function PageTransition() {
  const location = useLocation();


  /* =========================================================
     HOME — FIRST LOAD INTRO
  ========================================================= */

  const [showIntro, setShowIntro] = useState(
    location.pathname === "/"
  );


  /* =========================================================
     ROUTE TRANSITION
  ========================================================= */

  const [transition, setTransition] = useState(null);


  const previousPath = useRef(
    location.pathname
  );


  const firstRender = useRef(true);


  /* =========================================================
     RESET SCROLL

     Setiap halaman baru selalu dimulai dari posisi paling atas.
  ========================================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);


  /* =========================================================
     MATIKAN INTRO KETIKA MENINGGALKAN HOME
  ========================================================= */

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowIntro(false);
    }
  }, [location.pathname]);


  /* =========================================================
     FIRST LOAD HOME INTRO TIMER

     HANYA bekerja ketika intro memang aktif.

     Saat kembali ke Home melalui navigasi:
     showIntro tetap false.
  ========================================================= */

  useEffect(() => {
    if (!showIntro || location.pathname !== "/") {
      return;
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, [showIntro, location.pathname]);


  /* =========================================================
     DETEKSI ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      previousPath.current = location.pathname;
      return;
    }


    const previous = previousPath.current;
    const current = location.pathname;


    if (previous === current) {
      return;
    }


    /* =======================================================
       ANY PAGE → HOME

       WEB PULL / WEB SNAP

       Ini BUKAN landing intro.

       Halaman sebelumnya ditarik dengan web menuju
       pojok kanan atas, kemudian Home di belakangnya
       menjadi terlihat.

       Durasi: 1350ms
    ======================================================= */

    if (current === "/") {
      setTransition({
        type: "home",
        from: previous,
      });


      const timer = setTimeout(() => {
        setTransition(null);
      }, 1350);


      previousPath.current = current;


      return () => clearTimeout(timer);
    }


    /* =======================================================
       ANY PAGE → IDENTITY

       Comic page turn.
       Durasi: 1400ms
    ======================================================= */

    if (current === "/identity") {
      setTransition({
        type: "identity",
        from: previous,
      });


      const timer = setTimeout(() => {
        setTransition(null);
      }, 1400);


      previousPath.current = current;


      return () => clearTimeout(timer);
    }


    /* =======================================================
       ANY PAGE → PERSONAL

       Bamboo curtain.
       Durasi: 1500ms
    ======================================================= */

    if (current === "/personal") {
      setTransition({
        type: "personal",
        from: previous,
      });


      const timer = setTimeout(() => {
        setTransition(null);
      }, 1500);


      previousPath.current = current;


      return () => clearTimeout(timer);
    }


    /* =======================================================
       ANY PAGE → MISSIONS

       Crumpled paper.
       Durasi: 1350ms
    ======================================================= */

    if (current === "/missions") {
      setTransition({
        type: "missions",
        from: previous,
      });


      const timer = setTimeout(() => {
        setTransition(null);
      }, 1350);


      previousPath.current = current;


      return () => clearTimeout(timer);
    }


    /* =======================================================
       ANY PAGE → CONTACT

       Spider Tracker.
       Durasi: 1750ms
    ======================================================= */

    if (current === "/contact") {
      setTransition({
        type: "contact",
        from: previous,
      });


      const timer = setTimeout(() => {
        setTransition(null);
      }, 1750);


      previousPath.current = current;


      return () => clearTimeout(timer);
    }


    /* =======================================================
       ROUTE LAIN
    ======================================================= */

    previousPath.current = current;

  }, [location.pathname]);


  /* =========================================================
     TIDAK ADA TRANSISI
  ========================================================= */

  if (!showIntro && !transition) {
    return null;
  }


  return (
    <>
      <style>
        {`

        /* =====================================================
           =====================================================
           HOME — WEB PULL / WEB SNAP
           =====================================================
        */


        @keyframes homePagePull {

          0% {
            transform:
              translate3d(0, 0, 0)
              scale(1)
              rotate(0deg);

            opacity: 1;

            filter:
              brightness(1);
          }

          18% {

            transform:
              translate3d(0, 0, 0)
              scale(0.995)
              rotate(0deg);

            opacity: 1;

            filter:
              brightness(1.03);
          }

          42% {

            transform:
              translate3d(4%, -3%, 0)
              scale(0.97)
              rotate(-0.7deg);

            opacity: 0.98;

            filter:
              brightness(1.05);
          }

          64% {

            transform:
              translate3d(14%, -10%, 0)
              scale(0.91)
              rotate(-2deg);

            opacity: 0.84;

            filter:
              brightness(1.08);
          }

          82% {

            transform:
              translate3d(30%, -23%, 0)
              scale(0.78)
              rotate(-4deg);

            opacity: 0.46;

            filter:
              brightness(1.12);
          }

          94% {

            transform:
              translate3d(50%, -39%, 0)
              scale(0.58)
              rotate(-6deg);

            opacity: 0.16;

            filter:
              brightness(1.2);
          }

          100% {

            transform:
              translate3d(72%, -58%, 0)
              scale(0.38)
              rotate(-9deg);

            opacity: 0;

            filter:
              brightness(1.3);
          }

        }


        @keyframes homeShadowPull {

          0% {
            transform:
              translate3d(0, 0, 0)
              scale(1);

            opacity: 0;
          }

          25% {
            opacity: 0.15;
          }

          55% {

            transform:
              translate3d(8%, -5%, 0)
              scale(0.95);

            opacity: 0.25;
          }

          80% {

            transform:
              translate3d(25%, -18%, 0)
              scale(0.8);

            opacity: 0.18;
          }

          100% {

            transform:
              translate3d(65%, -52%, 0)
              scale(0.4);

            opacity: 0;
          }

        }


        @keyframes webShootHome {

          0% {

            transform:
              translate3d(-10%, 15%, 0)
              scaleX(0.05)
              rotate(-23deg);

            opacity: 0;
          }

          12% {

            transform:
              translate3d(0, 0, 0)
              scaleX(0.25)
              rotate(-23deg);

            opacity: 1;
          }

          35% {

            transform:
              translate3d(12%, -8%, 0)
              scaleX(0.65)
              rotate(-23deg);

            opacity: 1;
          }

          58% {

            transform:
              translate3d(28%, -20%, 0)
              scaleX(1)
              rotate(-23deg);

            opacity: 1;
          }

          78% {

            transform:
              translate3d(45%, -34%, 0)
              scaleX(1.08)
              rotate(-23deg);

            opacity: 0.75;
          }

          100% {

            transform:
              translate3d(67%, -52%, 0)
              scaleX(1.15)
              rotate(-23deg);

            opacity: 0;
          }

        }


        @keyframes webAnchorHome {

          0% {

            transform:
              translate(-50%, -50%)
              scale(0);

            opacity: 0;
          }

          18% {

            transform:
              translate(-50%, -50%)
              scale(0.8);

            opacity: 1;
          }

          42% {

            transform:
              translate(-50%, -50%)
              scale(1);

            opacity: 1;
          }

          72% {

            transform:
              translate(-50%, -50%)
              scale(1.08);

            opacity: 0.8;
          }

          100% {

            transform:
              translate(-50%, -50%)
              scale(1.35);

            opacity: 0;
          }

        }


        @keyframes webBurstHome {

          0% {

            transform:
              translate(-50%, -50%)
              scale(0)
              rotate(0deg);

            opacity: 0;
          }

          18% {

            transform:
              translate(-50%, -50%)
              scale(0.35)
              rotate(10deg);

            opacity: 0.9;
          }

          45% {

            transform:
              translate(-50%, -50%)
              scale(0.8)
              rotate(25deg);

            opacity: 0.75;
          }

          72% {

            transform:
              translate(-50%, -50%)
              scale(1.3)
              rotate(50deg);

            opacity: 0.3;
          }

          100% {

            transform:
              translate(-50%, -50%)
              scale(1.8)
              rotate(80deg);

            opacity: 0;
          }

        }


        @keyframes webLineHome {

          0% {

            transform:
              scaleX(0);

            opacity: 0;
          }

          16% {

            transform:
              scaleX(1);

            opacity: 0.95;
          }

          65% {

            transform:
              scaleX(1);

            opacity: 0.65;
          }

          100% {

            transform:
              scaleX(0.3);

            opacity: 0;
          }

        }


        @keyframes homeFlash {

          0% {
            opacity: 0;
          }

          70% {
            opacity: 0;
          }

          78% {
            opacity: 0.75;
          }

          88% {
            opacity: 0;
          }

          100% {
            opacity: 0;
          }

        }


        @keyframes homeWebTexture {

          0% {

            transform:
              translate(-50%, -50%)
              scale(0.3)
              rotate(0deg);

            opacity: 0;
          }

          20% {

            transform:
              translate(-50%, -50%)
              scale(0.55)
              rotate(-4deg);

            opacity: 0.2;
          }

          55% {

            transform:
              translate(-50%, -50%)
              scale(1)
              rotate(-10deg);

            opacity: 0.35;
          }

          80% {

            transform:
              translate(-50%, -50%)
              scale(1.25)
              rotate(-15deg);

            opacity: 0.22;
          }

          100% {

            transform:
              translate(-50%, -50%)
              scale(1.5)
              rotate(-20deg);

            opacity: 0;
          }

        }


        /* =====================================================
           =====================================================
           LANDING INTRO
           =====================================================
        */


        @keyframes introBg {

          0% {
            opacity: 1;
          }

          72% {
            opacity: 1;
          }

          100% {
            opacity: 0;
          }

        }


        @keyframes spiderEnter {

          0% {
            opacity: 0;

            transform:
              translate3d(180px, 120px, 0)
              scale(0.72)
              rotate(7deg);
          }

          18% {
            opacity: 1;
          }

          45% {
            transform:
              translate3d(25px, 10px, 0)
              scale(0.92)
              rotate(2deg);
          }

          62% {
            transform:
              translate3d(0, 0, 0)
              scale(1)
              rotate(0deg);
          }

          100% {
            opacity: 0;

            transform:
              translate3d(-30px, -20px, 0)
              scale(1.04);
          }

        }


        @keyframes webShot {

          0% {
            opacity: 0;

            transform:
              translateY(-50%)
              rotate(-38deg)
              scaleX(0.02);
          }

          20% {
            opacity: 1;
          }

          55% {
            opacity: 1;

            transform:
              translateY(-50%)
              rotate(-38deg)
              scaleX(1);
          }

          78% {
            opacity: 0.9;

            transform:
              translateY(-50%)
              rotate(-38deg)
              scaleX(1.05);
          }

          100% {
            opacity: 0;

            transform:
              translateY(-50%)
              rotate(-38deg)
              scaleX(1.12);
          }

        }


        @keyframes webExpand {

          0% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scale(0.06);
          }

          15% {
            opacity: 0.12;
          }

          35% {
            opacity: 0.42;

            transform:
              translate(-50%, -50%)
              scale(0.42);
          }

          55% {
            opacity: 0.75;

            transform:
              translate(-50%, -50%)
              scale(0.85);
          }

          72% {
            opacity: 0.95;

            transform:
              translate(-50%, -50%)
              scale(1.25);
          }

          87% {
            opacity: 1;

            transform:
              translate(-50%, -50%)
              scale(1.65);
          }

          100% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scale(2.15);
          }

        }


        /* =====================================================
           =====================================================
           IDENTITY — COMIC PAGE TURN
           =====================================================
        */


        @keyframes identityPaper {

          0% {

            clip-path:
              polygon(
                0 0,
                100% 0,
                100% 100%,
                0 100%
              );

            transform:
              translate3d(0, 0, 0)
              rotate(0deg)
              scale(1);

            opacity: 1;
          }


          18% {

            clip-path:
              polygon(
                0 0,
                100% 0,
                100% 100%,
                52% 100%,
                0 76%
              );

            transform:
              translate3d(-0.5%, -0.5%, 0)
              rotate(-0.15deg)
              scale(1.002);

            opacity: 1;
          }


          38% {

            clip-path:
              polygon(
                0 0,
                100% 0,
                100% 76%,
                81% 72%,
                58% 83%,
                30% 96%,
                0 100%
              );

            transform:
              translate3d(-2%, -1.5%, 0)
              rotate(-0.5deg)
              scale(1.008);

            opacity: 1;
          }


          58% {

            clip-path:
              polygon(
                0 0,
                100% 0,
                100% 46%,
                88% 49%,
                71% 63%,
                51% 79%,
                29% 92%,
                0 100%
              );

            transform:
              translate3d(-5%, -3.5%, 0)
              rotate(-0.9deg)
              scale(1.02);

            opacity: 0.96;
          }


          76% {

            clip-path:
              polygon(
                0 0,
                100% 0,
                100% 20%,
                92% 25%,
                76% 39%,
                58% 56%,
                36% 76%,
                12% 93%,
                0 100%
              );

            transform:
              translate3d(-12%, -8%, 0)
              rotate(-1.8deg)
              scale(1.045);

            opacity: 0.75;
          }


          90% {

            clip-path:
              polygon(
                0 0,
                100% 0,
                100% 5%,
                83% 15%,
                61% 32%,
                39% 54%,
                18% 77%,
                0 94%
              );

            transform:
              translate3d(-21%, -15%, 0)
              rotate(-3deg)
              scale(1.08);

            opacity: 0.3;
          }


          100% {

            clip-path:
              polygon(
                0 0,
                100% 0,
                100% 0,
                75% 8%,
                48% 27%,
                25% 50%,
                7% 74%,
                0 90%
              );

            transform:
              translate3d(-31%, -23%, 0)
              rotate(-4deg)
              scale(1.11);

            opacity: 0;
          }

        }


        @keyframes identityFold {

          0% {

            transform:
              translate3d(0, 0, 0)
              rotate(0deg)
              scale(1);

            opacity: 0;
          }

          20% {
            opacity: 0.12;
          }

          40% {

            opacity: 0.28;

            transform:
              translate3d(-1.5%, -1%, 0)
              rotate(-1.5deg)
              scale(1.008);
          }

          60% {

            opacity: 0.42;

            transform:
              translate3d(-5%, -3.5%, 0)
              rotate(-3.5deg)
              scale(1.025);
          }

          80% {

            opacity: 0.28;

            transform:
              translate3d(-12%, -8%, 0)
              rotate(-6deg)
              scale(1.05);
          }

          100% {

            opacity: 0;

            transform:
              translate3d(-30%, -22%, 0)
              rotate(-9deg)
              scale(1.1);
          }

        }


        @keyframes identityPaperShadow {

          0% {

            opacity: 0.08;

            transform:
              translate(0, 0)
              scale(1);
          }

          30% {
            opacity: 0.15;
          }

          55% {

            opacity: 0.25;

            transform:
              translate(-2%, -1.5%)
              scale(1.015);
          }

          80% {

            opacity: 0.16;

            transform:
              translate(-9%, -6%)
              scale(1.045);
          }

          100% {

            opacity: 0;

            transform:
              translate(-28%, -20%)
              scale(1.1);
          }

        }


        @keyframes paperHighlight {

          0% {

            opacity: 0;

            transform:
              translateX(100%)
              skewX(-14deg);
          }

          25% {
            opacity: 0.1;
          }

          55% {
            opacity: 0.17;
          }

          100% {

            opacity: 0;

            transform:
              translateX(-100%)
              skewX(-14deg);
          }

        }


        @keyframes comicLine {

          0% {

            transform:
              scaleX(0);

            opacity: 0;
          }

          20% {

            transform:
              scaleX(1);

            opacity: 0.8;
          }

          65% {

            transform:
              scaleX(1);

            opacity: 0.55;
          }

          100% {

            transform:
              scaleX(0);

            opacity: 0;
          }

        }


        /* =====================================================
           =====================================================
           PERSONAL — BAMBOO CURTAIN
           =====================================================
        */


        @keyframes bambooRoll {

          0% {
            clip-path:
              inset(0 0 0 0);

            transform:
              translateY(0);

            opacity: 1;
          }

          15% {
            clip-path:
              inset(0 0 8% 0);

            transform:
              translateY(-2%);

            opacity: 1;
          }

          30% {
            clip-path:
              inset(0 0 22% 0);

            transform:
              translateY(-5%);

            opacity: 1;
          }

          48% {
            clip-path:
              inset(0 0 43% 0);

            transform:
              translateY(-9%);

            opacity: 1;
          }

          65% {
            clip-path:
              inset(0 0 64% 0);

            transform:
              translateY(-14%);

            opacity: 0.98;
          }

          80% {
            clip-path:
              inset(0 0 81% 0);

            transform:
              translateY(-19%);

            opacity: 0.9;
          }

          92% {
            clip-path:
              inset(0 0 93% 0);

            transform:
              translateY(-23%);

            opacity: 0.65;
          }

          100% {
            clip-path:
              inset(0 0 100% 0);

            transform:
              translateY(-27%);

            opacity: 0;
          }

        }


        @keyframes bambooRoller {

          0% {
            transform:
              translateY(0)
              scaleX(1);

            opacity: 1;
          }

          20% {
            transform:
              translateY(-3%)
              scaleX(1.005);

            opacity: 1;
          }

          45% {
            transform:
              translateY(-11%)
              scaleX(1.01);

            opacity: 1;
          }

          70% {
            transform:
              translateY(-21%)
              scaleX(1.015);

            opacity: 1;
          }

          88% {
            transform:
              translateY(-30%)
              scaleX(1.02);

            opacity: 1;
          }

          100% {
            transform:
              translateY(-38%)
              scaleX(1.025);

            opacity: 0;
          }

        }


        @keyframes bambooEdge {

          0% {
            transform:
              translateY(0)
              scaleX(1);

            opacity: 1;
          }

          25% {
            transform:
              translateY(-7%)
              scaleX(1.01);

            opacity: 1;
          }

          50% {
            transform:
              translateY(-18%)
              scaleX(1.015);

            opacity: 1;
          }

          75% {
            transform:
              translateY(-32%)
              scaleX(1.02);

            opacity: 0.85;
          }

          100% {
            transform:
              translateY(-48%)
              scaleX(1.03);

            opacity: 0;
          }

        }


        @keyframes bambooShadow {

          0% {
            opacity: 0.2;

            transform:
              translateY(0)
              scaleY(1);
          }

          30% {
            opacity: 0.24;
          }

          60% {
            opacity: 0.15;

            transform:
              translateY(-16%)
              scaleY(0.85);
          }

          100% {
            opacity: 0;

            transform:
              translateY(-38%)
              scaleY(0.65);
          }

        }


        @keyframes bambooLight {

          0% {
            transform:
              translateY(0);

            opacity: 0.1;
          }

          50% {
            transform:
              translateY(-17%);

            opacity: 0.16;
          }

          100% {
            transform:
              translateY(-40%);

            opacity: 0;
          }

        }


        /* =====================================================
           =====================================================
           MISSIONS — CRUMPLED PAPER
           =====================================================
        */


        @keyframes crumplePaper {

          0% {

            transform:
              perspective(1400px)
              translate3d(0, 0, 0)
              rotateX(0deg)
              rotateY(0deg)
              rotateZ(0deg)
              scale(1);

            border-radius:
              0;

            clip-path:
              polygon(
                0 0,
                100% 0,
                100% 100%,
                0 100%
              );

            opacity:
              1;
          }

          15% {

            transform:
              perspective(1400px)
              translate3d(0, 0, 0)
              rotateX(2deg)
              rotateY(-3deg)
              rotateZ(-1deg)
              scale(0.985);

            border-radius:
              1% 2% 1% 3%;

            clip-path:
              polygon(
                0 2%,
                97% 0,
                100% 96%,
                3% 100%
              );

            opacity:
              1;
          }

          30% {

            transform:
              perspective(1400px)
              translate3d(-1%, -1%, 0)
              rotateX(-5deg)
              rotateY(6deg)
              rotateZ(2deg)
              scale(0.91)
              skewX(-1deg);

            border-radius:
              5% 2% 7% 3%;

            clip-path:
              polygon(
                5% 8%,
                93% 2%,
                97% 90%,
                8% 96%
              );

            opacity:
              0.98;
          }

          45% {

            transform:
              perspective(1200px)
              translate3d(1%, -1%, 0)
              rotateX(8deg)
              rotateY(-10deg)
              rotateZ(-4deg)
              scale(0.76)
              skewX(2deg);

            border-radius:
              11% 6% 13% 8%;

            clip-path:
              polygon(
                14% 12%,
                85% 8%,
                91% 82%,
                16% 90%
              );

            opacity:
              0.96;
          }

          60% {

            transform:
              perspective(1000px)
              translate3d(-1%, 1%, 0)
              rotateX(-13deg)
              rotateY(15deg)
              rotateZ(7deg)
              scale(0.59)
              skewX(-4deg);

            border-radius:
              18% 13% 20% 15%;

            clip-path:
              polygon(
                21% 20%,
                78% 15%,
                84% 75%,
                22% 82%
              );

            opacity:
              0.9;
          }

          75% {

            transform:
              perspective(800px)
              translate3d(2%, -1%, 0)
              rotateX(18deg)
              rotateY(-20deg)
              rotateZ(-11deg)
              scale(0.42)
              skewX(6deg);

            border-radius:
              25% 20% 28% 22%;

            clip-path:
              polygon(
                28% 27%,
                72% 22%,
                77% 68%,
                28% 74%
              );

            opacity:
              0.75;
          }

          88% {

            transform:
              perspective(650px)
              translate3d(-1%, 1%, 0)
              rotateX(-25deg)
              rotateY(27deg)
              rotateZ(15deg)
              scale(0.23)
              skewX(-8deg);

            border-radius:
              35% 30% 40% 33%;

            clip-path:
              polygon(
                35% 34%,
                66% 31%,
                70% 61%,
                35% 65%
              );

            opacity:
              0.4;
          }

          100% {

            transform:
              perspective(500px)
              translate3d(0, 0, 0)
              rotateX(30deg)
              rotateY(-30deg)
              rotateZ(-20deg)
              scale(0.035);

            border-radius:
              48%;

            clip-path:
              circle(50% at 50% 50%);

            opacity:
              0;
          }

        }


        @keyframes crumpleShadow {

          0% {
            transform:
              translate3d(0, 0, 0)
              scale(1);

            opacity:
              0.08;

            filter:
              blur(0px);
          }

          25% {
            transform:
              translate3d(1%, 2%, 0)
              scale(0.9);

            opacity:
              0.14;

            filter:
              blur(3px);
          }

          50% {
            transform:
              translate3d(-1%, 1%, 0)
              scale(0.68);

            opacity:
              0.2;

            filter:
              blur(6px);
          }

          75% {
            transform:
              translate3d(1%, 0, 0)
              scale(0.43);

            opacity:
              0.25;

            filter:
              blur(10px);
          }

          100% {
            transform:
              translate3d(0, 0, 0)
              scale(0.08);

            opacity:
              0;

            filter:
              blur(14px);
          }

        }


        @keyframes creaseHorizontal {

          0% {
            transform:
              translateX(0)
              scaleX(1)
              rotate(0deg);

            opacity:
              0;
          }

          20% {
            opacity:
              0.15;
          }

          45% {
            transform:
              translateX(-4%)
              scaleX(0.82)
              rotate(2deg);

            opacity:
              0.25;
          }

          70% {
            transform:
              translateX(7%)
              scaleX(0.45)
              rotate(-4deg);

            opacity:
              0.3;
          }

          100% {
            transform:
              translateX(0)
              scaleX(0.08)
              rotate(0deg);

            opacity:
              0;
          }

        }


        @keyframes creaseVertical {

          0% {
            transform:
              translateY(0)
              scaleY(1)
              rotate(0deg);

            opacity:
              0;
          }

          20% {
            opacity:
              0.15;
          }

          45% {
            transform:
              translateY(4%)
              scaleY(0.8)
              rotate(-2deg);

            opacity:
              0.25;
          }

          70% {
            transform:
              translateY(-7%)
              scaleY(0.42)
              rotate(4deg);

            opacity:
              0.3;
          }

          100% {
            transform:
              translateY(0)
              scaleY(0.08)
              rotate(0deg);

            opacity:
              0;
          }

        }


        @keyframes crumpleLight {

          0% {
            transform:
              translate(-50%, -50%)
              scale(1)
              rotate(0deg);

            opacity:
              0;
          }

          25% {
            opacity:
              0.08;
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(0.72)
              rotate(12deg);

            opacity:
              0.14;
          }

          75% {
            transform:
              translate(-50%, -50%)
              scale(0.4)
              rotate(-16deg);

            opacity:
              0.12;
          }

          100% {
            transform:
              translate(-50%, -50%)
              scale(0.08)
              rotate(20deg);

            opacity:
              0;
          }

        }


        @keyframes crumpleWrinkle {

          0% {
            transform:
              translate(-50%, -50%)
              scale(0)
              rotate(0deg);

            opacity:
              0;
          }

          30% {
            transform:
              translate(-50%, -50%)
              scale(0.35)
              rotate(-8deg);

            opacity:
              0.12;
          }

          55% {
            transform:
              translate(-50%, -50%)
              scale(0.7)
              rotate(12deg);

            opacity:
              0.2;
          }

          78% {
            transform:
              translate(-50%, -50%)
              scale(1)
              rotate(-15deg);

            opacity:
              0.25;
          }

          100% {
            transform:
              translate(-50%, -50%)
              scale(1.2)
              rotate(20deg);

            opacity:
              0;
          }

        }


        /* =====================================================
           =====================================================
           CONTACT — SPIDY TRACKER
           =====================================================
        */


        @keyframes trackerBackdrop {

          0% {
            opacity: 0;
          }

          12% {
            opacity: 0.96;
          }

          78% {
            opacity: 0.96;
          }

          100% {
            opacity: 0;
          }

        }


        @keyframes trackerInterface {

          0% {
            opacity: 0;
            transform:
              scale(0.82);
          }

          12% {
            opacity: 1;
            transform:
              scale(0.92);
          }

          35% {
            transform:
              scale(1);
          }

          76% {
            opacity: 1;
            transform:
              scale(1);
          }

          100% {
            opacity: 0;
            transform:
              scale(1.06);
          }

        }


        @keyframes trackerRing {

          0% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(0.15)
              rotate(0deg);
          }

          18% {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(0.7)
              rotate(25deg);
          }

          45% {
            opacity: 0.95;
            transform:
              translate(-50%, -50%)
              scale(1)
              rotate(90deg);
          }

          70% {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(1.05)
              rotate(180deg);
          }

          100% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(1.18)
              rotate(270deg);
          }

        }


        @keyframes trackerInnerRing {

          0% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(0.25)
              rotate(0deg);
          }

          20% {
            opacity: 1;
          }

          55% {
            transform:
              translate(-50%, -50%)
              scale(1)
              rotate(-120deg);
          }

          82% {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(1.03)
              rotate(-240deg);
          }

          100% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(1.12)
              rotate(-360deg);
          }

        }


        @keyframes trackerCrosshair {

          0% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(0.2);
          }

          22% {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          72% {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          100% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(1.25);
          }

        }


        @keyframes trackerPulse {

          0% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(0.4);
          }

          35% {
            opacity: 0.8;
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          52% {
            opacity: 0.2;
            transform:
              translate(-50%, -50%)
              scale(1.3);
          }

          68% {
            opacity: 0.8;
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          100% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(1.45);
          }

        }


        @keyframes trackerScan {

          0% {
            transform:
              translateY(-46vh);
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          48% {
            opacity: 1;
          }

          58% {
            opacity: 0.9;
          }

          92% {
            opacity: 1;
          }

          100% {
            transform:
              translateY(46vh);
            opacity: 0;
          }

        }


        @keyframes trackerScanGlow {

          0% {
            opacity: 0;
          }

          15% {
            opacity: 0.8;
          }

          50% {
            opacity: 1;
          }

          85% {
            opacity: 0.8;
          }

          100% {
            opacity: 0;
          }

        }


        @keyframes trackerText {

          0% {
            opacity: 0;
            transform:
              translateY(8px);
          }

          15% {
            opacity: 1;
            transform:
              translateY(0);
          }

          65% {
            opacity: 1;
            transform:
              translateY(0);
          }

          100% {
            opacity: 0;
            transform:
              translateY(-6px);
          }

        }


        @keyframes trackerStatus {

          0%,
          52% {
            opacity: 1;
          }

          53%,
          100% {
            opacity: 0;
          }

        }


        @keyframes trackerAcquired {

          0%,
          53% {
            opacity: 0;
            transform:
              translateY(8px);
          }

          65% {
            opacity: 1;
            transform:
              translateY(0);
          }

          82% {
            opacity: 1;
            transform:
              translateY(0);
          }

          100% {
            opacity: 0;
            transform:
              translateY(-8px);
          }

        }


        @keyframes trackerCorner {

          0%,
          12% {
            opacity: 0;
          }

          20%,
          78% {
            opacity: 0.85;
          }

          100% {
            opacity: 0;
          }

        }


        @keyframes trackerDots {

          0% {
            opacity: 0;
            transform:
              scale(0.4);
          }

          20% {
            opacity: 1;
            transform:
              scale(1);
          }

          70% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform:
              scale(1.2);
          }

        }


        @keyframes trackerFlash {

          0% {
            opacity: 0;
          }

          68% {
            opacity: 0;
          }

          74% {
            opacity: 0.8;
          }

          82% {
            opacity: 0;
          }

          100% {
            opacity: 0;
          }

        }


        @keyframes trackerGrid {

          0% {
            opacity: 0;
            transform:
              scale(1.08);
          }

          18% {
            opacity: 0.18;
            transform:
              scale(1);
          }

          75% {
            opacity: 0.18;
          }

          100% {
            opacity: 0;
            transform:
              scale(0.98);
          }

        }


        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .home-page,
          .home-shadow,
          .home-web,
          .home-anchor,
          .home-burst,
          .home-line,
          .home-flash,
          .home-web-texture,

          .identity-paper,
          .identity-fold,
          .identity-shadow,
          .identity-highlight,
          .identity-line,

          .bamboo-curtain,
          .bamboo-roller,
          .bamboo-edge,
          .bamboo-shadow,
          .bamboo-light,

          .missions-paper,
          .missions-shadow,
          .missions-crease-horizontal,
          .missions-crease-vertical,
          .missions-light,
          .missions-wrinkle,

          .tracker-backdrop,
          .tracker-interface,
          .tracker-ring,
          .tracker-inner-ring,
          .tracker-crosshair,
          .tracker-pulse,
          .tracker-scan,
          .tracker-scan-glow,
          .tracker-text,
          .tracker-status,
          .tracker-acquired,
          .tracker-corner,
          .tracker-dots,
          .tracker-flash,
          .tracker-grid {
            animation-duration:
              1ms !important;
          }

        }

        `}
      </style>


      {/* =========================================================
          =========================================================
          FIRST LOAD HOME — SPIDER-MAN INTRO
          =========================================================
      ========================================================= */}

      {showIntro && location.pathname === "/" && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            pointer-events-none
            overflow-hidden
          "
          aria-hidden="true"
        >

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #071a46 0%, #123b91 45%, #E62429 100%)",

              animation:
                "introBg 2300ms cubic-bezier(0.76,0,0.24,1) forwards",
            }}
          />


          <img
            src="/assets/intro/spiderman-webshot.png"
            alt=""
            className="
              absolute
              w-[300px]
              sm:w-[360px]
              md:w-[430px]
              lg:w-[500px]
              max-w-none
            "
            style={{
              right: "-35px",
              bottom: "-20px",

              zIndex: 20,

              animation:
                "spiderEnter 2300ms cubic-bezier(0.16,1,0.3,1) both",
            }}
          />


          <div
            className="
              absolute
              z-[25]
              origin-left
            "
            style={{
              width:
                "clamp(180px,30vw,420px)",

              height:
                "3px",

              left:
                "88%",

              top:
                "70%",

              background:
                "linear-gradient(90deg,#fff,rgba(255,255,255,.15))",

              boxShadow:
                "0 0 7px rgba(255,255,255,.65)",

              animation:
                "webShot 650ms cubic-bezier(0.16,1,0.3,1) 420ms both",
            }}
          />


          <img
            src="/assets/intro/spider-web.svg"
            alt=""
            className="
              absolute
              left-1/2
              top-1/2
              w-[105vw]
              h-[105vw]
              min-w-[700px]
              min-h-[700px]
              max-w-[1350px]
              max-h-[1350px]
              object-contain
            "
            style={{
              zIndex:
                15,

              filter:
                "invert(1) brightness(1.35)",

              opacity:
                0,

              transformOrigin:
                "88% 70%",

              transform:
                "translate(-50%,-50%) scale(.06)",

              animation:
                "webExpand 1500ms cubic-bezier(0.16,1,0.3,1) 720ms both",
            }}
          />

        </div>
      )}


      {/* =========================================================
          =========================================================
          ANY PAGE → HOME
          WEB PULL / WEB SNAP
          =========================================================
      ========================================================= */}

      {transition?.type === "home" && (
        <div
          className="
            fixed
            inset-0
            z-[120]
            pointer-events-none
            overflow-hidden
          "
          aria-hidden="true"
        >

          {/* =====================================================
              PREVIOUS PAGE SHADOW
          ===================================================== */}

          <div
            className="
              home-shadow
              absolute
              inset-0
              bg-black
              pointer-events-none
            "
            style={{
              animation:
                "homeShadowPull 1350ms cubic-bezier(.16,1,.3,1) both",

              willChange:
                "transform, opacity",
            }}
          />


          {/* =====================================================
              PREVIOUS PAGE

              Halaman yang sedang ditinggalkan ditarik
              menggunakan efek web menuju kanan atas.
          ===================================================== */}

          <div
            className="
              home-page
              absolute
              inset-0
              overflow-hidden
              bg-black
            "
            style={{
              transformOrigin:
                "72% 58%",

              animation:
                "homePagePull 1350ms cubic-bezier(.16,1,.3,1) both",

              willChange:
                "transform, opacity, filter",
            }}
          >

            <div className="absolute inset-0">
              {renderPage(transition.from)}
            </div>


            {/* COMIC DOT TEXTURE */}

            <div
              className="
                absolute
                inset-0
                pointer-events-none
              "
              style={{
                backgroundImage:
                  "radial-gradient(rgba(0,0,0,.08) 0.7px, transparent 0.7px)",

                backgroundSize:
                  "8px 8px",

                opacity:
                  0.08,
              }}
            />

          </div>


          {/* =====================================================
              WEB TEXTURE

              Menggunakan asset web yang sama dengan
              identitas Spider-Man website.
          ===================================================== */}

          <img
            src="/assets/intro/spider-web.svg"
            alt=""
            className="
              home-web-texture
              absolute

              left-1/2
              top-1/2

              w-[85vw]
              h-[85vw]

              min-w-[600px]
              min-h-[600px]

              max-w-[1200px]
              max-h-[1200px]

              object-contain

              pointer-events-none
            "
            style={{
              zIndex:
                15,

              filter:
                "brightness(0) saturate(100%)",

              transform:
                "translate(-50%, -50%)",

              transformOrigin:
                "72% 58%",

              animation:
                "homeWebTexture 1350ms cubic-bezier(.16,1,.3,1) both",
            }}
          />


          {/* =====================================================
              WEB LINE

              Garis utama yang terasa seperti tali web
              sedang menarik halaman.
          ===================================================== */}

          <div
            className="
              home-web
              absolute

              left-[-10%]
              bottom-[26%]

              w-[125%]
              h-[4px]

              bg-black

              origin-left

              pointer-events-none
            "
            style={{
              zIndex:
                25,

              transform:
                "rotate(-23deg)",

              boxShadow:
                "0 0 8px rgba(0,0,0,.45)",

              animation:
                "webShootHome 1150ms cubic-bezier(.16,1,.3,1) both",
            }}
          />


          {/* =====================================================
              SECOND WEB LINE
          ===================================================== */}

          <div
            className="
              home-line
              absolute

              left-[10%]
              bottom-[34%]

              w-[72%]
              h-[2px]

              bg-black/80

              origin-left

              pointer-events-none
            "
            style={{
              zIndex:
                24,

              transform:
                "rotate(-23deg)",

              animation:
                "webLineHome 1050ms cubic-bezier(.16,1,.3,1) 80ms both",
            }}
          />


          {/* =====================================================
              WEB ANCHOR
          ===================================================== */}

          <div
            className="
              home-anchor
              absolute

              left-[73%]
              top-[40%]

              w-12
              h-12

              rounded-full

              border-2
              border-black

              pointer-events-none
            "
            style={{
              zIndex:
                30,

              transform:
                "translate(-50%, -50%)",

              boxShadow:
                "0 0 14px rgba(0,0,0,.55)",

              animation:
                "webAnchorHome 1000ms cubic-bezier(.16,1,.3,1) both",
            }}
          />


          {/* =====================================================
              WEB BURST
          ===================================================== */}

          <div
            className="
              home-burst
              absolute

              left-[73%]
              top-[40%]

              w-[190px]
              h-[190px]

              rounded-full

              border
              border-white/70

              pointer-events-none
            "
            style={{
              zIndex:
                28,

              transform:
                "translate(-50%, -50%)",

              animation:
                "webBurstHome 1150ms cubic-bezier(.16,1,.3,1) 90ms both",
            }}
          />


          {/* =====================================================
              WEB ANCHOR CENTER
          ===================================================== */}

          <div
            className="
              absolute

              left-[73%]
              top-[40%]

              w-3
              h-3

              rounded-full

              bg-black

              pointer-events-none
            "
            style={{
              zIndex:
                32,

              boxShadow:
                "0 0 14px 4px rgba(0,0,0,.55)",

              animation:
                "webAnchorHome 900ms cubic-bezier(.16,1,.3,1) 40ms both",
            }}
          />


          {/* =====================================================
              FINAL SNAP FLASH
          ===================================================== */}

          <div
            className="
              home-flash
              absolute
              inset-0
              bg-white
              pointer-events-none
            "
            style={{
              zIndex:
                40,

              animation:
                "homeFlash 1350ms ease both",
            }}
          />

        </div>
      )}


      {/* =========================================================
          =========================================================
          ANY PAGE → IDENTITY
          =========================================================
      ========================================================= */}

      {transition?.type === "identity" && (
        <div
          className="
            fixed
            inset-0
            z-[120]
            pointer-events-none
            overflow-hidden
          "
          aria-hidden="true"
        >

          <div
            className="
              identity-shadow
              absolute
              inset-0
              bg-black
              pointer-events-none
            "
            style={{
              animation:
                "identityPaperShadow 1400ms cubic-bezier(.22,.8,.25,1) both",
            }}
          />


          <div
            className="
              identity-paper
              absolute
              inset-0
              overflow-hidden
            "
            style={{
              transformOrigin:
                "right bottom",

              animation:
                "identityPaper 1400ms cubic-bezier(.22,.8,.25,1) both",

              willChange:
                "clip-path, transform, opacity",
            }}
          >

            <div className="relative w-full h-full">
              {renderPage(transition.from)}
            </div>


            <div
              className="
                absolute
                inset-0
                pointer-events-none
              "
              style={{
                backgroundImage:
                  "radial-gradient(rgba(0,0,0,.07) 0.7px, transparent 0.7px)",

                backgroundSize:
                  "8px 8px",

                opacity:
                  0.1,
              }}
            />


            <div
              className="
                identity-highlight
                absolute
                top-[-10%]
                bottom-[-10%]
                right-[-30%]
                w-[25%]
                bg-white/25
                pointer-events-none
              "
              style={{
                transform:
                  "skewX(-14deg)",

                animation:
                  "paperHighlight 1100ms ease-out 80ms both",
              }}
            />

          </div>


          <div
            className="
              identity-fold
              absolute
              inset-0
              pointer-events-none
            "
            style={{
              background:
                "linear-gradient(135deg,#D8CDBA,#EEE4D4)",

              border:
                "3px solid #000",

              transformOrigin:
                "right bottom",

              animation:
                "identityFold 1400ms cubic-bezier(.22,.8,.25,1) both",
            }}
          />


          <div
            className="
              identity-line
              absolute
              right-0
              bottom-[18%]
              w-[34%]
              h-[4px]
              bg-[#E62429]
              origin-right
            "
            style={{
              animation:
                "comicLine 700ms cubic-bezier(.22,.8,.25,1) 180ms both",
            }}
          />


          <div
            className="
              identity-line
              absolute
              right-0
              bottom-[21%]
              w-[22%]
              h-[3px]
              bg-[#FFD400]
              origin-right
            "
            style={{
              animation:
                "comicLine 650ms cubic-bezier(.22,.8,.25,1) 220ms both",
            }}
          />

        </div>
      )}


      {/* =========================================================
          =========================================================
          ANY PAGE → PERSONAL
          =========================================================
      ========================================================= */}

      {transition?.type === "personal" && (
        <div
          className="
            fixed
            inset-0
            z-[120]
            pointer-events-none
            overflow-hidden
          "
          aria-hidden="true"
        >

          <div
            className="
              bamboo-shadow
              absolute
              inset-0
              bg-black
              pointer-events-none
            "
            style={{
              animation:
                "bambooShadow 1500ms cubic-bezier(.22,.8,.25,1) both",
            }}
          />


          <div
            className="
              bamboo-curtain
              absolute
              inset-0
              overflow-hidden
            "
            style={{
              animation:
                "bambooRoll 1500ms cubic-bezier(.22,.8,.25,1) both",

              willChange:
                "clip-path, transform, opacity",
            }}
          >

            <div className="absolute inset-0">
              {renderPage(transition.from)}
            </div>


            <div
              className="
                absolute
                inset-0
                pointer-events-none
              "
              style={{
                background:
                  "repeating-linear-gradient(90deg, rgba(92,55,22,.14) 0px, rgba(92,55,22,.14) 2px, rgba(255,240,200,.08) 3px, rgba(255,240,200,.08) 6px)",

                mixBlendMode:
                  "multiply",

                opacity:
                  0.55,
              }}
            />


            <div
              className="
                absolute
                inset-0
                pointer-events-none
              "
              style={{
                background:
                  "repeating-linear-gradient(to bottom, rgba(120,75,32,.55) 0px, rgba(120,75,32,.55) 5px, rgba(255,226,160,.28) 6px, rgba(255,226,160,.28) 10px, rgba(72,45,20,.42) 11px, rgba(72,45,20,.42) 13px)",

                opacity:
                  0.48,
              }}
            />


            <div
              className="
                absolute
                top-0
                bottom-0
                left-[12%]
                w-[3px]
                bg-black/30
                pointer-events-none
              "
            />


            <div
              className="
                absolute
                top-0
                bottom-0
                left-1/2
                w-[3px]
                bg-black/25
                pointer-events-none
              "
            />


            <div
              className="
                absolute
                top-0
                bottom-0
                right-[12%]
                w-[3px]
                bg-black/30
                pointer-events-none
              "
            />


            <div
              className="
                bamboo-light
                absolute
                inset-x-0
                top-0
                h-[35%]
                pointer-events-none
              "
              style={{
                background:
                  "linear-gradient(to bottom,rgba(255,245,210,.28),transparent)",

                animation:
                  "bambooLight 1500ms cubic-bezier(.22,.8,.25,1) both",
              }}
            />

          </div>


          <div
            className="
              bamboo-roller
              absolute
              left-[-2%]
              right-[-2%]
              top-[-16px]
              h-[42px]
              pointer-events-none
            "
            style={{
              zIndex:
                10,

              border:
                "4px solid #000",

              borderRadius:
                "999px",

              background:
                "repeating-linear-gradient(90deg,#6F451F 0px,#6F451F 9px,#A66B30 10px,#A66B30 17px,#5A371A 18px,#5A371A 23px)",

              boxShadow:
                "0 7px 0 rgba(0,0,0,.35)",

              animation:
                "bambooRoller 1500ms cubic-bezier(.22,.8,.25,1) both",
            }}
          />


          <div
            className="
              absolute
              left-[3%]
              right-[3%]
              top-[5px]
              h-[8px]
              rounded-full
              bg-white/20
              pointer-events-none
            "
            style={{
              zIndex:
                11,

              animation:
                "bambooRoller 1500ms cubic-bezier(.22,.8,.25,1) both",
            }}
          />


          <div
            className="
              bamboo-edge
              absolute
              left-0
              right-0
              bottom-[-8px]
              h-[32px]
              pointer-events-none
            "
            style={{
              zIndex:
                9,

              borderTop:
                "4px solid #000",

              borderBottom:
                "4px solid #000",

              background:
                "repeating-linear-gradient(90deg,#68401D 0px,#68401D 12px,#A46A2D 13px,#A46A2D 21px,#593619 22px,#593619 27px)",

              boxShadow:
                "0 -4px 0 rgba(0,0,0,.25)",

              animation:
                "bambooEdge 1500ms cubic-bezier(.22,.8,.25,1) both",
            }}
          />

        </div>
      )}


      {/* =========================================================
          =========================================================
          ANY PAGE → MISSIONS
          =========================================================
      ========================================================= */}

      {transition?.type === "missions" && (
        <div
          className="
            fixed
            inset-0
            z-[120]
            pointer-events-none
            overflow-hidden
          "
          aria-hidden="true"
        >

          <div
            className="
              missions-shadow
              absolute
              inset-0
              bg-black
              pointer-events-none
            "
            style={{
              animation:
                "crumpleShadow 1350ms cubic-bezier(.22,.8,.25,1) both",

              willChange:
                "transform, opacity, filter",
            }}
          />


          <div
            className="
              missions-paper
              absolute
              inset-0
              overflow-hidden
            "
            style={{
              transformOrigin:
                "50% 50%",

              animation:
                "crumplePaper 1350ms cubic-bezier(.22,.8,.25,1) both",

              willChange:
                "transform, clip-path, border-radius, opacity",
            }}
          >

            <div className="absolute inset-0">
              {renderPage(transition.from)}
            </div>


            <div
              className="
                absolute
                inset-0
                pointer-events-none
              "
              style={{
                backgroundImage:
                  "radial-gradient(rgba(0,0,0,.08) 0.7px, transparent 0.7px)",

                backgroundSize:
                  "7px 7px",

                opacity:
                  0.12,
              }}
            />


            <div
              className="
                missions-light
                absolute
                left-1/2
                top-1/2
                w-[75%]
                h-[75%]
                pointer-events-none
              "
              style={{
                transform:
                  "translate(-50%, -50%)",

                background:
                  "radial-gradient(circle, rgba(255,255,255,.35) 0%, rgba(255,255,255,.12) 25%, transparent 65%)",

                mixBlendMode:
                  "screen",

                animation:
                  "crumpleLight 1350ms cubic-bezier(.22,.8,.25,1) both",
              }}
            />


            <div
              className="
                missions-crease-horizontal
                absolute
                left-[8%]
                right-[8%]
                top-[42%]
                h-[2px]
                pointer-events-none
              "
              style={{
                background:
                  "linear-gradient(90deg,transparent,rgba(0,0,0,.35),rgba(255,255,255,.45),rgba(0,0,0,.3),transparent)",

                boxShadow:
                  "0 2px 0 rgba(255,255,255,.18)",

                animation:
                  "creaseHorizontal 1350ms cubic-bezier(.22,.8,.25,1) both",
              }}
            />


            <div
              className="
                missions-crease-horizontal
                absolute
                left-[10%]
                right-[10%]
                top-[58%]
                h-[3px]
                pointer-events-none
              "
              style={{
                background:
                  "linear-gradient(90deg,transparent,rgba(255,255,255,.35),rgba(0,0,0,.35),transparent)",

                animation:
                  "creaseHorizontal 1350ms cubic-bezier(.22,.8,.25,1) 40ms both",
              }}
            />


            <div
              className="
                missions-crease-vertical
                absolute
                top-[8%]
                bottom-[8%]
                left-[43%]
                w-[2px]
                pointer-events-none
              "
              style={{
                background:
                  "linear-gradient(to bottom,transparent,rgba(0,0,0,.32),rgba(255,255,255,.4),rgba(0,0,0,.28),transparent)",

                animation:
                  "creaseVertical 1350ms cubic-bezier(.22,.8,.25,1) 20ms both",
              }}
            />


            <div
              className="
                missions-crease-vertical
                absolute
                top-[10%]
                bottom-[10%]
                left-[59%]
                w-[3px]
                pointer-events-none
              "
              style={{
                background:
                  "linear-gradient(to bottom,transparent,rgba(255,255,255,.4),rgba(0,0,0,.35),transparent)",

                animation:
                  "creaseVertical 1350ms cubic-bezier(.22,.8,.25,1) 70ms both",
              }}
            />


            <div
              className="
                missions-wrinkle
                absolute
                left-1/2
                top-1/2
                w-[45%]
                h-[45%]
                pointer-events-none
              "
              style={{
                transform:
                  "translate(-50%, -50%)",

                border:
                  "2px solid rgba(0,0,0,.18)",

                borderRadius:
                  "42% 58% 54% 46%",

                boxShadow:
                  "inset 8px 5px 0 rgba(255,255,255,.16), inset -8px -6px 0 rgba(0,0,0,.15)",

                animation:
                  "crumpleWrinkle 1350ms cubic-bezier(.22,.8,.25,1) both",
              }}
            />

          </div>

        </div>
      )}


      {/* =========================================================
          =========================================================
          ANY PAGE → CONTACT
          SPIDY TRACKER
          =========================================================
      ========================================================= */}

      {transition?.type === "contact" && (
        <div
          className="
            fixed
            inset-0
            z-[140]
            pointer-events-none
            overflow-hidden
            bg-[#05070B]
          "
          aria-hidden="true"
        >

          <div
            className="
              tracker-backdrop
              absolute
              inset-0
              bg-[#05070B]
            "
            style={{
              animation:
                "trackerBackdrop 1750ms cubic-bezier(.22,.8,.25,1) both",
            }}
          />


          <div
            className="
              tracker-grid
              absolute
              inset-0
              opacity-0
            "
            style={{
              backgroundImage:
                `
                  linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
                `,

              backgroundSize:
                "48px 48px",

              animation:
                "trackerGrid 1750ms ease-out both",
            }}
          />


          <div
            className="
              tracker-interface
              absolute
              top-7
              left-7
              right-7
              flex
              items-center
              justify-between
              font-mono
            "
            style={{
              animation:
                "trackerInterface 1750ms cubic-bezier(.22,.8,.25,1) both",
            }}
          >

            <div className="flex items-center gap-3">

              <span className="w-2 h-2 bg-[#E62429] rounded-full animate-pulse" />

              <span className="text-white/70 text-[10px] md:text-xs tracking-[0.25em] font-bold">
                SPIDERTIH // SIGNAL TRACKER
              </span>

            </div>


            <span className="text-[#FFD400] text-[9px] md:text-xs tracking-widest">
              SYS. ONLINE
            </span>

          </div>


          <div
            className="
              tracker-corner
              absolute
              left-8
              top-24
              w-12
              h-12
              border-l-2
              border-t-2
              border-[#FFD400]
            "
            style={{
              animation:
                "trackerCorner 1750ms ease both",
            }}
          />


          <div
            className="
              tracker-corner
              absolute
              right-8
              top-24
              w-12
              h-12
              border-r-2
              border-t-2
              border-[#FFD400]
            "
            style={{
              animation:
                "trackerCorner 1750ms ease 60ms both",
            }}
          />


          <div
            className="
              tracker-corner
              absolute
              left-8
              bottom-24
              w-12
              h-12
              border-l-2
              border-b-2
              border-[#FFD400]
            "
            style={{
              animation:
                "trackerCorner 1750ms ease 100ms both",
            }}
          />


          <div
            className="
              tracker-corner
              absolute
              right-8
              bottom-24
              w-12
              h-12
              border-r-2
              border-b-2
              border-[#FFD400]
            "
            style={{
              animation:
                "trackerCorner 1750ms ease 140ms both",
            }}
          />


          <div
            className="
              tracker-interface
              absolute
              left-1/2
              top-1/2
              w-[280px]
              h-[280px]
              md:w-[360px]
              md:h-[360px]
            "
            style={{
              transform:
                "translate(-50%, -50%)",

              animation:
                "trackerInterface 1750ms cubic-bezier(.22,.8,.25,1) both",
            }}
          >

            <div
              className="
                tracker-ring
                absolute
                left-1/2
                top-1/2
                w-full
                h-full
                rounded-full
                border-2
                border-[#E62429]/80
              "
              style={{
                transform:
                  "translate(-50%, -50%)",

                borderStyle:
                  "dashed",

                animation:
                  "trackerRing 1450ms cubic-bezier(.16,1,.3,1) both",
              }}
            />


            <div
              className="
                tracker-inner-ring
                absolute
                left-1/2
                top-1/2
                w-[76%]
                h-[76%]
                rounded-full
                border
                border-[#FFD400]/80
              "
              style={{
                transform:
                  "translate(-50%, -50%)",

                borderStyle:
                  "dashed",

                animation:
                  "trackerInnerRing 1250ms cubic-bezier(.16,1,.3,1) 100ms both",
              }}
            />


            <div
              className="
                tracker-crosshair
                absolute
                left-1/2
                top-1/2
                w-[130px]
                h-[130px]
              "
              style={{
                transform:
                  "translate(-50%, -50%)",

                animation:
                  "trackerCrosshair 1200ms cubic-bezier(.16,1,.3,1) 220ms both",
              }}
            >

              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/50 -translate-x-1/2" />

              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/50 -translate-y-1/2" />

              <div className="absolute left-1/2 top-1/2 w-5 h-5 border-2 border-[#E62429] -translate-x-1/2 -translate-y-1/2 rotate-45" />

            </div>


            <div
              className="
                tracker-pulse
                absolute
                left-1/2
                top-1/2
                w-20
                h-20
                rounded-full
                border
                border-[#E62429]
              "
              style={{
                transform:
                  "translate(-50%, -50%)",

                animation:
                  "trackerPulse 1300ms ease-out 250ms both",
              }}
            />


            <div
              className="
                tracker-dots
                absolute
                left-1/2
                top-1/2
                w-3
                h-3
                rounded-full
                bg-[#FFD400]
                shadow-[0_0_20px_#FFD400]
              "
              style={{
                transform:
                  "translate(-50%, -50%)",

                animation:
                  "trackerDots 1300ms ease-out 250ms both",
              }}
            />


            <div
              className="
                tracker-scan
                absolute
                left-[4%]
                right-[4%]
                top-1/2
                h-px
                bg-[#E62429]
                shadow-[0_0_14px_#E62429]
              "
              style={{
                animation:
                  "trackerScan 1250ms cubic-bezier(.16,1,.3,1) 250ms both",
              }}
            />


            <div
              className="
                tracker-scan-glow
                absolute
                left-[4%]
                right-[4%]
                top-1/2
                h-12
                -translate-y-1/2
                bg-gradient-to-b from-transparent via-[#E62429]/15 to-transparent
                blur-sm
              "
              style={{
                animation:
                  "trackerScanGlow 1250ms ease 250ms both",
              }}
            />

          </div>


          <div
            className="
              tracker-text
              absolute
              left-1/2
              bottom-[17%]
              -translate-x-1/2
              text-center
              whitespace-nowrap
            "
            style={{
              animation:
                "trackerText 1550ms ease 120ms both",
            }}
          >

            <p className="text-[#FFD400] text-[10px] md:text-xs font-black tracking-[0.35em]">
              SPIDERTIH TRACKER
            </p>


            <p
              className="
                tracker-status
                mt-2
                text-white
                text-xs
                md:text-sm
                font-mono
                tracking-[0.22em]
              "
              style={{
                animation:
                  "trackerStatus 1750ms linear both",
              }}
            >
              SCANNING SIGNAL...
            </p>


            <p
              className="
                tracker-acquired
                absolute
                left-1/2
                top-full
                mt-2
                -translate-x-1/2
                text-[#E62429]
                text-xs
                md:text-sm
                font-mono
                font-black
                tracking-[0.22em]
              "
              style={{
                animation:
                  "trackerAcquired 1750ms ease both",
              }}
            >
              SIGNAL ACQUIRED
            </p>

          </div>


          <div
            className="
              tracker-interface
              absolute
              left-7
              right-7
              bottom-7
              flex
              items-end
              justify-between
              font-mono
            "
            style={{
              animation:
                "trackerInterface 1750ms cubic-bezier(.22,.8,.25,1) both",
            }}
          >

            <div>

              <p className="text-white/30 text-[8px] tracking-widest">
                ROUTE
              </p>

              <p className="text-white/70 text-[9px] tracking-widest mt-1">
                SECURE CHANNEL
              </p>

            </div>


            <div className="text-right">

              <p className="text-white/30 text-[8px] tracking-widest">
                DESTINATION
              </p>

              <p className="text-[#FFD400] text-[9px] tracking-widest mt-1">
                CONTACT // 001
              </p>

            </div>

          </div>


          <div
            className="
              tracker-flash
              absolute
              inset-0
              bg-white
              pointer-events-none
            "
            style={{
              animation:
                "trackerFlash 1750ms ease both",
            }}
          />

        </div>
      )}


    </>
  );
}