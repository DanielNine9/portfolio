import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';

interface ContactInfoProps {
    Icon: any;
    title: string;
    content: string;
    darkMode: boolean;
}

const ContactInfo = ({ Icon, title, content, darkMode }: ContactInfoProps) => (
    <div className="flex items-start space-x-4 group">
        <div className={`p-3 rounded-lg transition-all duration-300 ${
            darkMode
                ? 'bg-blue-900/30 group-hover:bg-blue-800/40 group-hover:shadow-md'
                : 'bg-blue-100 group-hover:bg-blue-200 group-hover:shadow-md'
        }`}>
            <Icon className={`w-6 h-6 ${darkMode ? 'text-blue-500' : 'text-blue-600'}`} />
        </div>
        <div>
            <h3 className={`font-medium mb-1 transition-colors duration-300 ${
                darkMode
                    ? 'text-blue-300 group-hover:text-blue-400'
                    : 'text-blue-700 group-hover:text-blue-600'
            }`}>
                {title}
            </h3>
            <p className={`${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>{content}</p>
        </div>
    </div>
);

interface ContactProps {
    darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
    return (
        <section id="contact" className={`mt-8 relative overflow-hidden`}>
            <div className="mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mx-auto"
                >
                    <div className="text-center mb-8">
                        <div className={`inline-flex items-center justify-center mb-3 px-4 py-1.5 rounded-full ${
                            darkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                        }`}>
                            <Sparkles className={`w-4 h-4 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                            <span className={`text-sm font-medium ${
                                darkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>Let's Connect</span>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`text-3xl md:text-4xl font-bold mb-4 ${
                                darkMode ? 'text-blue-300' : 'text-blue-700'
                            }`}
                        >
                            Get in Touch
                        </motion.h2>
                        <p className={`text-base max-w-2xl mx-auto ${
                            darkMode ? 'text-blue-200' : 'text-blue-800'
                        }`}>
                            Want to collaborate or have a question? Reach out to me!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Contact Information + Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-2xl shadow-lg border backdrop-blur-sm ${
                                darkMode
                                    ? 'bg-slate-800/80 border-slate-700/50'
                                    : 'bg-white border-gray-200'
                            }`}
                        >
                            <h3 className={`text-xl font-semibold mb-6 ${
                                darkMode ? 'text-blue-300' : 'text-blue-700'
                            }`}>Contact Information</h3>
                            <div className="space-y-6">
                                <ContactInfo
                                    Icon={Mail}
                                    title="Email"
                                    content="dinhhuy1925@gmail.com"
                                    darkMode={darkMode}
                                />
                                <ContactInfo
                                    Icon={Phone}
                                    title="Phone"
                                    content="0944242140"
                                    darkMode={darkMode}
                                />
                                <ContactInfo
                                    Icon={MapPin}
                                    title="Location"
                                    content="Go Vap, Ho Chi Minh City"
                                    darkMode={darkMode}
                                />
                            </div>
                            <div className="mt-8">
                                <h3 className={`text-xl font-semibold mb-4 ${
                                    darkMode ? 'text-blue-300' : 'text-blue-700'
                                }`}>Connect with Me</h3>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    {/* GitHub */}
                                    <motion.a
                                        href="https://github.com/DanielNine9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5 }}
                                        className={`p-3 rounded-full transition-colors duration-200 ${
                                            darkMode
                                                ? 'bg-blue-900/80 text-blue-400 hover:bg-blue-900'
                                                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                                        }`}
                                        aria-label="GitHub"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </motion.a>

                                    {/* Facebook */}
                                    <motion.a
                                        href="https://www.facebook.com/dihhyun"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5 }}
                                        className={`p-3 rounded-full transition-colors duration-200 ${
                                            darkMode
                                                ? 'bg-blue-900/80 text-blue-400 hover:bg-blue-900'
                                                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                                        }`}
                                        aria-label="Facebook"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </motion.a>

                                    {/* LinkedIn */}
                                    <motion.a
                                        href="https://www.linkedin.com/in/dinh-huy-80514b2b5/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5 }}
                                        className={`p-3 rounded-full transition-colors duration-200 ${
                                            darkMode
                                                ? 'bg-blue-900/80 text-blue-400 hover:bg-blue-900'
                                                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                                        }`}
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </motion.a>

                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-2xl shadow-lg border backdrop-blur-sm ${
                                darkMode
                                    ? 'bg-slate-800/80 border-slate-700/50'
                                    : 'bg-white border-gray-200'
                            }`}
                        >
                            <h3 className={`text-xl font-semibold mb-6 ${
                                darkMode ? 'text-blue-300' : 'text-blue-700'
                            }`}>My Location</h3>
                            <div className="w-full h-96 rounded-xl overflow-hidden relative">
                                <img
                                    src="/portfolio/img/location.png"
                                    alt="Location map"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end`}>
                                    <div className="p-4 text-blue-200 font-medium">
                                        <span className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            Go Vap, Ho Chi Minh City
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className={`absolute top-1/4 left-0 w-24 h-24 rounded-full blur-xl ${
                darkMode ? 'bg-blue-400/10' : 'bg-blue-400/10'
            }`}></div>
            <div className={`absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full blur-xl ${
                darkMode ? 'bg-blue-400/10' : 'bg-blue-400/10'
            }`}></div>
        </section>
    );
};

export default Contact;