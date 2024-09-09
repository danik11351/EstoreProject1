import { motion } from "framer-motion";

const Inspiration = () => {
  // Array of image file paths to be displayed in the album
  const images = [
    "Caruselimage1.svg",
    "Caruselimage2.png",
    "Caruselimage1.svg",
    "Caruselimage2.png",
    "Caruselimage1.svg",
    "Caruselimage2.png",
    "Caruselimage1.svg",
    "Caruselimage2.png",
  ];

  return (
    <div className="bg-Project-Secondery mt-12 lg:mt-24 flex flex-col lg:flex-row">
      {/* Text Section */}
      <div id="Inspo-text-container" className="text-left p-4 sm:p-6 lg:p-12">
        <div id="Inspo-header">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center lg:mt-48">
            50+ Beautiful rooms
            <br /> inspiration
          </h1>
        </div>
        <div id="inspo-text" className="mt-2 lg:mt-4 text-center">
          <p className="text-sm sm:text-base">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you
          </p>
        </div>
        {/* Centered Explore Button with Refined Hover Animation */}
        <div id="inspo-button" className="mt-4 flex justify-center">
          <motion.button
            className="bg-Project-Primary text-white px-8 py-2 lg:py-3 lg:px-24 rounded-lg"
            whileHover={{
              scale: 1.05, // Slightly scale up the button
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)", // Add subtle shadow
            }}
            whileTap={{ scale: 0.95 }} // Scale down slightly on tap
            transition={{ duration: 0.3 }} // Smooth transition
          >
            Explore more
          </motion.button>
        </div>
      </div>

      {/* Image Album Section */}
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Loop through images array and create a card for each image */}
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="card bg-white shadow-lg"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Scale down on tap
              transition={{ duration: 0.3 }} // Smooth transition
            >
              <figure>
                <img
                  src={image}
                  alt={`Album ${index + 1}`}
                  className="object-cover w-full h-32 sm:h-40 md:h-48 lg:h-56"
                />
              </figure>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Inspiration };
