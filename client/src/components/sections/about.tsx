import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  {
    year: "2023",
    title: "Data Science Student",
    description: "Pursuing advanced studies in Data Science and Machine Learning",
  },
  {
    year: "2023",
    title: "Research Intern",
    description: "Worked on Machine Learning and Deep Learning projects",
  },
  {
    year: "2022",
    title: "B.Tech Student",
    description: "Studying Computer Science with focus on AI and ML",
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
                I am an aspiring Data Scientist with a strong foundation in Machine Learning and Deep Learning.
                Currently pursuing my passion for data science and artificial intelligence through hands-on projects
                and research work.
              </p>
              <p className="text-lg text-muted-foreground">
                My expertise lies in data analysis, machine learning model development, and implementing
                innovative solutions using cutting-edge technologies. I am particularly interested in 
                applying AI to solve real-world problems.
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