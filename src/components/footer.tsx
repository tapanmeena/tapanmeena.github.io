import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-primary/20">
                <img 
                  src="/avatar.png" 
                  alt="Tapan Meena"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">Tapan Meena</span>
            </div>
            <p className="text-muted-foreground">
              Senior Software Engineer passionate about building scalable solutions 
              and leading cross-functional teams.
            </p>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="icon">
                <a 
                  href="https://github.com/tapanmeena" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a 
                  href="https://www.linkedin.com/in/tapanmeena" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a 
                  href="mailto:tapanmeena1998@gmail.com"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 tapanmeena1998@gmail.com</p>
              <p>📱 +91-8050851286</p>
              <p>📍 Hyderabad, Telangana, India</p>
            </div>
            <Button asChild className="w-full">
              <a 
                href="mailto:tapanmeena1998@gmail.com?subject=Hello%20Tapan"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Message
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Tapan Meena. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React, TypeScript, and Tailwind CSS.</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/tapanmeena/tapanmeena.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              View Source
            </a>
            <span>•</span>
            <span>Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
