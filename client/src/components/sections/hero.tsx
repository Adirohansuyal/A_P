import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const cursorRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const heading = headingRef.current;
    const subHeading = subHeadingRef.current;

    // Initial reveal animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(image,
      { scale: 0.8, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 1.2 }
    )
    .fromTo(heading,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4"
    )
    .fromTo(subHeading,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    );

    // Parallax scroll effect
    gsap.to(image, {
      y: 100,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        smoothChildTiming: true,
      },
    });

    // Enhanced cursor effect
    const cursor = cursorRef.current;
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dot-pattern">
      {/* Enhanced cursor highlight */}
      <div
        ref={cursorRef}
        className="fixed w-32 md:w-64 h-32 md:h-64 pointer-events-none mix-blend-soft-light bg-gradient-radial from-primary/40 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 z-50 backdrop-blur-sm"
      />

      <motion.div
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28 text-center relative z-10"
      >
        <div className="relative mb-6 md:mb-8">
          <div
            ref={imageRef}
            className="w-32 h-32 md:w-48 md:h-48 mx-auto relative group"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse group-hover:bg-primary/20 transition-colors duration-300" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300" />
            <img
              src="/PHOTO-2025-02-07-12-00-25.jpg"
              alt="Aditya Suyal"
              className="relative w-full h-full object-cover rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-xl"
            />
          </div>
        </div>

        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
        >
          Aditya Suyal
        </h1>
        <p
          ref={subHeadingRef}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto px-4 leading-relaxed"
        >
          Aspiring Data Scientist | Machine Learning Enthusiast
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 text-primary-foreground"
            asChild
          >
            <a href="#about" className="px-8">
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background dark:from-dark-blue dark:via-dark-blue dark:to-dark-blue" />
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark"
        >
          <motion.div
            animate={{
              y: [0, -50],
              x: [0, -50],
            }}
            transition={{
              duration: 30,
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
