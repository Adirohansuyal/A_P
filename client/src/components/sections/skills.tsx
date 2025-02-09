import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SkillsSphere from "../3d/SkillsSphere";

const skills = [
  {
    category: "Data Science & ML",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    category: "Tools & Technologies",
    items: ["Jupyter", "Git", "SQL", "Power BI", "AWS", "Docker"],
  },
  {
    category: "Programming",
    items: ["Python", "R", "Java", "C++", "JavaScript", "HTML/CSS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-accent/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>

          {/* 3D Skills Visualization */}
          <div className="mb-12">
            <SkillsSphere />
          </div>

          {/* Traditional Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <motion.span
                          key={skill}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}