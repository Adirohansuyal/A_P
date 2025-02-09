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
    title: "AI Smart Assistant",
    description: "Developed an AI-powered smart assistant using Python and deep learning techniques for automated task management and scheduling.",
    technologies: ["Python", "TensorFlow", "NLP", "Flask"],
    github: "https://github.com/adityasuyal",
    demo: "#",
  },
  {
    title: "Chatbot Development",
    description: "Created an intelligent chatbot using machine learning algorithms for enhanced customer support automation.",
    technologies: ["Python", "NLP", "Machine Learning", "APIs"],
    github: "https://github.com/adityasuyal",
    demo: "#",
  },
  {
    title: "Data Analytics Dashboard",
    description: "Built an interactive dashboard for data visualization and analysis using Power BI and Python.",
    technologies: ["Power BI", "Python", "SQL", "Data Analytics"],
    github: "https://github.com/adityasuyal",
    demo: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    // GSAP animations for cards
    cards.forEach((card, index) => {
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
    });
  }, []);

  return (
    <section id="projects" className="py-24" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                ref={(el) => (cardsRef.current[index] = el)}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
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
                  <CardFooter className="p-6 pt-0">
                    <div className="flex gap-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:scale-105 transition-transform"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="hover:scale-105 transition-transform"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}