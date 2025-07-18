import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-background to-muted/50">
      <div className="container max-w-4xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-8 shadow-xl border-0 bg-background/80 backdrop-blur-sm w-full max-w-4xl mx-auto">
            <CardContent className="space-y-6">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg"
              >
                <img 
                  src="/avatar.png" 
                  alt="Tapan Meena - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Tapan Meena
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Senior Software Engineer
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Passionate about building scalable solutions and leading cross-functional teams. 
                  Specializing in cloud technologies, automation, and modern software development practices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Hyderabad, India
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91-8050851286
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  tapanmeena1998@gmail.com
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button asChild variant="default" size="lg">
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Get In Touch
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a 
                    href="https://www.linkedin.com/in/tapanmeena" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a 
                    href="https://github.com/tapanmeena" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
