import { useEffect, useState } from "react";
import {
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";


const navItems = [
  { label: "HOME", href: "/" },
  { label: "IDENTITY", href: "/identity" },
  { label: "PERSONAL", href: "/personal" },
  { label: "MISSIONS", href: "/missions" },
];


export default function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  /* =========================================================
     SCROLL STATE

     Hook harus tetap dijalankan pada setiap render.
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };


    handleScroll();


    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  /* =========================================================
     CONTACT MODE

     Contact adalah halaman fullscreen.

     Navbar tidak boleh muncul di sana.
  ========================================================= */

  if (location.pathname === "/contact") {
    return null;
  }


  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50

        border-b-4
        border-black

        transition-all
        duration-300

        ${
          scrolled
            ? "bg-[#163B7A]/95 backdrop-blur-md shadow-[0_4px_0px_#E62429]"
            : "bg-[#102A5C]"
        }
      `}
    >

      <div className="max-w-[1500px] mx-auto px-5 md:px-8">

        <div className="h-[76px] flex items-center justify-between">


          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >

            <div
              className="
                relative

                w-10
                h-10

                flex
                items-center
                justify-center

                bg-[#E62429]

                border-3
                border-black

                shadow-[3px_3px_0px_#FFD400]

                group-hover:translate-x-[2px]
                group-hover:translate-y-[2px]
                group-hover:shadow-none

                transition-all
              "
            >

              <span className="text-xl">
                🕸️
              </span>

            </div>


            <div className="leading-none">

              <span
                className="
                  block

                  font-comic

                  text-2xl
                  md:text-3xl

                  tracking-wide

                  text-[#FFD9C7]
                "
              >
                SPIDERTIH
              </span>


              <span
                className="
                  hidden
                  sm:block

                  text-[9px]

                  text-white/50

                  font-bold

                  tracking-[0.25em]

                  mt-1
                "
              >
                COMPUTER SCIENCE
              </span>

            </div>

          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden lg:flex items-center gap-2">

            {navItems.map((item) => (

              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  `
                    relative

                    px-4
                    py-2

                    text-xs
                    font-black
                    tracking-widest

                    transition-all
                    duration-200

                    group

                    ${
                      isActive
                        ? "!text-[#FFD400] bg-[#FFD400]/10"
                        : "!text-white hover:!text-[#FFD400]"
                    }
                  `
                }
              >

                {({ isActive }) => (
                  <>

                    {item.label}


                    <span
                      className={`
                        absolute

                        bottom-0
                        left-4
                        right-4

                        h-[3px]

                        bg-[#FFD400]

                        origin-left

                        transition-transform

                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    />

                  </>
                )}

              </NavLink>

            ))}

          </div>


          {/* =================================================
              DESKTOP CTA — SEND A SIGNAL
          ================================================= */}

          <Link
            to="/contact"
            className="
              hidden
              lg:inline-flex

              items-center
              gap-2

              px-5
              py-2.5

              bg-[#FFD400]

              border-3
              border-black

              text-black

              text-xs
              font-black
              tracking-wider

              shadow-[4px_4px_0px_#E62429]

              hover:shadow-none
              hover:translate-x-1
              hover:translate-y-1

              transition-all
            "
          >

            SEND A SIGNAL

            <span>
              ↗
            </span>

          </Link>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={
              menuOpen
                ? "Tutup menu"
                : "Buka menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            className="
              lg:hidden

              w-11
              h-11

              flex
              flex-col
              items-center
              justify-center

              gap-1.5

              bg-[#E62429]

              border-3
              border-black

              shadow-[3px_3px_0px_#FFD400]

              active:translate-x-[2px]
              active:translate-y-[2px]
              active:shadow-none

              transition-all
            "
          >

            <span
              className={`
                block

                w-5
                h-[3px]

                bg-white

                transition-transform
                duration-200

                ${
                  menuOpen
                    ? "translate-y-[4.5px] rotate-45"
                    : ""
                }
              `}
            />


            <span
              className={`
                block

                w-5
                h-[3px]

                bg-white

                transition-opacity
                duration-200

                ${
                  menuOpen
                    ? "opacity-0"
                    : ""
                }
              `}
            />


            <span
              className={`
                block

                w-5
                h-[3px]

                bg-white

                transition-transform
                duration-200

                ${
                  menuOpen
                    ? "-translate-y-[4.5px] -rotate-45"
                    : ""
                }
              `}
            />

          </button>

        </div>


        {/* ===================================================
            MOBILE NAVIGATION
        =================================================== */}

        <div
          className={`
            lg:hidden

            overflow-hidden

            transition-all
            duration-300

            ${
              menuOpen
                ? "max-h-[600px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div
            className="
              bg-[#1A1A1A]

              border-3
              border-[#FFD400]

              shadow-[5px_5px_0px_#E62429]

              p-3
            "
          >

            <div className="grid gap-2">

              {navItems.map((item) => (

                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `
                      flex
                      items-center
                      justify-between

                      px-4
                      py-3

                      border-2
                      border-white/10

                      hover:border-[#FFD400]
                      hover:bg-white/5

                      transition-all

                      ${
                        isActive
                          ? "!bg-[#E62429] !text-white"
                          : "!text-white/80"
                      }
                    `
                  }
                >

                  <span
                    className="
                      text-xs
                      font-black
                      tracking-widest
                    "
                  >
                    {item.label}
                  </span>


                  <span className="!text-[#FFD400]">
                    →
                  </span>

                </NavLink>

              ))}


              {/* =================================================
                  MOBILE CTA
              ================================================= */}

              <Link
                to="/contact"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-center

                  gap-2

                  px-4
                  py-3
                  mt-1

                  bg-[#FFD400]

                  border-2
                  border-black

                  !text-black

                  text-xs
                  font-black
                  tracking-widest

                  shadow-[3px_3px_0px_#E62429]
                "
              >

                SEND A SIGNAL

                <span>
                  ↗
                </span>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}