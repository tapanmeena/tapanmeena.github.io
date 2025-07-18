import { ThemeProvider } from "./components/theme-provider"
import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/sections/hero"
import { AboutSection } from "./components/sections/about"
import { ExperienceSection } from "./components/sections/experience"
import { SkillsSection } from "./components/sections/skills"
import { ProjectsSection } from "./components/sections/projects"
import { ContactSection } from "./components/sections/contact"
import { Footer } from "./components/footer"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="w-full min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="w-full">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
