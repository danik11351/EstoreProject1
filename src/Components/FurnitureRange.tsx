import { motion } from "framer-motion";
import { useState } from "react";

interface CardProps {
  imgSrc: string;
  overlayText: string;
}

function Card({ imgSrc, overlayText }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 250, damping: 10 }}
        whileHover={{ scale: 1.1 }}
        className="relative"
      >
        <img
          src={imgSrc}
          alt=""
          className="w-full h-48 sm:h-64 lg:h-80 object-cover"
        />
        {isHovered && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-white font-bold">
              {overlayText}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export { Card };
function Range() {
  return (
    <div>
      <div className="px-6">
        <div>
          <h1 className="font-bold text-3xl mt-12">Browse The Range</h1>
        </div>
        <p className="text-Prod-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div
        id="container"
        className="flex flex-wrap mt-12 justify-center gap-6 lg:gap-24"
      >
        <Card
          imgSrc="DiningGroupImage.svg"
          overlayText="Dining Room Collection"
        />
        <Card
          imgSrc="LivingRoomGroupImage.svg"
          overlayText="Living Room Collection"
        />
        <Card imgSrc="BedroomGroupImage.svg" overlayText="Bedroom Collection" />
      </div>
    </div>
  );
}

export { Range };
