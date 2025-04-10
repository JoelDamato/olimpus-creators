export default function Header() {
  return (
    <>
      <div 
      className="relative w-full  flex flex-col items-center md:flex-row lg:justify-start md:justify-center "
      >
        <div 
        className="flex flex-col lg:w-2/4 xl:w-2/4"
        >
          <img
            src="/HEAD-OLIMPUS-AZUL.png"
            alt="Olimpus Creators"
            style={{ zIndex: 4 }}
            className="w-4/6 md:w-3/4 object-cover"
          />
          <p
            className="text-start mt-3 text-[20px] sm:text-[40px] md:text-[55px] md:m-9 font-cincel"
            style={{
              zIndex:5,
              color: "fff",
              textShadow: "rgba(0, 0, 0, 0.59) 2.65166px 2.65166px 2.92501px",
              letterSpacing: 1.5,
            }}
          >
            +50.000 CLIPS PREMIUM
          </p>
        </div>
        <img
          src="https://i.ibb.co/BV7g9HHD/ZEUS-HEAD-CUT.png"
          alt="Zeus con celular"
           className="w-[65%] md:w-1/3 object-cover absolute right-[-20%] top-[-20%] md:right-0 md:top-0"
        />
      </div>
      <div className="relative flex justify-center items-center md:items-center md:justify-start " style={{ zIndex: 5 }}>
      <div className="relative w-full md:w-2/4">
      <iframe id="panda-173ce449-8b70-480a-b20a-aae9f53f770f" src="https://player-vz-7cd4a4ef-9e2.tv.pandavideo.com/embed/?v=173ce449-8b70-480a-b20a-aae9f53f770f&autoplay=true&loop=true&muted=true"  style={{border:"none"}} allowfullscreen="true" width="345" height="230" fetchpriority="high"></iframe>
      </div>
      </div>
    </>
  );
}
