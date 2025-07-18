import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "MAQ Software",
    location: "Hyderabad, India",
    period: "July 2020 - Present",
    description: [
      "Develop and maintain scalable web applications using modern technologies",
      "Collaborate with cross-functional teams to deliver high-quality software solutions",
      "Implement best practices in code quality, testing, and development processes",
      "Work with cloud technologies and DevOps practices to ensure reliable deployments",
      "Participate in code reviews and mentor junior team members"
    ],
    technologies: ["Azure", "C#", ".NET", "React", "TypeScript", "JavaScript", "SQL Server", "DevOps"]
  },
  {
    title: "Technical Intern",
    company: "McAfee",
    location: "India",
    period: "May 2019 - July 2019",
    description: [
      "Worked as a technical intern gaining hands-on experience in cybersecurity technologies",
      "Contributed to software development projects and learned industry best practices",
      "Collaborated with senior developers and gained exposure to enterprise-level software development",
      "Participated in team meetings and contributed to technical discussions"
    ],
    technologies: ["Java", "Python", "Software Development", "Cybersecurity", "Team Collaboration"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/50">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary">{tech}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
