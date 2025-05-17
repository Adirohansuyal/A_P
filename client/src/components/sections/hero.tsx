import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    // GSAP animations
    gsap.fromTo(
      section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    // Parallax effect on image
    gsap.to(image, {
      y: 100,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Cursor highlight effect
    const cursor = cursorRef.current;
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cursor highlight */}
      <div
        ref={cursorRef}
        className="fixed w-32 md:w-64 h-32 md:h-64 pointer-events-none mix-blend-soft-light bg-gradient-radial from-primary/30 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 z-50"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28 text-center relative z-10"
      >
        <div className="relative mb-6 md:mb-8">
          <motion.div
            ref={imageRef}
            className="w-32 h-32 md:w-48 md:h-48 mx-auto relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
            <img
              src="/PHOTO-2025-02-07-12-00-25.jpg" // Update this to point to the image in the public folder
              alt="Aditya Suyal"
              className="w-full h-full object-cover rounded-full border-4 border-primary/20 hover:border-primary transition-colors duration-300"
            />
          </motion.div>
        </div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Aditya Suyal
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Aspiring Data Scientist | Machine Learning Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="rounded-full transition-all duration-300 hover:shadow-lg hover:bg-primary/90"
            asChild
          >
            <a href="#about">
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Animated Tech Background with Parallax */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        >
          <motion.div
            animate={{
              y: [0, -100],
              x: [0, -100],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
