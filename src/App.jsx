import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Identity from "./pages/Identity";
import Personal from "./pages/Personal";
import Missions from "./pages/Missions";
import Contact from "./components/Contact";


function PageWrapper({ children }) {
  return (
    <main className="page-route">
      {children}
    </main>
  );
}


/* =========================================================
   CONTACT PAGE

   Contact memiliki pengalaman fullscreen sendiri.

   - Navbar otomatis disembunyikan oleh Navbar.jsx
   - Contact memenuhi layar
   - Hanya ada satu tombol navigasi tambahan:
     BACK TO HOME
========================================================= */

function ContactPage() {
  return (
    <main className="relative min-h-screen w-full">

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <Contact />


      {/* =====================================================
          BACK TO HOME
      ===================================================== */}

      <Link
        to="/"
        aria-label="Back to Home"
        className="
          fixed
          left-5
          bottom-5
          md:left-8
          md:bottom-8

          z-[80]

          inline-flex
          items-center
          gap-3

          px-5
          py-3

          bg-[#FFD400]
          border-4
          border-black

          text-black
          text-xs
          md:text-sm
          font-black
          tracking-widest

          shadow-[5px_5px_0px_#000]

          hover:translate-x-[3px]
          hover:translate-y-[3px]
          hover:shadow-none

          active:translate-x-[4px]
          active:translate-y-[4px]
          active:shadow-none

          transition-all
          duration-150
        "
      >
        <span className="text-base md:text-lg">
          ←
        </span>

        <span>
          BACK TO HOME
        </span>
      </Link>

    </main>
  );
}


function AppRoutes() {
  return (
    <>
      {/* =====================================================
          GLOBAL NAVBAR

          Navbar.jsx sendiri akan otomatis menghilang
          ketika pathname === "/contact".
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          GLOBAL PAGE TRANSITION

          Landing Spider-Man dan route transitions
          tetap ditangani oleh komponen ini.
      ===================================================== */}

      <PageTransition />


      <Routes>

        {/* ===================================================
            HOME
        =================================================== */}

        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />


        {/* ===================================================
            IDENTITY
        =================================================== */}

        <Route
          path="/identity"
          element={
            <PageWrapper>
              <Identity />
            </PageWrapper>
          }
        />


        {/* ===================================================
            PERSONAL
        =================================================== */}

        <Route
          path="/personal"
          element={
            <PageWrapper>
              <Personal />
            </PageWrapper>
          }
        />


        {/* ===================================================
            MISSIONS
        =================================================== */}

        <Route
          path="/missions"
          element={
            <PageWrapper>
              <Missions />
            </PageWrapper>
          }
        />


        {/* ===================================================
            CONTACT

            Contact sengaja tidak menggunakan PageWrapper
            agar halaman dapat menjadi fullscreen.
        =================================================== */}

        <Route
          path="/contact"
          element={
            <ContactPage />
          }
        />

      </Routes>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}


export default App;