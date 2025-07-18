import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ContactMethod {
  icon: React.ElementType
  title: string
  value: string
  href: string
  description: string
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    title: "Email",
    value: "tapanmeena1998@gmail.com",
    href: "mailto:tapanmeena1998@gmail.com",
    description: "Send me an email for professional inquiries"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-8050851286",
    href: "tel:+918050851286",
    description: "Call me for urgent matters or discussions"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/tapanmeena",
    href: "https://www.linkedin.com/in/tapanmeena",
    description: "Connect with me on LinkedIn"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/tapanmeena",
    href: "https://github.com/tapanmeena",
    description: "Check out my projects and contributions"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Let's Connect</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking to collaborate on a project, need technical consultation, 
                  or want to discuss potential opportunities, I'd love to hear from you. 
                  I'm particularly interested in:
                </p>
                
                <ul className="space-y-2">
                  {[
                    "Software development projects",
                    "Technical leadership roles",
                    "Cloud architecture consulting",
                    "Mentoring opportunities",
                    "Open source collaborations"
                  ].map((interest, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{interest}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button asChild className="w-full" size="lg">
                    <a 
                      href="mailto:tapanmeena1998@gmail.com?subject=Hello%20Tapan&body=Hi%20Tapan,%0A%0AI%20would%20like%20to%20discuss..."
                      className="flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{method.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <Button asChild variant="outline" size="sm">
                              <a 
                                href={method.href}
                                target={method.href.startsWith('http') ? '_blank' : undefined}
                                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-sm"
                              >
                                {method.value}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm currently available for new projects and opportunities. 
                Let's discuss how we can bring your ideas to life with cutting-edge technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <a 
                    href="mailto:tapanmeena1998@gmail.com?subject=Project%20Collaboration&body=Hi%20Tapan,%0A%0AI%20have%20a%20project%20in%20mind..."
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Start a Conversation
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
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
