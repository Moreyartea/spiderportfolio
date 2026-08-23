const contacts = [
  {
    label: "Email",
    value: "Send a Mail",
    href: "mailto:fatihtaqiyyuddin113@gmail.com",
    type: "email",
  },
  {
    label: "GitHub",
    value: "github.com/Moreyartea",
    href: "https://github.com/Moreyartea",
    type: "github",
  },
  {
    label: "Instagram",
    value: "@fatihtaqiyyuddin",
    href: "https://www.instagram.com",
    type: "instagram",
  },
  {
    label: "WhatsApp",
    value: "Send a Massage",
    href: "https://wa.me/6285379531725",
    type: "whatsapp",
  },
];


function ContactIcon({ type }) {
  if (type === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }


  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }


  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }


  if (type === "whatsapp") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M12 2a9.9 9.9 0 0 0-8.57 14.86L2 22l5.3-1.39A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.15.83.84-3.07-.19-.31A8 8 0 1 1 12 20Zm4.39-5.99c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.8-.2-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.01.4 1.35.51.57.18 1.09.16 1.5.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    );
  }


  return null;
}


export default function Contact() {
  return (
    <footer
      id="contact"
      className="
        relative
        w-full
        min-h-screen

        bg-[#0A0A0A]

        pt-[110px]
        pb-20
        px-6
        md:px-16

        overflow-hidden

        border-t-4
        border-black
      "
    >

      <div className="max-w-4xl mx-auto">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <span
          className="
            inline-block

            px-4
            py-1.5

            bg-[#E62429]

            border-2
            border-black

            text-white
            text-xs
            font-bold
            tracking-wider

            shadow-[3px_3px_0px_#000]

            mb-6
          "
        >
          MARI TERHUBUNG
        </span>


        <h2
          className="
            font-comic
            text-4xl
            md:text-6xl

            text-white

            mb-10
          "
          style={{
            WebkitTextStroke: "1.5px #FFD400",
          }}
        >
          KONTAK
        </h2>


        {/* =====================================================
            CONTACT CARDS
        ===================================================== */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4

            gap-5

            mb-14
          "
        >

          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={
                contact.type === "email"
                  ? undefined
                  : "_blank"
              }
              rel={
                contact.type === "email"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="
                group

                bg-[#1A1A1A]

                border-4
                border-[#FFD400]

                shadow-[6px_6px_0px_#E62429]

                p-5

                hover:shadow-none
                hover:translate-x-1
                hover:translate-y-1

                transition-all
              "
            >

              {/* ICON */}

              <div
                className="
                  w-12
                  h-12

                  flex
                  items-center
                  justify-center

                  bg-[#FFD400]

                  border-3
                  border-black

                  text-black

                  shadow-[3px_3px_0px_#E62429]

                  group-hover:translate-x-[1px]
                  group-hover:translate-y-[1px]

                  transition-transform
                "
              >
                <ContactIcon type={contact.type} />
              </div>


              {/* LABEL */}

              <p
                className="
                  text-xs
                  font-bold
                  tracking-wider

                  text-[#FFD400]

                  mt-4
                "
              >
                {contact.label.toUpperCase()}
              </p>


              {/* VALUE */}

              <p
                className="
                  text-white
                  text-sm

                  break-all

                  mt-1
                "
              >
                {contact.value}
              </p>

            </a>
          ))}

        </div>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4

            border-t-2
            border-white/20

            pt-6
          "
        >

          <p
            className="
              font-comic
              text-[#FFD9C7]
              text-lg
            "
          >
            SPIDERTIH
          </p>


          <p
            className="
              text-white/40
              text-xs
            "
          >
            © 2026 Fatih Taqiyyuddin. Tugas kuliah — aset visual Spider-Man
            digunakan untuk keperluan edukasi.
          </p>

        </div>

      </div>
    </footer>
  );
}