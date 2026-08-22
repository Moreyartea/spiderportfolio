import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Identity from "../pages/Identity";
import Personal from "../pages/Personal";
import Missions from "../pages/Missions";
import Contact from "./Contact";


/* =========================================================
   RENDER HALAMAN SEBELUMNYA
   =========================================================

   Halaman yang sedang ditinggalkan digunakan sebagai
   material transisi.

   ANY PAGE → IDENTITY
   = halaman menjadi lembar komik yang dibalik.

   ANY PAGE → PERSONAL
   = halaman menjadi tirai bambu.

   ANY PAGE → MISSIONS
   = halaman diremas seperti kertas.
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
     LANDING INTRO
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
     MATIKAN INTRO KETIKA MENINGGALKAN HOME
  ========================================================= */

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowIntro(false);
    }
  }, [location.pathname]);


  /* =========================================================
     LANDING INTRO TIMER

     TETAP 2300ms
  ========================================================= */

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, [location.pathname]);


  /* =========================================================
     DETEKSI PERPINDAHAN ROUTE
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

       Bamboo roll-up.
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
       ROUTE LAIN

       Tidak diberi animasi khusus.
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
           SPIDER-MAN LANDING INTRO
           =====================================================
           ===================================================== */


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
           IDENTITY
           COMIC PAGE TURN
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
           PERSONAL
           BAMBOO ROLL-UP
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
           MISSIONS
           CRUMPLED PAPER
           =====================================================
           =====================================================

           Konsep:

           Halaman sebelumnya menjadi selembar kertas.

           Kertas mulai berkerut dari berbagai arah,
           tertarik menuju pusat, berputar sedikit,
           kemudian diremas menjadi gumpalan kecil.

           Missions asli berada di belakangnya.
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


        /* =====================================================
           CRUMPLE — SHADOW
           
           Shadow semakin kecil dan semakin pekat ketika
           kertas berubah menjadi gumpalan.
        ===================================================== */

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


        /* =====================================================
           CRUMPLE — CREASES
           
           Garis-garis lipatan bergerak menuju pusat.
        ===================================================== */

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


        /* =====================================================
           CRUMPLE — PAPER LIGHT
        ===================================================== */

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


        /* =====================================================
           CRUMPLE — CENTRAL WRINKLE
        ===================================================== */

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
           ACCESSIBILITY
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

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
          .missions-wrinkle {
            animation-duration:
              1ms !important;
          }

        }

        `}
      </style>


      {/* =========================================================
          =========================================================
          SPIDER-MAN LANDING INTRO
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

          {/* BACKGROUND */}

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #071a46 0%, #123b91 45%, #E62429 100%)",

              animation:
                "introBg 2300ms cubic-bezier(0.76,0,0.24,1) forwards",
            }}
          />


          {/* SPIDER-MAN */}

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


          {/* WEB SHOT */}

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


          {/* SPIDER WEB */}

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
          ANY PAGE → IDENTITY
          COMIC PAGE TURN
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

          {/* SHADOW */}

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


          {/* OUTGOING PAGE */}

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


            {/* SUBTLE PAPER TEXTURE */}

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


            {/* LIGHT PASS */}

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


          {/* FOLDED BACK SIDE */}

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


          {/* RED SPEED LINE */}

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


          {/* YELLOW SPEED LINE */}

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
          BAMBOO ROLL-UP
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

          {/* SHADOW */}

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


          {/* BAMBOO CURTAIN */}

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

            {/* HALAMAN SEBELUMNYA */}

            <div className="absolute inset-0">
              {renderPage(transition.from)}
            </div>


            {/* BAMBOO COLOR / TEXTURE */}

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


            {/* BAMBOO HORIZONTAL SLATS */}

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


            {/* VERTICAL ROPE LEFT */}

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


            {/* VERTICAL ROPE CENTER */}

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


            {/* VERTICAL ROPE RIGHT */}

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


            {/* SOFT LIGHT */}

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


          {/* BAMBOO ROLLER */}

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


          {/* ROLLER HIGHLIGHT */}

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


          {/* BOTTOM BAMBOO EDGE */}

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
          CRUMPLED PAPER
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

          {/* =====================================================
              SHADOW
          ===================================================== */}

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


          {/* =====================================================
              OUTGOING PAGE

              Halaman sebelumnya menjadi kertas yang diremas.
          ===================================================== */}

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

            {/* =================================================
                HALAMAN ASLI
            ================================================= */}

            <div className="absolute inset-0">
              {renderPage(transition.from)}
            </div>


            {/* =================================================
                PAPER TEXTURE
            ================================================= */}

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


            {/* =================================================
                CENTRAL LIGHT

                Membantu memberi kesan permukaan kertas
                yang saling bertumpuk saat diremas.
            ================================================= */}

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


            {/* =================================================
                HORIZONTAL CREASES
            ================================================= */}

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


            {/* =================================================
                VERTICAL CREASES
            ================================================= */}

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


            {/* =================================================
                CENTRAL WRINKLE
            ================================================= */}

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


    </>
  );
}