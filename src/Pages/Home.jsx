import { ThemeToggle } from "../Components/ThemeToggle"
import { StarBackground } from '@/Components/StarBackground'
import { Navbar } from '@/Components/NavBar'
import { HeroSection } from '@/Components/HeroSection'
import { AboutSection } from "../Components/AboutSection"
import { SkillsSection } from "../Components/SkillsSection"
import { ProjectsSection } from "../Components/ProjectsSection"
import { ContactSection } from "../Components/ContactsSection"
import { Footer } from "../Components/Footer"


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/** Theme Toggle */}
        <ThemeToggle />

        {/** Background Effects */}
        <StarBackground />

        {/** NavBar */}
        <Navbar />

        {/** Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </main>


    </div>
}