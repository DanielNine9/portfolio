import React, { useState, useEffect, useRef } from "react";
import { Github, Mail, MapPin, Moon, Sun, Code2 } from "lucide-react";
import { Hero } from "./components/Hero";
import Experience from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Awards } from "./components/Awards";
import { Resume } from "./components/Resume";
import { Sidebar } from "./components/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import GitHubContributions from "./components/GitHubContributions";
import GitHubStreak from "./components/GithubStreak";
import Contact from "./components/Contact";
import PersonelProjects from "./components/PersonelProjects";
import { GithubUser, Repository } from "./types";
import { fetchGithubUser, fetchRepositories } from "./services/github";
import ProjectsSection from "./components/ProjectSection";
import emailjs from "@emailjs/browser";
import { AboutSection } from "./components/AboutSection";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [repositories, setRepositories] = useState<Repository[] | null>(null);
  const [isReposLoading, setIsReposLoading] = useState(true);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const hasSentEmail = useRef(false); // Track if email has been sent

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const isPrj = searchParams.get("projects");
    const projectId = searchParams.get("projectId");
    if (projectId) {
      setActiveSection("projects");
      setTimeout(() => {
        if (projectId) {
          const element = document.getElementById(`project-card-${projectId}`);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - 100, // Offset by 100px for the navbar
              behavior: "smooth",
            });
          }
        } else {
          const element = document.getElementById("projects");
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - 200, // Offset by 200px for the navbar
              behavior: "smooth",
            });
          }
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const notifyVisit = async () => {
      if (hasSentEmail.current) return; // Skip if email was already sent
      hasSentEmail.current = true; // Mark email as sent

      try {
        const visitTime: string = new Date().toLocaleString();
        const searchParams = new URLSearchParams(window.location.search);
        const projectId = searchParams.get("projectId");

        // Fetch visitor's IP address
        let ipAddress = "Unknown";
        try {
          const response = await fetch("https://api.ipify.org?format=json");
          const data = await response.json();
          
          ipAddress = data.ip || "Unknown";
          if(ipAddress == "116.111.184.113"){
            return;
          }
        } catch (error) {
          console.error("Error fetching IP address:", error);
        }

        // Prepare email content
        const emailContent = {
          to_email: "huydqpc07859@fpt.edu.vn",
          subject: "New Visitor to Your Portfolio",
          message: projectId
            ? `Someone accessed your portfolio via CV by clicking on project ID ${projectId} at: ${visitTime}. Visitor IP: ${ipAddress}`
            : `Someone visited your portfolio at: ${visitTime}. Visitor IP: ${ipAddress}`,
        };

        // Send email using EmailJS
        await emailjs.send(
          "service_zdozy9m", // Replace with your EmailJS Service ID
          "template_u7mkdhf", // Use EmailJS default template
          emailContent,
          "4BWiW0q4fFEr1ha7Z" // Replace with your EmailJS User ID
        );
        console.log("Notification email sent successfully");
      } catch (error) {
        console.error("Error sending notification email:", error);
      }
    };

    // Initialize EmailJS
    emailjs.init("4BWiW0q4fFEr1ha7Z"); // Replace with your EmailJS User ID
    notifyVisit();
  }, []); // Runs once on page load

  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch GitHub user data
        setIsUserLoading(true);
        const userData = await fetchGithubUser();
        setUser(userData);
        setIsUserLoading(false);

        // Fetch repositories
        setIsReposLoading(true);
        const reposData = await fetchRepositories();
        setRepositories(reposData);
        setIsReposLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setIsUserLoading(false);
        setIsReposLoading(false);
      }
    };

    loadData();
  }, []);

  // Update document title
  useEffect(() => {
    document.title = user?.name
      ? `${user.name} | Portfolio`
      : "Daniel Nine9 | Portfolio";
  }, [user]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "projects",
        "education",
        "skills",
        "github",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-slate-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`${
          darkMode ? "bg-slate-800" : "bg-white"
        } shadow-sm fixed top-0 left-0 right-0 z-50 transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Huy Dinh
            </span>
            <div className="flex space-x-4 items-center">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${
                  darkMode ? "hover:bg-slate-700" : "hover:bg-gray-100"
                } transition-colors duration-300`}
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-amber-400" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-600" />
                )}
              </button>
              <a
                href="https://leetcode.com/u/dqhuyy/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-amber-400 hover:text-amber-300"
                    : "text-amber-600 hover:text-amber-700"
                } transition-colors duration-300`}
              >
                <Code2 className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/DanielNine9"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-purple-400 hover:text-purple-300"
                    : "text-purple-600 hover:text-purple-700"
                } transition-colors duration-300`}
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:dinhhuy1925@gmail.com"
                className={`${
                  darkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-700"
                } transition-colors duration-300`}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
       {/* Sidebar */}
      </nav>
      <div className="transition-all duration-300 w-full">
        <main className="px-4 sm:px-6 lg:px-8 py-16 w-full d-flex">
          <Sidebar
            darkMode={darkMode}
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className=" pl-[80px]"
            >
              {/* <section id="about">
                <Hero darkMode={darkMode} />
              </section> */}
              <section id="about1">
                <AboutSection darkMode={darkMode} />
              </section>
              <section id="experience">
                <Experience darkMode={darkMode} />
              </section>
              <section id="projects">
                <Projects darkMode={darkMode} />
              </section>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
                id="education"
              >
                <section className="flex flex-col">
                  <Education darkMode={darkMode} />
                </section>
                <section>
                  <Awards darkMode={darkMode} />
                </section>
              </div>
              <section id="skills">
                <Skills darkMode={darkMode} />
              </section>
              <ProjectsSection darkMode={darkMode} />
              <section id="github" className="mt-8">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`mb-8 text-3xl sm:text-4xl font-bold text-center ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Github
                </motion.h2>
                <GitHubStreak darkMode={darkMode} />
                <div className="mt-8">
                  <GitHubContributions darkMode={darkMode} />
                </div>
              </section>
              <section id="contact">
                <Contact darkMode={darkMode} />
              </section>
            </motion.div>
          </AnimatePresence>
        </main>
        {/* Footer */}
        <footer
          className={`${
            darkMode ? "bg-slate-800" : "bg-white"
          } -my-8 py-8 transition-colors duration-300`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/DanielNine9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? "text-purple-400 hover:text-purple-300"
                      : "text-purple-600 hover:text-purple-700"
                  } transition-colors duration-300 flex items-center`}
                >
                  <Github className="h-4 w-4 mr-2" />
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:dinhhuy1925@gmail.com"
                  className={`${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  } transition-colors duration-300 flex items-center`}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;