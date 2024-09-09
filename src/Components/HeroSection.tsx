function HeroSection() {
  return (
    <>
      {/* Background Image Container */}
      <div
        className="relative"
        style={{
          backgroundImage: "url(HeroSectionBG.svg)",
          height: "70vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay Container for Large Screens */}
        <div
          id="new-arrival-container"
          className="absolute w-full hidden lg:flex sm:w-auto bg-Project-Secondery text-left p-4 sm:p-7 max-w-xs sm:max-w-md lg:max-w-lg"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(10%, -50%)",
          }}
        >
          <div id="new-arrival-text" className="flex-col">
            <div className="p-1 sm:p-3">
              <p className="font-bold text-neutral-900 tracking-widest text-sm sm:text-base lg:text-lg">
                New Arrival
              </p>
            </div>
            <div className="p-1 sm:p-3">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-Project-Primary">
                Discover Our
                <br /> New Collection
              </h1>
            </div>
            <div className="p-1 sm:p-3">
              <p className="text-xs sm:text-sm lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                <br className="hidden sm:block" /> elit tellus, luctus nec
                ullamcorper mattis.
              </p>
            </div>
            <div id="new-arrival-button">
              <button className="btn-wide btn btn-lg bg-Project-Primary text-white mt-4 sm:mt-6">
                BUY NOW
              </button>
            </div>
          </div>
        </div>

        {/* Overlay Container for Small Screens */}
        <div
          id="new-arrival-container-mobile"
          className="absolute w-[90%] lg:hidden flex bg-Project-Secondery text-left p-4 sm:p-7 max-w-xs sm:max-w-md"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div id="new-arrival-text" className="flex-col">
            <div className="p-1 sm:p-3">
              <p className="font-bold text-neutral-900 tracking-widest text-sm sm:text-base">
                New Arrival
              </p>
            </div>
            <div className="p-1 sm:p-3">
              <h1 className="text-2xl sm:text-4xl font-bold text-Project-Primary">
                Discover Our
                <br /> New Collection
              </h1>
            </div>
            <div className="p-1 sm:p-3">
              <p className="text-xs sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                <br className="hidden sm:block" /> elit tellus, luctus nec
                ullamcorper mattis.
              </p>
            </div>
            <div id="new-arrival-button">
              <button className="btn-wide btn btn-lg bg-Project-Primary text-white mt-4 sm:mt-6">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HeroSection };
