import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import { motion } from "framer-motion";
import { Share2, ArrowRightLeft, Heart } from "lucide-react"; // Importing icons

function ThemeToggle() {
  useEffect(() => {
    themeChange(false); // Initialize theme-change
  }, []);

  const handleThemeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <label className="flex cursor-pointer gap-2">
      {/* Sun Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      {/* Theme Toggle Switch */}
      <input
        type="checkbox"
        className="toggle theme-controller"
        data-set-theme="dark"
        data-act-class="ACTIVECLASS"
        onChange={handleThemeToggle}
      />

      {/* Moon Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
}

const ShareButton = () => {
  return (
    <motion.div
      className="flex items-center gap-1 p-2"
      whileHover={{
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
        scale: 1.1,
      }}
    >
      <motion.div className="flex items-center gap-1">
        <div className="flex gap-1">
          <button>
            <Share2 />
          </button>
          <button>
            <p>Share</p>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
const CompareButton = () => {
  return (
    <motion.div
      className="flex items-center gap-1 p-2"
      whileHover={{
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
        scale: 1.1,
      }}
      initial={{ borderColor: "transparent" }}
      animate={{ borderWidth: "2px", borderStyle: "solid" }}
    >
      <motion.div className="flex items-center gap-1">
        <div className="flex gap-1">
          <button>
            <ArrowRightLeft />
          </button>
          <button>
            <p>Compare</p>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
const LikeButton = () => {
  return (
    <motion.div
      className="flex items-center gap-1 p-2"
      whileHover={{
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
        scale: 1.1,
      }}
      initial={{ borderColor: "transparent" }}
      animate={{ borderWidth: "2px", borderStyle: "solid" }}
    >
      <motion.div className="flex items-center gap-1">
        <div className="flex gap-1">
          <button>
            <Heart />
          </button>
          <button>
            <p>Like</p>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export { ThemeToggle, ShareButton, CompareButton, LikeButton };
