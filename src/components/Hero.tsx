import { motion } from 'framer-motion'
import { personalInfo } from '../data/personal'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-5xl mx-auto px-4 w-full pt-20 pb-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center"
        >
          <motion.div variants={item} className="md:col-span-2 flex justify-center">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-48 h-48 md:w-56 md:h-56 rounded-full ring-2 ring-gray-700 ring-offset-4 ring-offset-gray-950 object-cover bg-gray-800"
            />
          </motion.div>

          <motion.div variants={item} className="md:col-span-3 text-center md:text-left">
            <p className="text-sm md:text-base text-emerald-400 font-mono mb-2">
              你好，我是
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mt-3 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-block px-6 py-2.5 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors"
              >
                查看项目
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-2.5 border border-gray-600 text-gray-300 rounded-lg font-medium text-sm hover:border-gray-400 hover:text-white transition-colors"
              >
                联系我
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="text-gray-500"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
