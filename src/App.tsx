import AboutSection from "./components/Sections/AboutSection";
import Header from "./components/Header";
import NameSection from "./components/Sections/NameSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import SkillsSection from "./components/Sections/SkillsSection";
import ContactSection from "./components/Sections/ContactSection";

function App() {
  return (
    <>
      <Header />
      <NameSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
