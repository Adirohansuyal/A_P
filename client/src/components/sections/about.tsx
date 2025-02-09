import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  {
    year: "2023",
    title: "Senior Developer",
    description: "Leading development of enterprise applications",
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    description: "Building scalable web applications",
  },
  {
    year: "2019",
    title: "Frontend Developer",
    description: "Creating responsive user interfaces",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-accent/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate developer with expertise in creating modern web applications.
                I specialize in React, TypeScript, and building beautiful user interfaces.
              </p>
              <p className="text-lg text-muted-foreground">
                With years of experience in both frontend and backend development,
                I bring a holistic approach to solving complex problems.
              </p>
            </div>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <span className="text-sm font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                          {item.year}
                        </span>
                        <div className="ml-4">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
