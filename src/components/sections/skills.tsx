import { motion } from "framer-motion"
import { 
  Code, 
  Cloud, 
  Database, 
  Palette, 
  Cog, 
  Users,
  Cpu,
  Globe
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCategory {
  title: string
  icon: React.ElementType
  skills: string[]
  description: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    description: "Core programming languages I work with",
    skills: ["C#", "JavaScript", "TypeScript", "Python", "SQL", "PowerShell", "Bash"]
  },
  {
    title: "Frontend Development",
    icon: Palette,
    description: "Modern frontend technologies and frameworks",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design", "SPA"]
  },
  {
    title: "Backend Development",
    icon: Database,
    description: "Server-side technologies and architectures",
    skills: [".NET", "ASP.NET", "Node.js", "REST APIs", "GraphQL", "Microservices", "Entity Framework"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Cloud platforms and deployment strategies",
    skills: ["Microsoft Azure", "AWS", "Docker", "Kubernetes", "CI/CD", "Azure DevOps", "Git"]
  },
  {
    title: "Databases",
    icon: Cpu,
    description: "Database technologies and data management",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Azure SQL", "Database Design"]
  },
  {
    title: "Tools & Frameworks",
    icon: Cog,
    description: "Development tools and productivity frameworks",
    skills: ["Visual Studio", "VS Code", "Git", "Postman", "Swagger", "Jest", "Webpack"]
  },
  {
    title: "Soft Skills",
    icon: Users,
    description: "Leadership and collaboration abilities",
    skills: ["Team Leadership", "Mentoring", "Agile/Scrum", "Problem Solving", "Communication", "Project Management"]
  },
  {
    title: "Other Technologies",
    icon: Globe,
    description: "Additional technologies and concepts",
    skills: ["Machine Learning", "Data Analysis", "Power BI", "Automation", "Testing", "Performance Optimization"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and skills I use to build exceptional software solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: (index * 0.1) + (skillIndex * 0.05) 
                          }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
