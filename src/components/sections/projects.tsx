import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  period: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Enterprise Data Analytics Platform",
    description: "Scalable analytics platform for processing large datasets",
    longDescription: "Led the development of a comprehensive data analytics platform that processes millions of records daily. The platform provides real-time insights and automated reporting capabilities for enterprise clients.",
    technologies: ["Azure", "C#", ".NET Core", "React", "TypeScript", "SQL Server", "Power BI"],
    period: "2023 - Present",
    featured: true
  },
  {
    title: "Automated Deployment Pipeline",
    description: "CI/CD pipeline automation for microservices architecture",
    longDescription: "Designed and implemented an automated deployment pipeline that reduced deployment time by 70% and improved system reliability. The solution supports multiple environments and rollback capabilities.",
    technologies: ["Azure DevOps", "Docker", "Kubernetes", "PowerShell", "YAML"],
    period: "2022 - 2023",
    featured: true
  },
  {
    title: "Customer Portal Application",
    description: "Modern web application for customer self-service",
    longDescription: "Developed a responsive customer portal that allows users to manage their accounts, track orders, and access support resources. The application supports multiple authentication methods and real-time notifications.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Azure"],
    period: "2022",
    githubUrl: "https://github.com/tapanmeena"
  },
  {
    title: "Performance Monitoring Dashboard",
    description: "Real-time system monitoring and alerting solution",
    longDescription: "Created a comprehensive monitoring dashboard that tracks system performance metrics, provides real-time alerts, and generates automated reports for stakeholders.",
    technologies: ["Power BI", "Azure Monitor", "C#", "SQL Server", "REST APIs"],
    period: "2021 - 2022"
  },
  {
    title: "API Gateway Service",
    description: "Centralized API management and security layer",
    longDescription: "Built a robust API gateway that handles authentication, rate limiting, and request routing for multiple microservices. Improved API security and reduced response times.",
    technologies: [".NET Core", "Azure API Management", "OAuth", "Redis", "Docker"],
    period: "2021"
  },
  {
    title: "Data Migration Tool",
    description: "Automated tool for large-scale data migration",
    longDescription: "Developed a specialized tool for migrating legacy data to modern cloud platforms. The tool handles data validation, transformation, and provides detailed migration reports.",
    technologies: ["C#", "SQL Server", "Azure SQL", "PowerShell", "Entity Framework"],
    period: "2020 - 2021"
  }
]

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my technical expertise and problem-solving abilities
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Badge variant="default" className="mb-2">Featured</Badge>
                      <CardTitle className="text-xl md:text-2xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        {project.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
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

                  <div className="flex gap-3 pt-2">
                    {project.demoUrl && (
                      <Button asChild variant="default">
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild variant="outline">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Other Notable Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View Project
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
