import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <nav className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-primary/20">
              <img 
                src="/avatar.png" 
                alt="Tapan Meena"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden sm:block">Tapan Meena</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="ghost" size="icon">
              <a 
                href="https://github.com/tapanmeena" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a 
                href="https://www.linkedin.com/in/tapanmeena" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild>
              <a 
                href="mailto:tapanmeena1998@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-16 left-4 right-4 z-50 md:hidden"
            >
              <Card className="p-6 shadow-xl">
                <nav className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className="block px-3 py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}

                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 mb-4">
                      <ThemeToggle />
                      <Button asChild variant="ghost" size="icon">
                        <a 
                          href="https://github.com/tapanmeena" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button asChild variant="ghost" size="icon">
                        <a 
                          href="https://www.linkedin.com/in/tapanmeena" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                    <Button asChild className="w-full">
                      <a 
                        href="mailto:tapanmeena1998@gmail.com"
                        className="flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Contact Me
                      </a>
                    </Button>
                  </div>
                </nav>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
