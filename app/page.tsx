"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Moon,
  Sun,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Calendar,
  Code,
  GraduationCap,
  Trophy,
  Send,
  User,
  Briefcase,
} from "lucide-react"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "projects", "skills", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Briefcase },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const projects = [
    {
      title: "File System Simulator",
      stack: ["Python", "OS Concepts", "Tkinter"],
      date: "June 2025",
      description: [
        "Simulates contiguous, linked, and indexed allocation methods",
        "GUI with file create/read/write/delete options",
      ],
    },
    {
      title: "News Aggregator App",
      stack: ["HTML", "CSS", "React", "NewsAPI"],
      date: "Jan 2025",
      description: ["Fetches top headlines by category/keyword", "Infinite scroll, responsive layout"],
    },
    {
      title: "Online Quiz App",
      stack: ["HTML", "CSS", "JavaScript", "React"],
      date: "Nov 2024",
      description: ["Timed quizzes, instant scoring", "Leaderboard and feedback system"],
    },
    {
      title: "Hospital Management System",
      stack: ["C++", "Data Structures"],
      date: "Mar 2025",
      description: ["CRUD for patients, appointments, billing", "Used OOP, STL, and file persistence"],
    },
  ]

  const skills = [
    { category: "Languages", items: ["Python", "C", "C++", "JavaScript", "HTML", "CSS"] },
    { category: "Frameworks", items: ["React", "Node.js", "Flask", "Streamlit"] },
    { category: "Developer Tools", items: ["Git", "GitHub", "VS Code", "PyCharm", "Google Cloud"] },
    { category: "Libraries", items: ["Pandas", "NumPy", "Matplotlib"] },
  ]

  const skillLevels = {
    Python: 90,
    JavaScript: 85,
    React: 80,
    "C++": 75,
    "HTML/CSS": 90,
    "Node.js": 70,
    Git: 85,
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Abhishek Majila
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>

                {/* Mobile menu button */}
                <Button variant="ghost" size="sm" className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* About Section */}
        <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                AM
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Abhishek Majila
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Aspiring Computer Science Engineer
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                Final-year B.Tech CSE student skilled in full stack development with Html,CSS ,Javascript ,React and Node.js.Seeking internship opportunities to build real-world software and grow as a developer.
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>8433249047</span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>abhiithaur0904@gmail.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Haldwani, Uttarakhand</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mt-8">
                <a
                  href="https://linkedin.com/in/Abhishek-majila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/AbhishekMajila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span>B.Tech CSE</span>
                  </CardTitle>
                  <CardDescription>Graphic Era Hill University</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2022 – Jun 2026</p>
                  <p className="mt-2">Computer Science Engineering</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-green-600" />
                    <span>Intermediate</span>
                  </CardTitle>
                  <CardDescription>Aryaman Vikram Birla Institute</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Apr 2021 – Apr 2022</p>
                  <p className="mt-2">MATHS + SCIENCE</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                    <span>High School</span>
                  </CardTitle>
                  <CardDescription>Aryaman Vikram Birla Institute</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Apr 2019 – Apr 2020</p>
                  <p className="mt-2"></p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="flex items-center space-x-2">
                        <Code className="w-5 h-5 text-blue-600" />
                        <span>{project.title}</span>
                      </CardTitle>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.stack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

       {/* Skills Section */}
<section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {skills.map((skillGroup, index) => (
        <Card key={index} className="border border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg text-blue-700 dark:text-blue-400">{skillGroup.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="outline"
                  className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Additional Skills / Strengths */}
    <div className="max-w-4xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Additional Skills & Strengths</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "Strong foundation in Data Structures and Algorithms",
          "Hands-on experience with Git and version control",
          "Basic knowledge of cloud platforms like Google Cloud",
          "Good understanding of Operating System concepts",
          "Effective communication and teamwork",
          "Quick learner and adaptive to new technologies",
          "Problem-solving and analytical thinking",
          "Project development experience using React and Python",
        ].map((point, index) => (
          <div
            key={index}
            className="flex items-start p-4 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transition"
          >
            <span className="mt-1 mr-3 w-2 h-2 bg-blue-400 rounded-full"></span>
            <p className="text-sm text-gray-800 dark:text-gray-200">{point}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                    <span>ATF 2024 – Stage 2 Qualified</span>
                  </CardTitle>
                  <CardDescription>AlgoUniversity • Oct 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Demonstrated strong skills in data structures and algorithms</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-blue-600" />
                    <span>Python Fundamentals Certificate</span>
                  </CardTitle>
                  <CardDescription>Infosys Springboard • Sep 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Covered Python , control structures, functions, data structures, and file handling</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
<section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-400">Let's Connect</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Let's Connect!
I'm always open to new opportunities, collaborations, or simply a meaningful conversation. Feel free to reach out via call, email, or WhatsApp. Whether it's a project, internship, or tech discussion—I'm just a message away. Looking forward to building something impactful together!
        </p>

        <div className="space-y-4 text-gray-800 dark:text-gray-200">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <span>abhiithaur0904@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>8433249047</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>Charrayal Suyal, Haldwani Nainital Uttarakhand</span>
          </div>
        </div>

        {/* Resume Button */}
        <div className="pt-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-4-4m4 4l4-4M4.5 20h15a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0019.5 4h-15A2.5 2.5 0 002 6.5v11A2.5 2.5 0 004.5 20z" />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="flex space-x-4 pt-6">
          <a
            href="https://linkedin.com/in/Abhishek-majila"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/AbhishekMajila"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 space-y-4">
          <a
            href="mailto:abhiithaur0904@gmail.com"
            className="block w-full text-center px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-md hover:bg-blue-200 transition"
          >
            📧 Send Email
          </a>
          <a
            href="tel:+918433249047"
            className="block w-full text-center px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-md hover:bg-blue-200 transition"
          >
            📞 Schedule a Call
          </a>
          <a
            href="https://wa.me/918433249047?text=Hi%20Abhishek%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-md hover:bg-blue-200 transition"
          >
            💬 Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">© 2025 Abhishek Majila. Built with React & Next.js</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
