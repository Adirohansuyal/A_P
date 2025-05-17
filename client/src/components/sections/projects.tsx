import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "HealthMate AI: Your Digital Health Diagnosis and Assistant Tool",
    description: "Developed an AI-powered virtual assistant with voice control capabilities, integrating natural language processing and speech recognition.",
    technologies: ["Python", "Streamlit", "NLP", "Speech Recognition"],
    github: "https://github.com/Adirohansuyal/Personal_Assistant",
    demo: "https://adirohansuyal.github.io/healthmate-ai/",
  },
  {
    title: "Airfare Price Prediction Web App",
    description: "Created a machine learning model to predict flight prices, helping users find the best time to book their flights.",
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis"],
    github: "https://github.com/Adirohansuyal/FLIGHT_PREDICTOR",
    demo: "https://github.com/Adirohansuyal/FLIGHT_PREDICTOR",
  },
  {
    title: "Brain Tumor Detection",
    description: "Developed a deep learning model using CNN for brain tumor detection with high accuracy. Implemented data augmentation and transfer learning.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    github: "https://github.com/Adirohansuyal/Brain_Tumor_Detection",
    demo: "https://github.com/Adirohansuyal/Brain_Tumor_Detection",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    // GSAP animations for cards
    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                ref={(el) => (cardsRef.current[index] = el)}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full transition-colors hover:bg-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0">
                    <div className="flex gap-3 md:gap-4 w-full">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 hover:scale-105 transition-transform text-xs md:text-sm"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 hover:scale-105 transition-transform text-xs md:text-sm"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 md:mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-transform"
              asChild
            >
              <a
                href="https://github.com/Adirohansuyal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                View More Projects
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
