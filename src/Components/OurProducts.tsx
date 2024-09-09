import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CompareButton, LikeButton, ShareButton } from "./GlobalButtons";

function ProductSelection() {
  // State to track the currently hovered product
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // State to track if the "Show More" section is expanded or not
  const [showMore, setShowMore] = useState<boolean>(false);

  // Function to handle when a product is hovered
  const handleMouseEnter = (productId: number) => {
    setHoveredProduct(productId);
  };

  // Function to handle when the mouse leaves a product
  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  // Function to toggle the "Show More" section
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Array of product objects with relevant details
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "2,500",
      image: "public/ProductImages/image1.svg",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "2,500",
      image: "public/ProductImages/image2.svg",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "2,500",
      image: "public/ProductImages/image3.svg",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "2,500",
      image: "public/ProductImages/image4.svg",
    },
    {
      id: 5,
      name: "Grifo",
      description: "Night lamp",
      price: "2,500",
      image: "public/ProductImages/image5.svg",
    },
    {
      id: 6,
      name: "Muggo",
      description: "Small mug",
      price: "2,500",
      image: "public/ProductImages/image6.svg",
    },
    {
      id: 7,
      name: "Pingky",
      description: "Cute bed set",
      price: "2,500",
      image: "public/ProductImages/image7.svg",
    },
    {
      id: 8,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "2,500",
      image: "public/ProductImages/image8.svg",
    },
    {
      id: 9,
      name: "Pluto",
      description: "Comfy chair",
      price: "3,000",
      image: "public/ProductImages/image1.svg",
    },
    {
      id: 10,
      name: "Jupiter",
      description: "Luxury sofa",
      price: "4,500",
      image: "public/ProductImages/image2.svg",
    },
    {
      id: 11,
      name: "Mars",
      description: "Outdoor chair",
      price: "3,200",
      image: "public/ProductImages/image3.svg",
    },
    {
      id: 12,
      name: "Venus",
      description: "Modern lamp",
      price: "2,800",
      image: "public/ProductImages/image4.svg",
    },
    {
      id: 13,
      name: "Saturn",
      description: "Dining table",
      price: "5,000",
      image: "public/ProductImages/image5.svg",
    },
    {
      id: 14,
      name: "Neptune",
      description: "Bed set",
      price: "7,000",
      image: "public/ProductImages/image6.svg",
    },
    {
      id: 15,
      name: "Uranus",
      description: "Nightstand",
      price: "1,500",
      image: "/public/ProductImages/image7.svg",
    },
    {
      id: 16,
      name: "Mercury",
      description: "Flower vase",
      price: "1,200",
      image: "/public/ProductImages/image8.svg",
    },
  ];

  return (
    <>
      {/* Section title */}
      <div className="mt-12">
        <h1 className="text-3xl mb-12 font-bold text-center">Our Products</h1>
      </div>

      {/* Product display grid */}
      <div className="grid grid-cols-1 mx-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-12 lg:px-0">
        <AnimatePresence>
          {/* Display the first 8 products */}
          {products.slice(0, 8).map((product) => (
            <motion.div
              key={product.id}
              className="relative bg-white shadow rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              {/* Product image with hover effect */}
              <motion.div
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {/* Overlay with product description and action buttons */}
                {hoveredProduct === product.id && (
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-xl text-white font-bold mb-4">
                      {product.description}
                    </p>
                    <motion.button
                      className="bg-white px-4 py-2 rounded-full mb-3 text-Project-Primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Add to Cart
                    </motion.button>
                    <div className="flex gap-2 text-white">
                      {/* Action buttons */}
                      <ShareButton />
                      <CompareButton />
                      <LikeButton />
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Product details */}
              <div className="p-4 bg-gray-50">
                <p className="font-bold text-lg">{product.name}</p>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="font-bold text-xl mt-2">${product.price}</p>
              </div>
            </motion.div>
          ))}

          {/* Display additional products if "Show More" is enabled */}
          {showMore &&
            products.slice(8).map((product) => (
              <motion.div
                key={product.id}
                className="relative bg-white shadow rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {hoveredProduct === product.id && (
                    <motion.div
                      className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-xl text-white font-bold mb-4">
                        {product.description}
                      </p>
                      <motion.button
                        className="bg-white px-4 py-2 rounded-full mb-3 text-Project-Primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Add to Cart
                      </motion.button>
                      <div className="flex gap-2 text-white">
                        <ShareButton />
                        <CompareButton />
                        <LikeButton />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
                <div className="p-4 bg-gray-50">
                  <p className="font-bold text-lg">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="font-bold text-xl mt-2">${product.price}</p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* "Show More" button */}
      <div className="mt-6 text-center">
        <button
          onClick={toggleShowMore}
          className="bg-white border-Project-Primary border text-Project-Primary py-2 px-24 rounded transition-colors"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
}

export { ProductSelection };
