import { motion } from "framer-motion"; // ✅ Imported Framer Motion for animation

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}) {
  // ✅ Create the gradient string from the colors array
  const gradient = `linear-gradient(to right, ${colors.join(", ")})`;

  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center 
        rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 
        overflow-hidden cursor-pointer ${className}`}
    >
      {showBorder && (
        <motion.div
          className="absolute inset-0 bg-cover z-0 pointer-events-none"
          // ✅ Replaced Tailwind animation with Framer Motion animation
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{
            duration: animationSpeed,
            repeat: Infinity,
            ease: "linear", // ✅ Smooth animation with no bounce
          }}
          style={{
            backgroundImage: gradient,
            backgroundSize: "300% 100%", // ✅ Needed for smooth looping effect
          }}
        >
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </motion.div>
      )}

      <motion.div
        className="inline-block relative z-2 text-transparent bg-cover"
        // ✅ Animated gradient text using backgroundPosition
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: animationSpeed,
          repeat: Infinity,
          ease: "linear", // ✅ Smooth loop
        }}
        style={{
          backgroundImage: gradient,
          backgroundSize: "300% 100%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent", // ✅ Makes text take the gradient fill
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}


// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         gradient: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//       },
//       animation: {
//         gradient: 'gradient 8s linear infinite'
//       },
//     },
//   },
//   plugins: [],
// };