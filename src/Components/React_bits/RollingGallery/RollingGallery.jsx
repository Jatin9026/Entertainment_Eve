import { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

// Fallback images array
const IMGS = [
  "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1599576838688-8a6c11263108?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://plus.unsplash.com/premium_photo-1664910706524-e783eed89e71?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3",
];

export default function RollingGallery({
  // Autoplay and interaction settings
  autoplay = false,
  pauseOnHover = false,
  // Use provided images or default images
  images = [],
  autoplayDuration = 5, // Duration for each image in seconds
}) {
  // Set images: if none are provided, fallback to IMGS.
  images = images.length > 0 ? images : IMGS;

  // Responsive check: set a flag when the screen width is small.
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define dimensions (adjust as necessary).
  // For a 2D carousel, we use a fixed image width.
  const imageWidth = isScreenSizeSm ? 250 : 350; // Width of each image in pixels
  const containerWidth = isScreenSizeSm ? 300 : 400; // Width of each image in pixels
  const imageMargin = 16; // Horizontal margin on each side
  const itemWidth = imageWidth + imageMargin * 2; // Total width each item occupies

  // Prepare carousel images:
  // Duplicate the images so that when one set finishes scrolling,
  // the next set makes the loop appear seamless.
  const loopImages = [...images, ...images];
  
  // Calculate the total scroll width of one set of images.
  const totalScrollWidth = images.length * itemWidth;

  // Setup Framer Motion animation controls.
  const controls = useAnimation();
  // Use a motion value to track the x position.
  const x = useMotionValue(0);

  // Autoplay: animate the x-value from 0 to -totalScrollWidth continuously.
  const startAutoplay = (startX = 0) => {
    controls.start({
      x: [itemWidth, -itemWidth],
      transition: {
        duration: autoplayDuration, // Adjust duration for speed
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  // On mount, start autoplay if enabled.
  useEffect(() => {
    if (autoplay) {
      startAutoplay();
    } else {
      controls.stop();
    }
    return () => controls.stop();
  }, [autoplay, totalScrollWidth]);

  // Handle drag end: resume autoplay if enabled.
  const handleDragEnd = () => {
    if (autoplay) {
      // Restart autoplay from the current position using x.get()
      startAutoplay(x.get());
    }
  };

  return (
    // Outer wrapper: hides overflow, sets fixed height.
    <div
      className="flex xl:hidden relative overflow-hidden w-full justify-center items-center"
      style={{ height: containerWidth }}
      // Pause auto-scroll on hover if enabled.
      onMouseEnter={() => pauseOnHover && controls.stop()}
      onMouseLeave={() => pauseOnHover && startAutoplay(x.get())}
    >
      {/* Motion container: horizontally scrolls items */}
      <motion.div
        className="flex" // Lay out children in a row
        animate={controls}
        drag="x" // Enable horizontal dragging
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        style={{ x }}
      >
        {loopImages.map((url, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-4"
            style={{ width: imageWidth }}
          >
            <img
              src={url}
              alt={`Gallery ${i}`}
              className="w-70 h-60 rounded-3xl object-cover transition-transform duration-300 ease-out hover:scale-105 p-0.5
                        bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
            />
            
            {/* <span className="text-5xl bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent custom-font">
              COMING SOON
            </span> */}
            
          </div>
        ))}
      </motion.div>
    </div>
  );
}