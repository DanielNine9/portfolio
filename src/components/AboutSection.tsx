import { motion } from "framer-motion";
import { Rocket, Heart, Star, CloudLightning, DivideIcon as LucideIcon, Download } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel"

interface AboutSectionProps {
  darkMode: boolean;
}

const profileImages = [
  { url: "/img/me3.png", alt: "Profile picture 1" },
  { url: "/img/me2.png", alt: "Profile picture 2" },
  { url: "/img/me1.png", alt: "Profile picture 3" }
];

interface Feature {
  Icon: any;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    Icon: Rocket,
    title: "Quick Learner",
    description: "Achieved top outstanding student status multiple terms, demonstrating ability to grasp new concepts quickly.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    Icon: Heart,
    title: "Passionate Developer",
    description: "Dedicated to creating efficient and user-friendly applications with modern technologies.",
    color: "from-red-500 to-pink-600",
  },
  {
    Icon: CloudLightning,
    title: "Full Stack Capable",
    description: "Experienced in both frontend and backend development with React, Node.js, and modern frameworks.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    Icon: Star,
    title: "Achievement Oriented",
    description: "Consistently delivering high-quality solutions while maintaining excellent academic performance.",
    color: "from-amber-500 to-orange-600",
  },
];

const FeatureCard = ({ feature, index, darkMode }: { feature: Feature; index: number; darkMode: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`p-6 ${darkMode ? 'bg-slate-800/90' : 'bg-white/90'} backdrop-blur-sm rounded-xl shadow-lg border ${darkMode ? 'border-slate-700' : 'border-gray-100'} relative overflow-hidden`}
  >
    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${feature.color} opacity-10 rounded-bl-full`}></div>

    <div className="flex items-center mb-4">
      <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} mr-4`}>
        <feature.Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {feature.title}
      </h3>
    </div>
    <p className={`${darkMode ? 'text-slate-300' : 'text-gray-600'} relative z-10`}>
      {feature.description}
    </p>
  </motion.div>
);

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-40 left-20 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 lg:col-span-7"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className={`px-4 py-2 ${darkMode ? 'bg-indigo-900/30 text-indigo-300' : 'bg-indigo-50 text-indigo-600'} rounded-full text-sm font-medium inline-block`}
              >
                Introducing Myself
              </motion.span>

              <h2 className={`text-4xl md:text-5xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600`}>
                About Me
              </h2>

              <div className="space-y-4">
                <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-gray-600'} leading-relaxed`}>
                  Hello! I'm a <span className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Web Developer</span> with 
                  a strong foundation in modern web development. I specialize in building responsive and dynamic web applications.
                </p>

                <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-gray-600'} leading-relaxed`}>
                  I'm passionate about creating elegant solutions that provide excellent user experiences. With a focus on clean code
                  and modern best practices, I strive to deliver high-quality applications that make a difference.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 font-medium"
                >
                  Get in Touch
                </motion.a>

                {/* <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/resume.pdf"
                    download
                    className={`inline-flex items-center px-6 py-3 ${
                      darkMode ? 'bg-slate-800 text-indigo-400 border-indigo-400' : 'bg-white text-indigo-600 border-indigo-600'
                    } border rounded-lg shadow-md hover:shadow-lg transition-all duration-200 font-medium`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </motion.div> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:col-span-5"
            >
              <div className={`relative rounded-xl overflow-hidden shadow-2xl border-4 ${
                darkMode ? 'border-slate-800' : 'border-white'
              }`}>
                <ImageCarousel images={profileImages} autoplaySpeed={6000} />

                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className={`${darkMode ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-sm px-4 py-2 rounded-lg`}>
                    <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Dinh Quoc Huy
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} darkMode={darkMode} />
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;